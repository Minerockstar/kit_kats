import React, { useEffect, useState } from 'react'
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";
import './Student.css'
import { GrView } from "react-icons/gr";
import axios from 'axios';
import { MdDelete, MdEdit, MdOutlineFileDownloadDone} from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ViewAttendance = () => {
  const [data, setData] = useState()
  const [itemsPerPage] = useState(3); 
  const [editMode, setEditMode] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState([])
  const [ref, setRef] = useState(true)
  const [editedData, setEditedData] = useState({});
  const [emp, setEmp] = useState('')
  const [status, setStatus] = useState('')
  const [permission, setPermission] = useState('')
  const [leave, setLeave] = useState('')
  const [inTime, setInTime] = useState('')
  const [inDate, setInDate] = useState('')
  const [outDate, setOutDate] = useState('')
  const [outTime, setOutTime] = useState('')
 
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false); 

  useEffect(() => {
    axios.get("http://localhost:6001/api/getattend")
      .then((res) => {
        console.log('Fetched employees:', res.data); // Log data to check if it is correct
        setData(res.data);
      })
      .catch((err) => console.error('Error fetching employees:', err));
  }, [ref]);
  const handleSaveEdit = (v)=>{
    
    axios.put(`${"http://localhost:6001/api/updateattend"}/${v._id}`, editedData, {
      emp,
      status,
      permission,
      leave,
      inTime,
      inDate,
      outDate,
      outTime

    })
   .then((res)=>{
    setEmp('')
    setStatus('')
    setPermission('')
    setLeave('')
    setInTime('')
    setInDate('')
    setOutDate('')
    setOutTime('')
    setEditMode(null);
    console.log(res)})
   .catch((err)=>{console.log(err)})
   
  }
  
  const handleEditRow = (id) => {
    setEditMode(id);
    const selectedItem = data.find((item) => item._id === id);
    setEditedData(selectedItem);
    console.log(id);
  };
  const handleSearchInputChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data ? data.slice(startIndex, endIndex) : [];
  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;
  // const handlePaginationClick = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };
  const handlePaginationClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
    
  };
  const handleIdStd = (id) => {
    const selected = data.find(student => student._id === id);
    setSelectedStudent(selected);
    setModalIsOpen(true); // Open the modal when student is selected
  };
  // const handleDeleteRow = (v)=>{
   
  //   axios.delete(`${"http://localhost:6001/api/delete"}/${v._id}`).then((res)=>console.log(res))
    
  //   console.log(v);
  // }
  return (
    <div className='studentlist'>
    <div className='stdlistbodys'>
   <div className='stdlistboby'>
    <span className='iospro' ><IoIosPeople /> Add Student</span>
    <span className='registerstdlist'>Manage Student</span> 
    <p>Stundent Info <IoIosArrowForward /> Student List</p>
   </div>
   </div>
<div>
<div><input type="text" placeholder='Search' id='search' value={search} onChange={handleSearchInputChange}
 /></div>
 <div className='tableboby'>
 <table className='listtab'>
        <tr className='headth'>
          <th>Employee</th>
          <th>Status</th>
          <th>Permission</th>
          <th>Leave</th>
          <th>InTime</th>
          <th>InDate</th>
          <th>outDate</th>
          <th>outTime</th>
          <th>Actions</th>
        </tr>
        <tbody >
        {data && currentItems.map((v) => {
            if (
              search === '' ||
              Object.values(v).some(
                (val) =>
                  typeof val === 'string' && val.toLowerCase().includes(search)
              )
            ) 
            {
              return (
                <tr key={v._id} className='trinput'>
              <td onClick={() => handleIdStd(v._id)}>{v.emp}</td>
              <td>{editMode === v._id ? <input type="text" name="status" value={editedData.status} 
              onChange={handleInputChange} /> : v.status}</td>
              <td >{editMode === v._id ? <input type="text" name="permission" value={editedData.permission} 
              onChange={handleInputChange} /> :v.permission}</td>
              <td >{editMode === v._id ? <input type="text" name="leave" value={editedData.leave} 
              onChange={handleInputChange} /> :v.leave}</td>
              <td >{editMode === v._id ? <input type="text" name="inTime" value={editedData.inTime} 
              onChange={handleInputChange} /> :v.inTime}</td>
              <td >{editMode === v._id ? <input type="text" name="inDate" value={editedData.inDate} 
              onChange={handleInputChange} /> :v.inDate}</td>
              <td >{editMode === v._id ? <input type="text" name="outDate" value={editedData.outDate} 
              onChange={handleInputChange} /> :v.outDate}</td>
              <td >{editMode === v._id ? <input type="text" name="outTime" value={editedData.outTime} 
              onChange={handleInputChange} /> :v.outTime}</td>
              <td>
              <MdEdit className='delicon' id='cash'onClick={() => handleEditRow(v._id)}  />
              <MdOutlineFileDownloadDone className='saveicons' id='cash'onClick={()=>handleSaveEdit(v)} />
              {/* <MdDelete onClick={() => handleIdStd(v._id)} className='deldelicons' id='cash'  /> */}
             <div>
             {/* <span className='viewicon'>View </span><span><GrView className='viewstd'/></span> */}
             </div> 
              </td>
              
            </tr>
              );
            }
            return null;
          })}
        </tbody>
        </table>
        <div className='pagibtn'>
          <button
            onClick={() => handlePaginationClick(currentPage - 1)}
            disabled={currentPage === 1}
            className={currentPage === 1 ? 'disabled' : ''}
          >
            Prev
          </button>
          <button
            onClick={() => handlePaginationClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={currentPage === totalPages ? 'disabled' : ''}
          >
            Next
          </button>
        </div>
        </div>
</div>

  </div>
  )
}

export default ViewAttendance

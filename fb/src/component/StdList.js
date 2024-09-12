import React, { useEffect, useState } from 'react'
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";
import './Student.css'
import { GrView } from "react-icons/gr";
import axios from 'axios';
import { MdDelete, MdEdit, MdOutlineFileDownloadDone} from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const StdList = () => {
  const [data, setData] = useState()
  const [itemsPerPage] = useState(3); 
  const [editMode, setEditMode] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState([])
  const [ref, setRef] = useState(true)
  const [editedData, setEditedData] = useState({});
  const [gender, setgender] = useState('')
  const [stdId, setStdId] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [dob, setdob] = useState('')
  const [contact, setcontact] = useState('')
  const [totalAmt, setTotalAmt] = useState('')
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false); 


  useEffect(() => {
    axios.get("http://localhost:6001/api/getstd").then((res) => {
      console.log(res.data);
      setData(res.data);

    });
  }, [ref])
  const handleSaveEdit = (v)=>{
    
    axios.put(`${"http://localhost:6001/api/update"}/${v._id}`, editedData, {
      stdId,
      firstname,
      lastname,
      dob,
      contact,
      gender,
      totalAmt
    })
   .then((res)=>{
    setStdId('')
    setfirstname('')
    setlastname('')
    setdob('')
    setgender('')
    setcontact('')
    setTotalAmt('')
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
            <th>ID</th>
            <th>FirtName</th>
            <th>LastName</th>
            <th>DOB</th>
            <th>Contact</th>
            <th>Gender</th>
            <th>Total Amount</th>
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
                <td onClick={() => handleIdStd(v._id)}>{v.stdId}</td>
                <td>{editMode === v._id ? <input type="text" name="firstname" value={editedData.firstname} 
                onChange={handleInputChange} /> : v.firstname}</td>
                <td >{editMode === v._id ? <input type="text" name="lastname" value={editedData.lastname} 
                onChange={handleInputChange} /> :v.lastname}</td>
                <td >{editMode === v._id ? <input type="text" name="dob" value={editedData.dob} 
                onChange={handleInputChange} /> :v.dob}</td>
                <td >{editMode === v._id ? <input type="text" name="contact" value={editedData.contact} 
                onChange={handleInputChange} /> :v.contact}</td>
                <td >{editMode === v._id ? <input type="text" name="gender" value={editedData.gender} 
                onChange={handleInputChange} /> :v.gender}</td>
                <td >{editMode === v._id ? <input type="text" name="totalAmt" value={editedData.totalAmt} 
                onChange={handleInputChange} /> :v.totalAmt}</td>
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

export default StdList

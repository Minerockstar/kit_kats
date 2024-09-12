import React, { useEffect, useState } from 'react'
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";
import './Student.css'
import { GrView } from "react-icons/gr";
import axios from 'axios';
import { MdDelete, MdEdit, MdOutlineFileDownloadDone} from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const EmpList = () => {
  const [data, setData] = useState()
  const [itemsPerPage] = useState(3); 
  const [editMode, setEditMode] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState([])
  const [ref, setRef] = useState(true)
  const [editedData, setEditedData] = useState({});
  const [empId, setEmpId] = useState('')
  const [empFirstname, setEmpFirstname] = useState('')
  const [empLastname, setEmpLastname] = useState('')
  const [emp_dob, setEmp_dob] = useState('')
  const [emp_email, setEmp_email] = useState('')
  const [emp_contact, setEmp_contact] = useState('')
  const [emp_desg, setEmp_desg] = useState('')
  const [emp_exp, setEmp_exp] = useState('')
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false); 


  useEffect(() => {
    axios.get("http://localhost:6001/api/empget").then((res) => {
      console.log(res.data);
      setData(res.data);

    });
  }, [ref])
  const handleSaveEdit = (v)=>{
    
    axios.put(`${"http://localhost:6001/api/empedit"}/${v._id}`, editedData, {
      empId,
      empFirstname,
      empLastname,
      emp_dob,
      emp_email,
      emp_contact,
      emp_desg,
      emp_exp
    })
   .then((res)=>{
    setEmpId('')
    setEmpFirstname('')
    setEmpLastname('')
    setEmp_dob('')
    setEmp_email('')
    setEmp_contact('')
    setEmp_desg('')
    setEmp_exp('')
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
   
  //   axios.delete(`${"http://localhost:6001/api/empdelete"}/${v._id}`).then((res)=>console.log(res))
    
  //   console.log(v);
  // }
  return (
    <div className='emplist'>
      <div className='emplistbodys'>
     <div className='stdlistboby'>
      <span className='iospro' ><IoIosPeople /> Add Employee</span>
      <span className='registeremplist'>Manage Employees Data</span> 
      <p >Employee Info <IoIosArrowForward /> Employees List</p>
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
            <th>Email</th>
            <th>Contact</th>
            <th>Designation</th>
            <th>Experience</th>
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
                <td onClick={() => handleIdStd(v._id)}>{v.empId}</td>
                <td>{editMode === v._id ? <input type="text" name="empFirstname" value={editedData.empFirstname} 
                onChange={handleInputChange} /> : v.empFirstname}</td>
                <td >{editMode === v._id ? <input type="text" name="empLastname" value={editedData.empLastname} 
                onChange={handleInputChange} /> :v.empLastname}</td>
                <td >{editMode === v._id ? <input type="text" name="emp_dob" value={editedData.emp_dob} 
                onChange={handleInputChange} /> :v.emp_dob}</td>
                <td >{editMode === v._id ? <input type="text" name="emp_email" value={editedData.emp_email} 
                onChange={handleInputChange} /> :v.emp_email}</td>
                <td >{editMode === v._id ? <input type="text" name="emp_contact" value={editedData.emp_contact} 
                onChange={handleInputChange} /> :v.emp_contact}</td>
                <td >{editMode === v._id ? <input type="text" name="emp_desg" value={editedData.emp_desg} 
                onChange={handleInputChange} /> :v.emp_desg}</td>
                <td >{editMode === v._id ? <input type="text" name="emp_exp" value={editedData.emp_exp} 
                onChange={handleInputChange} /> :v.emp_exp}</td>
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

export default EmpList

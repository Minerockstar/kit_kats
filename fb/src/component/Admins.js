import React, { useEffect, useState } from 'react'
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";
import './Student.css'
import { GrView } from "react-icons/gr";
import axios from 'axios';
import { MdDelete, MdEdit, MdOutlineFileDownloadDone} from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Admins = () => {
  const [editedData, setEditedData] = useState({});
  const [data, setData] = useState([])
  const [name, setname] = useState('')
  const [doj, setdoj] = useState('')
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [comment, setcomment] = useState('')
  const [itemsPerPage] = useState(3); 
  const [editMode, setEditMode] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState([])
  const [ref, setRef] = useState(true)
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false); 


  useEffect(() => {
    axios.get("http://localhost:6001/api/crtstaff").then((res) => {
      console.log(res.data);
      setData(res.data);

    });
  }, [ref])
  
  
  const handleSaveEdit = (v)=>{
    
    axios.put(`${"http://localhost:6001/api/editstaff"}/${v._id}`, editedData, {
      name,
      doj,
      username,
      password,
      comment

    })
   .then((res)=>{
   
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
   
  //   axios.delete(`${"http://localhost:6001/api/delcustomer"}/${v._id}`).then((res)=>console.log(res))
    
  //   console.log(v);
  // }
  return (
    <div className='studentlist'>
      <div className='stdlistbodys'>
     <div className='adminlistboby'>
      <span className='iospro' ><IoIosPeople /> Add Admin</span>
      <span className='registeradmonsli'>Admins</span> 
      <p>Master <IoIosArrowForward /> Admins</p>
     </div>
     </div>
<div>
<div><input type="text" placeholder='Search' id='search' value={search} onChange={handleSearchInputChange}
   /></div>
   <div className='tableboby'>
   <table className='listtab'>
          <tr className='headth'>
            <th>Admin Name</th>
            <th>DOJ</th>
            <th>User Name</th>
            <th>Password</th>
            <th>Comment</th>
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
                <td >{editMode === v._id ? <input type="text" name="name" value={editedData.name} 
              onChange={handleInputChange} /> : v.name}</td>
                <td>{editMode === v._id ? <input type="text" name="doj" value={editedData.doj} 
              onChange={handleInputChange} /> : v.doj}</td>
                <td>{editMode === v._id ? <input type="text" name="username" value={editedData.username} 
              onChange={handleInputChange} /> : v.username}</td>
                <td >{editMode === v._id ? <input type="text" name="password" value={editedData.password} 
              onChange={handleInputChange} /> : v.password}</td>
                <td >{editMode === v._id ? <input type="text" name="comment" value={editedData.comment} 
              onChange={handleInputChange} /> : v.comment}</td>
                <td>
                <MdEdit className='delicon' id='cash' onClick={() => handleEditRow(v._id)}/>
                <MdOutlineFileDownloadDone className='saveicons'
                onClick={()=>handleSaveEdit(v)} id='cash'/>
                {/* <MdDelete onClick={() => handleDeleteRow(v._id)} className='deldelicons' id='cash'  /> */}
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

export default Admins

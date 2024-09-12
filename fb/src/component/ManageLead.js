import React, { useEffect, useState } from 'react'
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";
import './Student.css'
import { GrView } from "react-icons/gr";
import { IoPrintSharp,IoFilter } from "react-icons/io5";
import { BsClipboardDataFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import axios from 'axios';
import { MdDelete, MdEdit, MdOutlineFileDownloadDone} from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ManageLead = () => {
  const [date, setdate] = useState('')
  const [name, setname] = useState('')
  const [itemsPerPage] = useState(3); 
  const [editMode, setEditMode] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState([])
  const [ref, setRef] = useState(true)
  const [editedData, setEditedData] = useState({});
  const [quali, setquali] = useState('')
  const [yop, setyop] = useState('')
  const [data, setData] = useState([])
  const [contact, setcontact] = useState('')
  const [loca, setloca] = useState('')
  const [update, setupdate] = useState('')
  const [desent, setdesent] = useState('')
  const [agginedto, setagginedto] = useState('')
  const [course, setcourse] = useState('')
  const [source, setsource] = useState('')
 
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false); 

  useEffect(() => {
    axios.get("http://localhost:6001/api/crtlead")
      .then((res) => {
        console.log('Fetched employees:', res.data); // Log data to check if it is correct
        setData(res.data);
      })
      .catch((err) => console.error('Error fetching employees:', err));
  }, [ref]);
  const handleSaveEdit = (v)=>{
    
    axios.put(`${"http://localhost:6001/api/editvlead"}/${v._id}`, editedData, {
      date,
      name,
      quali,
      yop,
      contact,
      loca,
      update,
      desent,
      agginedto,
      course,
      source

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
   
  //   axios.delete(`${"http://localhost:6001/api/delete"}/${v._id}`).then((res)=>console.log(res))
    
  //   console.log(v);
  // }
  return (
    <div className='studentlist'>
    <div className='stdlistbodys'>
   <div className='stdlistboby'>
    <span className='managelead' >Manage Leads</span>
    <div className='mandownload'>
    <span className=''>Add Leads <IoIosPeople /></span> 
    <span className=''>Bulk Data <BsClipboardDataFill /></span>
    <span className=''>Sample <FaDownload /></span>
    <span className=''>Filter <IoFilter /></span>
    <span className=''>Excel <FaDownload /></span>
    <span className=''>Print <IoPrintSharp /></span>
    
    </div>
    
   </div>
   </div>
<div>
<div><input type="text" placeholder='Search' id='search' value={search} onChange={handleSearchInputChange}
 /></div>
 <div className='tableboby'>
 <table className='listtab'>
        <tr className='headth'>
          <th>Date</th>
          <th>Name</th>
          <th>Qualif</th>
          <th>YOP</th>
          <th>Contact</th>
          <th>Location</th>
          <th>Followus</th>
          <th>Sent</th>
          <th>Assignee</th>
          <th>Course</th>
          <th>Source</th>
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
              {/* <td>{editMode === v._id ? <input type="text" name="date" value={editedData.date} 
              onChange={handleInputChange} /> : v.date}</td>
              <td >{editMode === v._id ? <input type="text" name="name" value={editedData.name} 
              onChange={handleInputChange} /> :v.name}</td>
              <td >{editMode === v._id ? <input type="text" name="quali" value={editedData.quali} 
              onChange={handleInputChange} /> :v.quali}</td>
              <td >{editMode === v._id ? <input type="text" name="yop" value={editedData.yop} 
              onChange={handleInputChange} /> :v.yop}</td>
              <td >{editMode === v._id ? <input type="text" name="contact" value={editedData.contact} 
              onChange={handleInputChange} /> :v.contact}</td>
              <td >{editMode === v._id ? <input type="text" name="loca" value={editedData.loca} 
              onChange={handleInputChange} /> :v.loca}</td>
              <td >{editMode === v._id ? <input type="text" name="update" value={editedData.update} 
              onChange={handleInputChange} /> :v.update}</td>
              <td >{editMode === v._id ? <input type="text" name="desent" value={editedData.desent} 
              onChange={handleInputChange} /> :v.desent}</td>
              <td >{editMode === v._id ? <input type="text" name="agginedto" value={editedData.agginedto} 
              onChange={handleInputChange} /> :v.agginedto}</td>
              <td >{editMode === v._id ? <input type="text" name="course" value={editedData.course} 
              onChange={handleInputChange} /> :v.course}</td>
              <td >{editMode === v._id ? <input type="text" name="source" value={editedData.source} 
              onChange={handleInputChange} /> :v.source}</td>
              <td> */}
              {/* <MdEdit className='delicon' id='cash'onClick={() => handleEditRow(v._id)}  /> */}
              {/* <MdOutlineFileDownloadDone className='saveicons' id='cash'onClick={()=>handleSaveEdit(v)} /> */}
              {/* <MdDelete onClick={() => handleIdStd(v._id)} className='deldelicons' id='cash'  /> */}
             <div>
             {/* <span className='viewicon'>View </span><span><GrView className='viewstd'/></span> */}
             </div> 
              {/* </td> */}
              
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

export default ManageLead
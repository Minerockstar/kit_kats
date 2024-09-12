import React, { useEffect, useState } from 'react'
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";
import './Student.css'
import { GrView } from "react-icons/gr";
import axios from 'axios';
import { MdDelete, MdEdit, MdOutlineFileDownloadDone} from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const CashOut = () => {
  const [data, setData] = useState()
  const [itemsPerPage] = useState(3); 
  const [editMode, setEditMode] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState([])
  const [ref, setRef] = useState(true)
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')
  const [editedData, setEditedData] = useState({});
  const [balance, setBalance] = useState('')
  const [paidamt, setPaidamt] = useState('')
  const [reAMt, setReAMt] = useState('')
  const [comment, setComment] = useState('')
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false); 


  useEffect(() => {
    axios.get("http://localhost:6001/api/crtvendor").then((res) => {
      console.log(res.data);
      setData(res.data);

    });
  }, [ref])
  
  
  const handleSaveEdit = (v)=>{
    
    axios.put(`${"http://localhost:6001/api/postven"}/${v._id}`, editedData, {
      name,
      type,
      contact,
      email,
      address,
      balance,
      paidamt,
      reAMt,
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
  return (
    <div className='studentlist'>
      <div className='stdlistbodys'>
     <div className='receitboby'>
      <span className='iospros' ><IoIosPeople /> Create</span>
      <span className='registerstdlist'>Manage CashOut Reciept</span> 
      <p >Reciept <IoIosArrowForward /> Cash-Out</p>
     </div>
     </div>
<div>
<div><input type="text" placeholder='Search' id='search' value={search} onChange={handleSearchInputChange}
   /></div>
   <div className='tableboby'>
   <table className='listtab'>
          <tr className='headth'>
            <th>Vendor Name</th>
            <th>Vendor Type</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Address</th>
            <th>Current Balance</th>
            <th>Paid Amount</th>
            <th>Remaining Amount</th>
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
                
                <td>{editMode === v._id ? <input type="text" name="name" value={editedData.name} 
                onChange={handleInputChange} /> : v.name}</td>
                <td >{editMode === v._id ? <input type="text" name="type" value={editedData.type} 
                onChange={handleInputChange} /> :v.type}</td>
                <td >{editMode === v._id ? <input type="text" name="contact" value={editedData.contact} 
                onChange={handleInputChange} /> :v.contact}</td>
                <td >{editMode === v._id ? <input type="text" name="email" value={editedData.email} 
                onChange={handleInputChange} /> :v.email}</td>
                <td >{editMode === v._id ? <input type="text" name="address" value={editedData.address} 
                onChange={handleInputChange} /> :v.address}</td>
                <td >{editMode === v._id ? <input type="text" name="balance" value={editedData.balance} 
                onChange={handleInputChange} /> :v.balance}</td>
                <td >{editMode === v._id ? <input type="text" name="paidamt" value={editedData.paidamt} 
                onChange={handleInputChange} /> :v.paidamt}</td>
                <td >{editMode === v._id ? <input type="text" name="reAMt" value={editedData.reAMt} 
                onChange={handleInputChange} /> :v.reAMt}</td>
                <td >{editMode === v._id ? <input type="text" name="comment" value={editedData.comment} 
                onChange={handleInputChange} /> :v.comment}</td>
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

export default CashOut

import React, { useEffect, useState } from 'react'
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";
import './Student.css'
import { GrView } from "react-icons/gr";
import axios from 'axios';
import { MdDelete, MdEdit, MdOutlineFileDownloadDone} from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ViewCustomer = () => {
  const [data, setData] = useState()
  const [itemsPerPage] = useState(3); 
  const [editMode, setEditMode] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState([])
  const [ref, setRef] = useState(true)
  const [clientName, setClientName] = useState('')
  const [address, setAddress] = useState('')
  const [date, setDate] = useState('')
  const [state, setState] = useState('')
  const [contact, setContact] = useState('')
  const [editedData, setEditedData] = useState({});
  const [gstin, setGstin] = useState('')
  const [invoiceNo, setInvoiceNo] = useState('')
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false); 


  useEffect(() => {
    axios.get("http://localhost:6001/api/crtcustomer").then((res) => {
      console.log(res.data);
      setData(res.data);

    });
  }, [ref])
  
  
  const handleSaveEdit = (v)=>{
    
    axios.put(`${"http://localhost:6001/api/editcus"}/${v._id}`, editedData, {
      clientName,
      address,
      date,
      state,
      contact,
      gstin,
      invoiceNo
    })
   .then((res)=>{
    setClientName('')
    setAddress('')
    setState('')
    setDate('')
    setContact('')
    setGstin('')
    setInvoiceNo('')
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
     <div className='stdlistboby'>
      <span className='iospro' ><IoIosPeople /> Add Customer</span>
      <span className='registerstdlist'>Manage Customer</span> 
      <p>Customer <IoIosArrowForward /> Customer List</p>
     </div>
     </div>
<div>
<div><input type="text" placeholder='Search' id='search' value={search} onChange={handleSearchInputChange}
   /></div>
   <div className='tableboby'>
   <table className='listtab'>
          <tr className='headth'>
            <th>ClientName</th>
            <th>Address</th>
            <th>Date</th>
            <th>State</th>
            <th>Contact</th>
            <th>GSTIN</th>
            <th>InvoiceNo</th>
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
                  <tr  key={v._id} className='trinput'>
                <td >{editMode === v._id ? <input type="text" name="clientName" value={editedData.clientName} 
              onChange={handleInputChange} /> : v.clientName}</td>
                <td>{editMode === v._id ? <input type="text" name="address" value={editedData.address} 
              onChange={handleInputChange} /> : v.address}</td>
                <td>{editMode === v._id ? <input type="text" name="date" value={editedData.date} 
              onChange={handleInputChange} /> : v.date}</td>
                <td >{editMode === v._id ? <input type="text" name="state" value={editedData.state} 
              onChange={handleInputChange} /> : v.state}</td>
                <td >{editMode === v._id ? <input type="text" name="contact" value={editedData.contact} 
              onChange={handleInputChange} /> : v.contact}</td>
                <td >{editMode === v._id ? <input type="text" name="gstin" value={editedData.gstin} 
              onChange={handleInputChange} /> : v.gstin}</td>
                <td >{editMode === v._id ? <input type="text" name="invoiceNo" value={editedData.invoiceNo} 
              onChange={handleInputChange} /> : v.invoiceNo}</td>
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

export default ViewCustomer
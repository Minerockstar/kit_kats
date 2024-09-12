import React, {  useEffect, useState } from 'react'
import './Customer.css'
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";

const AddCustomer = () => {
  const [tableData, setTableData] = useState([]);
  const [ref, setRef] = useState(true)
  const [clientName, setClientName] = useState('')
  const [address, setAddress] = useState('')
  const [date, setDate] = useState('')
  const [state, setState] = useState('')
  const [contact, setContact] = useState('')
  const [gstin, setGstin] = useState('')
  const [invoiceNo, setInvoiceNo] = useState('')

  useEffect(()=>{
    axios.get('http://localhost:6001/api/crtcustomer').then((res)=>{
     console.log(res.data);
     setTableData(res.data)
    })
  }, [ref])

 const handleCustomerCrt=(e)=>{
  e.preventDefault()
      axios.post('http://localhost:6001/api/postcus', {
        clientName,
        address,
        date,
        state,
        contact,
        gstin,
        invoiceNo
      })
      .then((res)=>console.log(res))
      // alert("Customer addedd successfully")
      .catch((err)=>{console.log(err)})
      setRef(!ref)
 }  
const handleDeleteRow=(index)=>{
  axios.delete(`${"http://localhost:5001/api/delcustomer"}/${index._id}`).then((res)=>console.log(res))
  setRef(!ref)
  console.log(index);
}
const generateUniqueGSTIN = () => {
  // Generate a random number between 10000000 and 99999999
  const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
  const uniqueGSTIN = `GSTIN${randomNumber}`; // Prefix with your organization's identifier
  setGstin(uniqueGSTIN);
};

useEffect(() => {
  generateUniqueGSTIN(); // Generate a unique GSTIN when the component mounts
}, []);

  return (
    <div className='customer'>
     <div className='cusboby'>
      <span className='iospro'><IoIosPeople /> GST Invoice</span>
      <span className='registercus'>Register Customer</span> 
      <p>Customer <IoIosArrowForward /> Add Customer</p>
     </div>
<form>
<div className='firmcus'>
      
      <p><span className='viewemp'>Client Name<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={clientName} onChange={(e)=>{
        setClientName(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Address:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={address} onChange={(e)=>{
        setAddress(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Date:<span className='required-star'>*</span>
       </span> <br/><input type="date" required className='fstname'
       value={date} onChange={(e)=>{
        setDate(e.target.value)}}
       /></p>
      <p><span className='inputhandle'>State:<span className='required-star'>*</span> </span> <br/><select
     className='fstname'  
     type="text"
     required
          value={state}
          onChange={(e)=>{
            setState(e.target.value)}}
     >
     <option value="">Select a State</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Kerala">Kerala</option>
          <option value="Karnataka">Karnataka</option>
          </select>
     </p>
       <p><span className='inputhandle'>Contact:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={contact} onChange={(e)=>{
        setContact(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>GSTIN:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={gstin} onChange={(e)=>{
        setGstin(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Invoice No:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={invoiceNo} onChange={(e)=>{
        setInvoiceNo(e.target.value)}}
       /></p>
       
       <button onClick={handleCustomerCrt}>Submit</button>
      </div>
     </form>
    </div>
  )
}

export default AddCustomer
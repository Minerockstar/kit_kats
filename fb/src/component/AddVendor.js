import React, { useEffect, useState } from 'react'
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";
import './Student.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddVendor = () => {
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [balance, setBalance] = useState('')
  const [paidamt, setPaidamt] = useState('')
  const [reAMt, setReAMt] = useState('')
  const [comment, setComment] = useState('')
  const [ref, setRef] = useState(true)
  const [tableData, setTableData] = useState([]);


  const calculateRemainingAmount = (totalAmount, amountPaid) => {
    const remaining = totalAmount - amountPaid;
    setReAMt(remaining);
  };
  
  
  const handlePaidAmountChange = (e) => {
    const amountPaid = parseFloat(e.target.value);
    setPaidamt(amountPaid);
    calculateRemainingAmount(balance, amountPaid);
  };
  const handleTotalAmountChange = (e) => {
    const totalAmount = parseFloat(e.target.value);
    setBalance(totalAmount);
    calculateRemainingAmount(totalAmount, paidamt);
  };
  useEffect(()=>{
    axios.get('http://localhost:6001/api/crtvendor').then((res)=>{
     console.log(res.data);
    //  (res.data)
    })
  }, [ref])
  const handleSubmit=(e)=>{
    e.preventDefault()
        axios.post('http://localhost:6001/api/postven', {
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
        .then((res)=>console.log(res))
        // alert("Vendor addedd successfully")
        .catch((err) => {
          console.log(err);
        });
   }  
  return (
    <div className='vendor'>
     <div className='empvendor'>
      <span className='iospro' ><IoIosPeople /> Vendors</span>
      <span className='registerven'>Register Vendors</span> 
      <p>Vendors <IoIosArrowForward /> Add Vendor</p>
     </div>
<form>
<div className='firmven'>
      
      <p><span className='viewemp'>Vendor Name:
       </span> <br/><input type="text" required className='fstname'
       value={name} onChange={(e)=>{
        setName(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Vendor Type:
       </span> <br/><input type="text" required className='fstname'
       value={type} onChange={(e)=>{
        setType(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Mobile Number:
       </span> <br/><input type="text" required className='fstname'
       value={contact} onChange={(e)=>{
        setContact(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Email Id:
       </span> <br/><input type="email" required className='fstname'
       value={email} onChange={(e)=>{
        setEmail(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Address:
       </span> <br/><input type="text" required className='fstname'
       value={address} onChange={(e)=>{
        setAddress(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Current Balance:
       </span> <br/><input type="text" required className='fstname'
       value={balance} onChange={handleTotalAmountChange}
       /></p>
       <p><span className='inputhandle'>Paid Amount:
       </span> <br/><input type="text" required className='fstname'
       value={paidamt} onChange={handlePaidAmountChange}
       /></p>
       <p><span className='inputhandle'>Remaining Amount:
       </span> <br/><input type="text" required className='fstname'
       value={reAMt} onChange={(e)=>{
        setReAMt(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Comment:
       </span> <br/><input type="text"  className='fstname'
       value={comment} onChange={(e)=>{
        setComment(e.target.value)}}
       /></p>
      
       <button onClick={handleSubmit}>Submit</button>
      </div>
     </form>
    </div>
  )
}

export default AddVendor
import React, {  useEffect, useState } from 'react'
import './Customer.css'
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";

const Employeeid = () => {
  const [invoiceNumber, setInvoiceNumber] = useState('');

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10000);
  };
  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth()).toString().padStart(2, '0')
    // const day = currentDate.getDate().toString().padStart(2); 
    const randomNumber = generateRandomNumber(); 
    const newInvoiceNumber = `KIT${year}${month}-${randomNumber}`;
    setInvoiceNumber(newInvoiceNumber);
  }, []);
  return (
    <div id='invoice'>
     <div className='adminboby'>
      <span className='iospro'><IoIosPeople /> Add Employee</span>
      <span className='registeradmin'>Set Employee ID</span> 
      <p>Master <IoIosArrowForward /> Invoice No</p>
     </div>
<form>
<div className='firminvoice'>
      
       <p><span className='inputhandle'>Invoice No:
       </span> <br/><input type="text" required className='fstname'
      value={invoiceNumber}
       /></p><br/>
       
       <button >Set ID</button>
      </div>
     </form>
    </div>
  )
}

export default Employeeid
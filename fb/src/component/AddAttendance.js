import React, { useEffect, useState } from 'react'
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";
import './Atten.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddAttendance = () => {
  const [emp, setEmp] = useState('')
  const [data, setData] = useState([])
  const [status, setStatus] = useState('')
  const [permission, setPermission] = useState('')
  const [leave, setLeave] = useState('')
  const [inTime, setInTime] = useState('')
  const [ref, setRef] = useState(true)
  const [inDate, setInDate] = useState('')
  const [outDate, setOutDate] = useState('')
  const [outTime, setOutTime] = useState('')
  const [isChecked, setIsChecked] = useState(false);
  const [empFirstname, setEmpFirstname] = useState('')
  const [isCheckedSec, setIsCheckedSec] = useState(false);
  

  useEffect(() => {
    axios.get("http://localhost:6001/api/getempimg")
      .then((res) => {
        console.log('Fetched employees:', res.data); // Log data to check if it is correct
        setData(res.data);
      })
      .catch((err) => console.error('Error fetching employees:', err));
  }, [ref]);

  useEffect(() => {
    axios.get("http://localhost:6001/api/getattend").then((res) => {
      console.log(res.data);
      setData(res.data);

    });
  }, [])
  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post("http://localhost:6001/api/postattend", {
      emp,
      status,
      permission,
      leave,
      inTime,
      inDate,
      outDate,
      outTime
    })
    .then((res)=>console.log(res))
    .catch((err)=>{console.log(err);})
  }
  
  const handleLeavests = () => {
    setLeave('Yes');
  };
  const handleLeavestatus = () => {
    setLeave('No');
  };
  // const navigate = useNavigate()
  // const stdview=()=>{
  //   navigate("/viewstd")
    
  // }
  
  return (
    <div className='atten'>
     <div className='attenboby'>
      <span className='iospro' ><IoIosPeople /> Attendance List</span>
      <span className='registeratten'>Register Employee Attendance</span> 
      <p>Attendance <IoIosArrowForward /> Add Attendance</p>
     </div>
<form>
<div className='firmatten'>
      
      <p><span className='viewstd'>Select Employee:<span className='required-star'>*</span>
       </span> <br/><select className='fstname'
        value={emp}
        onChange={(e) => {
          setEmp(e.target.value)
        }}
        
      >
        <option className='detailcus' value="">Select a Student</option>
        { data.map((v) => (
          <option key={v._id} value={v.empFirstname}>
                        {v.empFirstname}
          </option>
        ))}
      </select></p>
       <p><span className='inputhandle'>Status Work:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={status} onChange={(e)=>{
        setStatus(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Permission:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={permission} onChange={(e)=>{
        setPermission(e.target.value)}}
       /></p>
        <p className='mari'>Leave:<span className='required-star'>*</span>
         <span > <br/><span className='checktec'><input  checked={leave === 'Yes'}
            onChange={handleLeavests} type='checkbox' />Yes</span></span>
           <span className='checksss'> <input checked={leave === 'No'}
            onChange={handleLeavestatus}  type='checkbox'  
            />No</span>
           </p>
       <p><span className='inputhandle'>In Date:<span className='required-star'>*</span>
       </span> <br/><input type="date" required className='fstname'
       value={inDate} onChange={(e)=>{
        setInDate(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Out Date:<span className='required-star'>*</span>
       </span> <br/><input type="date" required className='fstname'
       value={outDate} onChange={(e)=>{
        setOutDate(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>In Time:<span className='required-star'>*</span>
       </span> <br/><input type="time" required className='fstname'
       value={inTime} onChange={(e)=>{
        setInTime(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Out Time:<span className='required-star'>*</span>
       </span> <br/><input type="time" required className='fstname'
       value={outTime} onChange={(e)=>{
        setOutTime(e.target.value)}}
       /></p>
       
       <button onClick={handleSubmit}>Submit</button>
      </div>
     </form>
    </div>
  )
}

export default AddAttendance

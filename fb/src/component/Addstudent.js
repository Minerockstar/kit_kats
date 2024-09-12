import React, { useState } from 'react'
import { IoIosPeople } from "react-icons/io";
import './Student.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addstudent = () => {
  const [gender, setgender] = useState('')
  const [stdId, setStdId] = useState('')
  const [data, setData] = useState([])
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [fatherName, setfathername] = useState('')
  const [motherName, setmothername] = useState('')
  const [address, setaddress] = useState('')
  const [dob, setdob] = useState('')
  const [contact, setcontact] = useState('')
  const [altNumber, setAltNumber] = useState('')
  const fixedAmount = 30000;
  const [totalAmt, setTotalAmt] = useState(fixedAmount)
  const [doj, setdoj] = useState('')
  const [stdstatus, setstdstatus] = useState('')
  const [remarks, setremarks] = useState('')
  const [qualification, setqualification] = useState('')
  const [img, setImg] = useState(null)
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedSec, setIsCheckedSec] = useState(false);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Create a new FormData object
    const formData = new FormData();
    formData.append("images", img);
    formData.append("stdId", stdId);
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("fatherName", fatherName);
    formData.append("motherName", motherName); 
    formData.append("address", address);
    formData.append("dob", dob);
    formData.append("contact", contact);
    formData.append("altNumber", altNumber);
    formData.append("gender", gender);
    formData.append("qualification", qualification);
    formData.append("totalAmt", totalAmt);
    formData.append("doj", doj);
    formData.append("stdstatus", stdstatus);
    formData.append("remarks", remarks);
    
  
    // Make the POST request with axios
    axios.post("http://localhost:6001/api/createimg", formData)
      .then((res) => {
        console.log(res);
        alert("Student addedd successfully")
        
       stdId('')
       setTotalAmt(fixedAmount)
       setgender('')
       setfathername('')
       setlastname('')
       setmothername('')
       setaddress('')
       setdob('')
       setcontact('')
       setdoj('')
       setstdstatus('')
       setremarks('')
       setqualification('')
       setAltNumber('')
       setImg(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleGenderFemale = () => {
    setgender('female');
  };
  
  const handleGenderNo = () => {
    setgender('male');
  };
  const handleGenderother = () => {
    setgender('other');
  };
  const navigate = useNavigate()
  const stdview=()=>{
    navigate("/viewstd")
    
  }
  return (
    <div className='student'>
     <div className='stfboby'>
      <span className='iospro' onClick={stdview}><IoIosPeople /> Student List</span>
      <span className='registerstd'>Register Student</span> 
      <p>Stundent Info > Add Student</p>
     </div>
<form>
<div className='firmstd'>
      
      <p><span className='viewstd'>Student Id:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={stdId} onChange={(e)=>{
         setStdId(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>First Name:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={firstname} onChange={(e)=>{
         setfirstname(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Last Name:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={lastname} onChange={(e)=>{
         setlastname(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Father Name:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={fatherName} onChange={(e)=>{
         setfathername(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Mother Name:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={motherName} onChange={(e)=>{
         setmothername(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Date of Birth:<span className='required-star'>*</span>
       </span> <br/><input type="date" required className='fstname'
       value={dob} onChange={(e)=>{
         setdob(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Address:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={address} onChange={(e)=>{
         setaddress(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Contact Number:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={contact} onChange={(e)=>{
         setcontact(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Alternate Number:
       </span> <br/><input type="text"  className='fstname'
       value={altNumber} onChange={(e)=>{
        setAltNumber(e.target.value)}}
       /></p>
       <p className='mari'>Gender:<span className='required-star'>*</span>
         <span > <br/><span className='checktec'><input checked={gender === 'female'}
         onChange={handleGenderFemale}  type='checkbox' />Female</span></span>
           <span className='checksss'> <input
           checked ={gender === 'male'}  type="checkbox"  
           onChange={handleGenderNo} type='checkbox'/>Male</span>
           <span className='checksss'> <input type='checkbox'
           checked={gender === 'other'} onChange={handleGenderother}
           />Other</span>
           </p>
       <p><span className='inputhandle'>Date of Joining:<span className='required-star'>*</span>
       </span> <br/><input type="date" required className='fstname'
       value={doj} onChange={(e)=>{
         setdoj(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Qualification:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={qualification} onChange={(e)=>{
         setqualification(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Total Amount:
       </span> <br/><input type="text"  className='fstname'
       value={totalAmt} onChange={(e)=>{
         totalAmt(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Student status:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={stdstatus} onChange={(e)=>{
         setstdstatus(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Remarks:
       </span> <br/><input type="text" className='fstname'
       value={remarks} onChange={(e)=>{
         setremarks(e.target.value)}}
       /></p>
       <button onClick={handleSubmit}>Submit</button>
      </div>
     </form>
    </div>
  )
}

export default Addstudent

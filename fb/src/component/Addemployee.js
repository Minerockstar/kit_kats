import React, { useState } from 'react'
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";
import './Student.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addemployee = () => {
  const [empGender, setEmpGender] = useState('')
  const [empId, setEmpId] = useState('')
  const [data, setData] = useState([])
  const [empFirstname, setEmpFirstname] = useState('')
  const [empLastname, setEmpLastname] = useState('')
  const [empFatherName, setEmpFatherName] = useState('')
  const [empMotherName, setEmpMotherName] = useState('')
  const [emp_address, setEmp_address] = useState('')
  const [emp_dob, setEmp_dob] = useState('')
  const [emp_joindate, setEmp_joindate] = useState('')
  const [emp_reldate, setEmp_reldate] = useState('')
  const [emp_email, setEmp_email] = useState('')
  const [emp_contact, setEmp_contact] = useState('')
  const [emp_Altcontact, setEmp_Altcontact] = useState('')
  const [emp_maritalsts, setEmp_maritalsts] = useState('')
  const [emp_remark, setEmp_remark] = useState('')
  const [emp_desg, setEmp_desg] = useState('')
  const [emp_exp, setEmp_exp] = useState('')
  const [emp_salary, setEmp_salary] = useState('')
  const [emp_qualification, setEmp_qualification] = useState('')
  const [img, setImg] = useState(null)
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedSec, setIsCheckedSec] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Create a new FormData object
    const formData = new FormData();
    formData.append("images", img);
    formData.append("empId", empId);
    formData.append("empFirstname", empFirstname);
    formData.append("empLastname", empLastname);
    formData.append("empFatherName", empFatherName);
    formData.append("empMotherName", empMotherName); 
    formData.append("emp_dob", emp_dob);
    formData.append("emp_email", emp_email);
    formData.append("emp_address", emp_address);
    formData.append("emp_contact", emp_contact);
    formData.append("emp_Altcontact", emp_Altcontact);
    formData.append("empGender", empGender);
    formData.append("emp_maritalsts", emp_maritalsts);
    formData.append("emp_desg", emp_desg);
    formData.append("emp_exp", emp_exp);
    formData.append("emp_salary", emp_salary);
    formData.append("emp_joindate", emp_joindate);
    formData.append("emp_reldate", emp_reldate);
    formData.append("emp_remark", emp_remark);
    formData.append("emp_qualification", emp_qualification);
    
  
    // Make the POST request with axios
    axios.post("http://localhost:6001/api/createempimg", formData)
      .then((res) => {
        console.log(res);
        alert("Employee addedd successfully")
        
        setEmpGender('')
        setEmpId('')
        setEmpFirstname('')
        setEmpLastname('')
        setEmpFatherName('')
        setEmpMotherName('')
        setEmp_address('')
        setEmp_dob('')
        setEmp_joindate('')
        setEmp_reldate('')
        setEmp_email('')
        setEmp_contact('')
        setEmp_Altcontact('')
        setEmp_maritalsts('')
        setEmp_remark('')
        setEmp_desg('')
        setEmp_exp('')
        setEmp_salary('')
        setEmp_qualification('')
       setImg(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleGenderFemale = () => {
    setEmpGender('female');
  };
  
  const handleGenderNo = () => {
    setEmpGender('male');
  };
  const handleGenderother = () => {
    setEmpGender('other');
  };
  const handleMrgsts = () => {
    setEmp_maritalsts('Yes');
  };
  const handleMrgstatus = () => {
    setEmp_maritalsts('No');
  };
  const navigate = useNavigate()
  const empview=()=>{
    navigate("/empview")}

  return (
    <div className='emp'>
     <div className='empboby'>
      <span className='iospro' onClick={empview}><IoIosPeople /> Employee List</span>
      <span className='registerstd'>Register Employee</span> 
      <p>Employee Info <IoIosArrowForward /> Add Employee</p>
     </div>
<form>
<div className='firmemp'>
      
      <p><span className='viewemp'>Employee Id:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={empId} onChange={(e)=>{
        setEmpId(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>First Name:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={empFirstname} onChange={(e)=>{
        setEmpFirstname(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Last Name:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={empLastname} onChange={(e)=>{
        setEmpLastname(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Father Name:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={empFatherName} onChange={(e)=>{
        setEmpFatherName(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Mother Name:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={empMotherName} onChange={(e)=>{
        setEmpMotherName(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Date of Birth:<span className='required-star'>*</span>
       </span> <br/><input type="date" required className='fstname'
       value={emp_dob} onChange={(e)=>{
        setEmp_dob(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Address:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={emp_address} onChange={(e)=>{
        setEmp_address(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Contact Number:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={emp_contact} onChange={(e)=>{
        setEmp_contact(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Alternate Number:
       </span> <br/><input type="text"  className='fstname'
       value={emp_Altcontact} onChange={(e)=>{
        setEmp_Altcontact(e.target.value)}}
       /></p>
       <p className='mari'>Gender:<span className='required-star'>*</span>
         <span > <br/><span className='checktec'><input checked={empGender === 'female'}
         onChange={handleGenderFemale}  type='checkbox' />Female</span></span>
           <span className='checksss'> <input
           checked ={empGender === 'male'}  type="checkbox"  
           onChange={handleGenderNo} />Male</span>
           <span className='checksss'> <input type='checkbox'
           checked={empGender === 'other'} onChange={handleGenderother}
           />Other</span>
           </p>
           <p className='mari'>Marital Status:<span className='required-star'>*</span>
         <span > <br/><span className='checktec'><input  value='yes'checked={emp_maritalsts === 'Yes'}
            onChange={handleMrgsts} type='checkbox' />Yes</span></span>
           <span className='checksss'> <input checked={emp_maritalsts === 'No'}
            onChange={handleMrgstatus}  type='checkbox'  
            />No</span>
           </p>
           <p><span className='inputhandle'>Email:<span className='required-star'>*</span>
       </span> <br/><input type="email" required className='fstname'
       value={emp_email} onChange={(e)=>{
        setEmp_email(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Date of Joining:<span className='required-star'>*</span>
       </span> <br/><input type="date" required className='fstname'
       value={emp_joindate} onChange={(e)=>{
        setEmp_joindate(e.target.value)}}
       /></p>
        <p><span className='inputhandle'>Date of Relieving:<span className='required-star'>*</span>
       </span> <br/><input type="date" required className='fstname'
       value={emp_reldate} onChange={(e)=>{
        setEmp_reldate(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Qualification:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={emp_qualification} onChange={(e)=>{
        setEmp_qualification(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Experience:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={emp_exp} onChange={(e)=>{
       setEmp_exp(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Salary:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={emp_salary} onChange={(e)=>{
        setEmp_salary(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Designation:<span className='required-star'>*</span>
       </span> <br/><input type="text" required className='fstname'
       value={emp_desg} onChange={(e)=>{
        setEmp_desg(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Remarks:
       </span> <br/><input type="text"  className='fstname'
       value={emp_remark} onChange={(e)=>{
        setEmp_remark(e.target.value)}}
       /></p>
       <button onClick={handleSubmit}>Submit</button>
      </div>
     </form>
    </div>
  )
}

export default Addemployee

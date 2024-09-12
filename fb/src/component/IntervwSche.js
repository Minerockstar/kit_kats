import React, { useState } from 'react'
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";
import './Student.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const IntervwSche = () => {
  const [intervDate, setIntervDate] = useState('')
  const [intervrName, setIntervrName] = useState('')
  const [data, setData] = useState([])
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [qualification, setQualification] = useState('')
  const [yop, setyop] = useState('')
  const [loca, setloca] = useState('')
  const [fod, setfod] = useState('')
  const [scheDate, setscheDate] = useState('')
  const [role, setrole] = useState('')
  const [source, setSource] = useState('')
  const [img, setImg] = useState([])
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedSec, setIsCheckedSec] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Create a new FormData object
    const formData = new FormData();
    formData.append("images", img);
    formData.append("intervDate", intervDate);
    formData.append("intervrName", intervrName);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("qualification", qualification);
    formData.append("yop", yop); 
    formData.append("loca", loca);
    formData.append("fod", fod);
    formData.append("scheDate", scheDate);
    formData.append("role", role);
    formData.append("source", source);
    
  
    // Make the POST request with axios
    axios.post("http://localhost:6001/api/createimginter", formData)
      .then((res) => {
        console.log(res);
        alert("Interview Scheduled Successfully")
        
      //   setEmpGender('')
      //   setEmpId('')
      //   setEmpFirstname('')
      //   setEmpLastname('')
      //   setEmpFatherName('')
      //   setEmpMotherName('')
      //   setEmp_address('')
      //   setEmp_dob('')
      //   setEmp_joindate('')
      //   setEmp_reldate('')
      //   setEmp_email('')
      //   setEmp_contact('')
      //   setEmp_Altcontact('')
      //   setEmp_maritalsts('')
      //   setEmp_remark('')
      //   setEmp_desg('')
      //   setEmp_exp('')
      //   setEmp_salary('')
      //   setEmp_qualification('')
      //  setImg(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const oninputchange=(e)=>{
    setImg(e.target.files[0])
    console.log(e.target.files[0]);
  }
  const navigate = useNavigate()
  const empview=()=>{
    navigate("/empview")}
  return (
    <div className='interv'>
    <div className='intervboby'>
     <span className='iospro' ><IoIosPeople /> Interview List</span>
     <span className='registerinterv'>Schedule Interview</span> 
     <p>Interview Info <IoIosArrowForward /> Student</p>
    </div>
<form>
<div className='firminterv'>
     
     <p><span className='viewemp'>Interview Date:
      </span> <br/><input type="date" required className='fstname'
      value={intervDate} onChange={(e)=>{
        setIntervDate(e.target.value)}}
      /></p>
      <p><span className='inputhandle'>Interviwee Name:
      </span> <br/><input type="text" required className='fstname'
      value={intervrName} onChange={(e)=>{
        setIntervrName(e.target.value)}}
      /></p>
      <p><span className='inputhandle'>Email:
      </span> <br/><input type="email" required className='fstname'
      value={email} onChange={(e)=>{
        setEmail(e.target.value)}}
      /></p>
      <p><span className='inputhandle'>Phone Number:
      </span> <br/><input type="text" required className='fstname'
      value={contact} onChange={(e)=>{
        setContact(e.target.value)}}
      /></p>
      <p><span className='inputhandle'>Qualification:
      </span> <br/><input type="text" required className='fstname'
      value={qualification} onChange={(e)=>{
        setQualification(e.target.value)}}
      /></p>
      <p><span className='inputhandle'>Year of Passing:
      </span> <br/><input type="date" required className='fstname'
      value={yop} onChange={(e)=>{
        setyop(e.target.value)}}
      /></p>
       <p><span className='inputhandle'>Location:
      </span> <br/><input type="date" required className='fstname'
      value={loca} onChange={(e)=>{
        setloca(e.target.value)}}
      /></p>
      <p><span className='inputhandle'>Folow Up Date:</span> <br/><select
     className='fstname'  
     type="text"
     required
     value={fod}
          onChange={(e)=>{
            setfod(e.target.value)}}
     >
     <option value="">Select Follow Up Date</option>
          <option value="28/3/2024">28/3/2024</option>
          <option value="1/4/2024">1/4/2024</option>
          <option value="15/4/2024">15/4/2024</option>
          </select>
     </p>
      <p><span className='inputhandle'>Scheduled Date:
      </span> <br/><input type="date" required className='fstname'
      value={scheDate} onChange={(e)=>{
        setscheDate(e.target.value)}}
      /></p>
      <p><span className='inputhandle'>Job Role:
      </span> <br/><input type="text" required className='fstname'
      value={role} onChange={(e)=>{
        setrole(e.target.value)}}
      /></p>
      <p><span className='inputhandle'>Source:
      </span> <br/><input type="text"  className='fstname'
      value={source} onChange={(e)=>{
        setSource(e.target.value)}}
      /></p>
      
      <p><span className='inputhandle'>Upload Image:
      </span> <br/><input  name="images" accept="image/*" type='file' required className='fstname'
      // value={img}
      onChange={oninputchange}
      /></p>
      
      <button onClick={handleSubmit}>Submit</button>
     </div>
    </form>
   </div>
  )
}

export default IntervwSche
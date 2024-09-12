import React, { useState } from 'react'
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";
import './Student.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddLead = () => {
  const [date, setdate] = useState('')
  const [name, setname] = useState('')
  const [data, setData] = useState([])
  const [ref, setRef] = useState(true)
  const [quali, setquali] = useState('')
  const [yop, setyop] = useState('')
  const [contact, setcontact] = useState('')
  const [loca, setloca] = useState('')
  const [update, setupdate] = useState('')
  const [desent, setdesent] = useState('')
  const [agginedto, setagginedto] = useState('')
  const [course, setcourse] = useState('')
  const [source, setsource] = useState('')
  const [img, setImg] = useState(null)
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedSec, setIsCheckedSec] = useState(false);


  const handleSubmit=(e)=>{
    e.preventDefault()
        axios.post('http://localhost:6001/api/postlead', {
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
        .then((res)=>console.log(res))
        // alert("Customer addedd successfully")
        .catch((err)=>{console.log(err)})
        setRef(!ref)
   }  
  return (
    <div className='lead'>
    <div className='leadboby'>
     <span className='iospro' ><IoIosPeople /> Leads</span>
     <span className='registerlead'>Register Leads</span> 
     <p>Leads <IoIosArrowForward /> Add Lead</p>
    </div>
<form>
<div className='firmlead'>
     
     <p><span className='viewemp'>Date:
      </span> <br/><input type="date" required className='fstname'
      value={date} onChange={(e)=>{
        setdate(e.target.value)}}
      /></p>
      <p><span className='inputhandle'>Name:
      </span> <br/><input type="text" required className='fstname'
      value={name} onChange={(e)=>{
        setname(e.target.value)}}
      /></p>
      <p><span className='inputhandle'>Qualification:
      </span> <br/><input type="text" required className='fstname'
      value={quali} onChange={(e)=>{
        setquali(e.target.value)}}
      /></p>
      <p><span className='inputhandle'>Year of Passing:
      </span> <br/><input type="date" required className='fstname'
      value={yop} onChange={(e)=>{
        setyop(e.target.value)}}
      /></p>
      <p><span className='inputhandle'>Phone Number:
      </span> <br/><input type="text" required className='fstname'
      value={contact} onChange={(e)=>{
        setcontact(e.target.value)}}
      /></p>
      <p><span className='inputhandle'>Location:
      </span> <br/><input type="text" required className='fstname'
      value={loca} onChange={(e)=>{
        setloca(e.target.value)}}
      /></p>
        <p><span className='inputhandle'>Follow Update:</span> <br/><select
     className='fstname'  
     type="text"
     required
          value={update}
          onChange={(e)=>{
            setupdate(e.target.value)}}
     >
     <option value="">Select Recent Follow Update</option>
          <option value="Update">Update</option>
          
          </select>
     </p>
     <p><span className='inputhandle'>Details Sent:</span> <br/><select
     className='fstname'  
     type="text"
     required
          value={desent}
          onChange={(e)=>{
            setdesent(e.target.value)}}
     >
     <option value="">Select Details Sent Option</option>
          <option value="Detail">Detail</option>
          
          </select>
     </p>
     <p><span className='inputhandle'>Assigned To:</span> <br/><select
     className='fstname'  
     type="text"
     required
          value={agginedto}
          onChange={(e)=>{
            setagginedto(e.target.value)}}
     >
     <option value="">Choose a Staff Member</option>
          <option value="Staff">Staff</option>
          
          </select>
     </p>
     
     <p><span className='inputhandle'>Course Sent:</span> <br/><select
     className='fstname'  
     type="text"
     required
          value={course}
          onChange={(e)=>{
            setcourse(e.target.value)}}
     >
     <option value="">Select The Course
     </option>
          <option value="Course">Course</option>
          
          </select>
     </p>
     <p><span className='inputhandle'>Source:</span> <br/><select
     className='fstname'  
     type="text"
     required
          value={source}
          onChange={(e)=>{
            setsource(e.target.value)}}
     >
     <option value="">Select The Source</option>
          <option value="Source">Source</option>
          
          </select>
     </p>
      <button onClick={handleSubmit}>Submit</button>
     </div>
    </form>
   </div>
  )
}

export default AddLead
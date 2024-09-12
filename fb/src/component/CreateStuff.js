import React, {  useEffect, useState } from 'react'
import './Customer.css'
import axios from 'axios';
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";

const CreateStuff = () => {
  const [data, setData] = useState([])
  const [tableData, setTableData] = useState([]);
  const [ref, setRef] = useState(true)
  const [name, setname] = useState('')
  const [doj, setdoj] = useState('')
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [comment, setcomment] = useState('')

  useEffect(()=>{
    axios.get('http://localhost:6001/api/crtstaff').then((res)=>{
     console.log(res.data);
     setData(res.data)
    })
  }, [ref])

 const handleCustomerCrt=(e)=>{
  e.preventDefault()
      axios.post('http://localhost:6001/api/poststaff', {
        name,
        doj,
        username,
        password,
        comment
      })
      .then((res)=>console.log(res))
      // alert("Customer addedd successfully")
      .catch((err)=>{console.log(err)})
      setRef(!ref)
 }  


  return (
    <div className='admin'>
     <div className='adminboby'>
      <span className='iospro'><IoIosPeople /> Add Employee</span>
      <span className='registeradmin'>Register Admin</span> 
      <p>Master <IoIosArrowForward /> Create Staff</p>
     </div>
<form>
<div className='firmadmin'>
      
         <p><span className='inputhandle'>Staff Name: </span> <br/><select
     className='fstname'  
     type="text"
     required
          value={name}
          onChange={(e)=>{
            setname(e.target.value)}}
     >
     <option value="">Select</option>
          <option value="Siva">Siva</option>
          </select>
     </p>
       <p><span className='inputhandle'>Date of Joining:
       </span> <br/><input type="date" required className='fstname'
       value={doj} onChange={(e)=>{
        setdoj(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>User Name:
       </span> <br/><input type="text" required className='fstname'
       value={username} onChange={(e)=>{
        setusername(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Password:
       </span> <br/><input type="text" required className='fstname'
       value={password} onChange={(e)=>{
        setpassword(e.target.value)}}
       /></p>
       <p><span className='inputhandle'>Comment:
       </span> <br/><input type="text" required className='fstname'
       value={comment} onChange={(e)=>{
        setcomment(e.target.value)}}
       /></p>
       
       <button onClick={handleCustomerCrt}>Submit</button>
      </div>

     </form>
     
    </div>
  )
}

export default CreateStuff

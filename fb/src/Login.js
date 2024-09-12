import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login .css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState([])
    const navigate = useNavigate()

    


    useEffect(()=>{
        axios.get("http://localhost:6001/api/getlogin")
        .then((res)=>{console.log(res.data)
          setData(res.data)
        })
        .catch(err=>(console.log(err)))
        // setData(res.data)
    }, [])

    const handlelogin =(e)=>{
      e.preventDefault()
      
      axios.post("http://localhost:6001/api/userdetails", {
       email,
       password
      })
      .then((res)=>{
          const responseData = res.data;
          console.log('API Response:', responseData);
          if(responseData.token){
              console.log('Login successfully')
              localStorage.setItem('token', responseData.token);
              alert('Login successfully!');
              navigate("/dashborad");
          }else{
              alert('Incorrect credentials')
              console.log('Incorrect login credentials');
          }
          console.log(res)
      }
  )
      .catch((err)=>{console.log(err)})
    }
  return (
    
    <div className='container '>
     
    <div className='row justify-content-center '>
        <div className=' col-md-4 col-sm-8 '> 
    <div className='login'>
    <div id='contacolor'></div>
      <div >
        <h1 className=' px-5 py-5 mx-5 signin'>Sign In</h1>
<form onSubmit={handlelogin}>
            <div className='inputlogin'>
                <p className='py-2'><input type="email " value={email} required placeholder='Email'
                onChange={(e)=>{setEmail(e.target.value)}}
                /></p>
                <p className='py-2'><input type="text" value={password} required placeholder='Password'
                onChange={(e)=>{setPassword(e.target.value)}}
                /></p>
                <p className='px-5 mx-5 py-3 forgot'>Forgot Your Password?</p>
            </div>
         <button className=' col-4 mx-5 p-1 loginbtn '>Login</button>
         <div className='lastdiv'></div>
        </form>
        </div> 
    </div>
    </div>
    </div>
    </div>
  )
}

export default Login
import './Customer.css'
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from 'react';

const Cashin = () => {
  const [tableData, setTableData] = useState([]);
  const [ref, setRef] = useState(true)
  const [name, setName] = useState('')
  const [balance, setbalance] = useState('')
  const [paidamt, setpaidamt] = useState('')
  const [clientName, setClientName] = useState('')
  const [data, setData] = useState([]);
  const [reAMt, setreAMt] = useState('')
  const [type, settype] = useState('')
  const [comment, setcomment] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedCustomer, setSelectedCustomer] = useState([]);
  const [remainingAmount, setremainingamount] = useState('')
  const [selected, setSelected] = useState('customer');

  const handleChange = (event) => {
    // Prevent changing selection if the selected value is 'customer'
    if (selected !== 'customer') {
      setSelected(event.target.value);
    }
  };

  useEffect(()=>{
    axios.get('http://localhost:6001/api/crtcustomer').then((res)=>{
     console.log(res.data);
     setData(res.data);
    })
  }, [ref])

 const handleCustomerCrt=(e)=>{
  e.preventDefault()
      axios.post('http://localhost:6001/api/postrecp', {
        name,
        balance,
        paidamt,
        reAMt,
        type,
        comment
      })
      .then((res)=>console.log(res))
      // alert("Customer addedd successfully")
      .catch((err)=>{console.log(err)})
      setRef(!ref)
 }  
 const calculateRemainingAmount = (totalAmount, amountPaid) => {
  const remaining = totalAmount - amountPaid;
  setreAMt(remaining);
};


const handlePaidAmountChange = (e) => {
  const amountPaid = parseFloat(e.target.value);
  setpaidamt(amountPaid);
  calculateRemainingAmount(balance, amountPaid);
};
const handleTotalAmountChange = (e) => {
  const totalAmount = parseFloat(e.target.value);
  setbalance(totalAmount);
  calculateRemainingAmount(totalAmount, paidamt);
};


const handleDeleteRow=(index)=>{
  axios.delete(`${"http://localhost:5001/api/delcustomer"}/${index._id}`).then((res)=>console.log(res))
  setRef(!ref)
  console.log(index);
}
const handlepays = () => {
  settype('Online');
};
const handlepayb = () => {
  settype('Bank');
};
const handlepayc= () => {
  settype('Cash');
};
const handleCustomerSelect = (clientName) => {
  const customer = data.find(item => item.clientName === clientName);
  setSelectedCustomer(customer);
};
  return (
    <div className='customer'>
    <div className='cusboby'>
     <span className='iospro'><IoIosPeople /> Cash In</span>
     <span className='registercus'>Create Customer Cash In</span> 
     <p><input type='radio' value='student'
          checked={selected === 'student'}
          onChange={handleChange}/> Student <input type='radio' value='customer'
          checked={selected === 'customer'}
          onChange={handleChange}/> Customer</p>
    </div>
<form>
<div className='firmcus'>
     
<p><span className='viewstd'>Customer Name:
       </span> <br/><select className='fstname'
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
        
      >
        <option className='detailcus' value="">Select</option>
        { data.map((v) => (
          <option key={v._id} value={v.clientName}>
                        {v.clientName}
          </option>
        ))}
      </select></p>
     
      <p><span className='inputhandle'>Current Balance:
      </span> <br/><input type="text" required className='fstname' onChange={handleTotalAmountChange}
      value={balance} 
      /></p>
        <p><span className='inputhandle'>Paid Amount:
      </span> <br/><input type="text" required className='fstname' onChange={handlePaidAmountChange}
      value={paidamt} 
      /></p>
        <p><span className='inputhandle'>Remaining Amount:
      </span> <br/><input type="text" placeholder='0.00' required className='fstname'
      value={reAMt} onChange={(e)=>{
       setreAMt(e.target.value)}}
      /></p>
      <p className='mari'>Payment Type:
         <span > <br/><span className='checktec'><input  checked={type === 'Online'}
            onChange={handlepays} type='radio' /> Online</span></span>
           <span className='checksss'> <input checked={type === 'Cash'}
            onChange={handlepayc}  type='radio'  
            /> Cash</span>
             <span className='checksss'> <input checked={type === 'Bank'}
            onChange={handlepayb}  type='radio'  
            /> Bank</span>
           </p>
        <p><span className='inputhandle'>Comments:
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

export default Cashin

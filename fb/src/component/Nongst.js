import React, { useEffect, useRef, useState } from 'react';
import './Atten.css'
import { BiLogoJquery } from "react-icons/bi";
import {useReactToPrint} from 'react-to-print'
import { AiFillPlusSquare } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import axios from 'axios';

const Nongst = () => {
  const printRef = useRef()
  const [value1, setValue1] = useState('');
  const [ref, setRef] = useState(true)
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');
  const [total, setTotal] = useState(0);
  const gstPercentage = 10;
  const [gstAmount, setGstAmount] = useState(0);
  const [items, setItems] = useState([]);
  const [data, seData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedCustomer, setSelectedCustomer] = useState([]);
  const [invoiceNumber, setInvoiceNumber] = useState('');

  useEffect(()=>{
    axios.get('http://localhost:6001/api/crtcustomer').then((res)=>{
     console.log(res.data);
     seData(res.data)
    })
  }, [ref])
  
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

  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(today);


  const handlePrint = useReactToPrint({
    content: ()=> printRef.current
  })
  const handleAddItem = () => {
    setItems([...items,  { quantity: '', price: '', total: 0 }]);
  };
  const handleInputChange = (index, field, value) => {
    
    const newItems = [...items ];
    newItems[index][field] = value;
    newItems[index].total = parseFloat(newItems[index].quantity) * parseFloat(newItems[index].price);
    setItems(newItems);
    updateTotal(newItems);
  }

  const updateTotal = (items) => {
    let sum = 0;
    items.forEach(item => {
      sum += item.total || 0;
    });
    setTotal(sum);
  }
  const deleteRow = (id)=>{
        setItems(items.filter(item=> item.id !== id))
  }
  const handleChangeValue1 = (event) => {
    const newValue = event.target.value;
    setValue1(newValue);
    calculateResult(newValue,value2);
  };

  const handleChangeValue2 = (event) => {
    const newValue = event.target.value;
    setValue2(newValue);
    calculateResult(value1, newValue);
  };
 

  const calculateResult = (val1, val2) => {
    const product = parseFloat(val1) * parseFloat(val2);
    const gst = product * (gstPercentage / 100);
    setResult(isNaN(product) ? '' : product);
    // Set the GST amount to 10% of the total amount
    setGstAmount(product * (gstPercentage / 100));
  };
  


  const handleCustomerSelect = (clientName) => {
    const customer = data.find(item => item.clientName === clientName);
    setSelectedCustomer(customer);
  };

  const numberToWords = (num) => {
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const scales = ['', 'Thousand', 'Million', 'Billion'];

    const numToWords = (num) => {
        let words = '';
        let scaleIndex = 0; // Track the current scale index
        while (num > 0) {
            if (num % 1000 !== 0) {
                words = convertHundreds(num % 1000) + ' ' + scales[scaleIndex] + ' ' + words;
            }
            num = Math.floor(num / 1000);
            scaleIndex++;
        }
        return words.trim();
    };

    const convertHundreds = (num) => {
        let words = '';
        if (num >= 100) {
            words += ones[Math.floor(num / 100)] + ' Hundred ';
            num %= 100;
        }
        if (num >= 10 && num <= 19) {
            words += teens[num - 10] + ' ';
            return words;
        } else if (num >= 20) {
            words += tens[Math.floor(num / 10)] + ' ';
            num %= 10;
        }
        if (num > 0) {
            words += ones[num] + ' ';
        }
        return words;
    };

    if (num === 0) return 'Zero';
    return numToWords(num);
};
  return (
    <div  className='gst'>
    <div ref={printRef} className='gstcolor'>
     <div className='bill'>
       <div className='invoice'>
       <h1>Invoice</h1>
     <h3>KITKAT SOFTWARE TECHNOLOGIES</h3>
     <p>No: 29, 2nd floor, Siva Complex, AVR Circle, Salem-586990, Phone No: 7946767963, 97474249011.</p>
     </div>
     <div className='invo'>
     <h4>INVOICE TO:</h4>
     <select
       value={selectedOption}
       onChange={(e) => {
         setSelectedOption(e.target.value);
         handleCustomerSelect(e.target.value); // Fetch customer details when an option is selected
       }}
       
     >
       <option className='detailcus' value="">Select an option</option>
       {data.map((v) => (
         <option key={v._id} value={v.clientName}>
                       {v.clientName}
         </option>
       ))}
     </select>
   
  {selectedCustomer && (
              <h4 className='gsttin'>GSTIN: <span>{selectedCustomer.gstin}</span></h4>
            )}
</div>
       </div>
       <div className='logomain'>
       <div  className='logoimgs'>
       <img src='https://kitkatsoftwaretechnologies.com/images/kitkat.jpg'/>
       </div>
  <div className='invoicegst'>
   <div className='div1'>
   <label>
    <span>Date:</span> 
    <p><strong>Invoice No:</strong></p>
   </label>
   </div> 
   <div className='div2'>
   <input type='text' value={selectedDate} // Set the value of the input field
         onChange={(e) => setSelectedDate(e.target.value)}/>
   <p>{invoiceNumber}</p>
   </div>
   {/* {selectedCustomer && ( 
 <div id='customer-details'>
   <p><strong>GSTIN:</strong>{selectedCustomer.gstin}</p>
 </div>
 
)} */}
  </div>
  </div>
  <div className='buzzz'>
  <table className='businessreq'>
         <tr>
           <th>S.no</th>
           <th>Description</th>
           <th>QTY</th>
           <th>Unit Price</th>
           <th>Total Amount</th>
           <th>Action</th>
                  </tr>
                  <tr>
           <td>1.</td>
           <td><input  /></td>
           <td><input value={value1} onChange={handleChangeValue1} type='number' className='insecond'/></td>
           <td><input value={value2} onChange={handleChangeValue2} /></td>
           <td>{result}.00</td>
           {/* value={value1} onChange={handleChangeValue1} */}
           {/* value={result.quantity} onChange={(e) => handleInputChange(e.target.value)} */}
           <td ><AiFillPlusSquare onClick={handleAddItem}  className='plusicon' /></td>
                  </tr>
                    
                  <tbody>
                  {items.map((item, index) => (
           <tr key={index + 2}>
             <td>2.</td>
             <td colSpan='2'>
               <input
                 type='text'
               />
                <input
                 type="number"
                 value={item.quantity}
                 onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
               />
             </td>
             <td><input 
             type="number"
             value={item.price}
             onChange={(e) => handleInputChange(index, 'price', e.target.value)}
            /></td>
             <td className='zero'>{total.toFixed(2)}</td>
             <td>
                <MdDelete className='delicons' onClick={()=>deleteRow(index.id)} />
             </td>
           </tr>
         ))}
         </tbody>
         
                  <div className='total'>
                   
                  <tr>
                  <td className='totlo'>TOTAL</td>
                  <td className='zero'>{result}.00</td>
                  </tr>
                 
                  <tr>
                  <td className='totlo'>Finalt Total</td>
                  <td className='zero'>{result}.00</td>
                  </tr>
                  </div>
                  
       </table>
       <div className='words'>
       <p>TOTAL (In Words) : {numberToWords(parseFloat(result) + parseFloat(gstAmount)).toUpperCase()}</p>
 <div className='bank'>
   <h3>Bank Account Details</h3>
   <h4>Name: <span>kitkat Software Technologies</span></h4>
   <h4>Bank: <span>HDFC</span></h4>
   <h4>Account No: <span>50032897482</span></h4>
   <h4>IFSC Code: <span>HDFC0003</span></h4>
   <h4>Brach: <span>Salem</span></h4>
 </div>
 
 

 <button className='printbtn' onClick={handlePrint}>Print</button>
       </div>
       <h3 className='thanks'>THANK YOU FOR YOUR BUSINESS!</h3>
 </div>

     </div>
     
 
   </div>
  )
}

export default Nongst
import React, { useEffect, useState } from 'react'
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";
import './Student.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MdPermContactCalendar,MdGroups2,MdIncompleteCircle,MdFullscreen } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { GrFormPrevious,GrFormNext } from "react-icons/gr";

const ManageReports = () => {
  const [data, setData] = useState([])
  const [studentData, setStudentData] = useState([]);
  const [cashInData, setCashInData] = useState([]);
  const [ref, setRef] = useState(true)
  const [totalAmt, settotalAmt] = useState('')
  const [totalAmountByStudents, setTotalAmountByStudents] = useState(0);
  const [totalAmountByCashIn, setTotalAmountByCashIn] = useState(0);

  const generateYears = (startYear) => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = startYear; year <= currentYear; year++) {
      years.push(year);
    }
    return years;
  };

  const years = generateYears(2000); // Start from the year 2000 or any other starting year
  const currentYear = new Date().getFullYear(); // Get the current year

  // State to manage the selected year
  const [selectedYear, setSelectedYear] = useState(currentYear);
  useEffect(() => {
    axios.get("http://localhost:6001/api/getstd")
      .then((res) => {
        console.log('Fetched employees:', res.data); // Log data to check if it is correct
        setStudentData(res.data);
      })
      .catch((err) => console.error('Error fetching employees:', err));
      axios.get("http://localhost:6001/api/crtrecp")
      .then((res) => {
        console.log('Fetched CashIn data:', res.data);
        setCashInData(res.data);
      })
      .catch((err) => console.error('Error fetching CashIn data:', err));
  }, [ref]);

  useEffect(() => {
    const totalStudents = studentData.reduce((total, item) => total + (parseFloat(item.totalAmt) || 0), 0);
    setTotalAmountByStudents(totalStudents);
  }, [studentData]);

  useEffect(() => {
    const totalCashIn = cashInData.reduce((total, item) => total + (parseFloat(item.balance) || 0), 0);
    setTotalAmountByCashIn(totalCashIn);
  }, [cashInData]);
  
  // Handle change in year selection
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  return (
    <div className='report'>
     <div className='receiboby'>
      <span className='iospro'><IoIosPeople /> Create</span>
      <span className='registerreci'>Manage Reports</span>
      <span className='years'>Year:
      <select value={selectedYear} onChange={handleYearChange} className=''>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
      </span>
      
      {/* <span className='year'>Year<input type='year'/></span> */}
     </div>
     <div className='boxdashs'>
<div>
  <p className='empdashs'>Total Amount by Students</p>
  <span><BiSolidBarChartSquare /></span>
  <p className='dashnums'>Rs.{totalAmountByStudents}</p>
</div>
<div>
<p className='empdashs'>Total Amount By Customer</p>
  <span><BiSolidBarChartSquare /></span>
  <p className='dashnums'>Rs.0</p>
</div>
<div>
<p className='empdashs'>Total Amount By CashIn</p>
<span><BiSolidBarChartSquare /></span>
<p className='dashnums'>Rs.{totalAmountByCashIn}</p>
</div>
<div>
<p className='empdashs'>Total Amount By CashOut</p>
<span><BiSolidBarChartSquare /></span>
<p className='dashnums'>Rs.0</p>
</div>

</div>
    </div>
  )
}
export default ManageReports
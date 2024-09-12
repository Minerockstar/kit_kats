import React, { useEffect, useState } from 'react'
import { Route, Switch, useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"
import { BiLogoJquery } from "react-icons/bi";
import { CgProfile, CgMenuGridR } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoMdCalendar } from "react-icons/io";
import { FaRegMessage,FaList } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { RiProfileLine , RiLogoutCircleLine,RiContactsBook3Line} from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { PiInvoice } from "react-icons/pi";
import { TbFileInvoice } from "react-icons/tb";
import { FaAngleDown, FaCircle,FaThList } from "react-icons/fa";
import './dashboard.css'
import { HiOutlineCash } from "react-icons/hi";
// import Master from './component/Master'/
import DashboardContent from './DashboardContent';
import InvoceNo from './InvoceNo';
import Studentid from './Studentid';
import Employeeid from './Employeeid';
import CreateStuff from './CreateStuff';
import CourseFees from './CourseFees';
import Admins from './Admins';
import { MdOutlineAddBox,MdFullscreen } from "react-icons/md";
import axios from 'axios';
import Addstudent from './Addstudent';
import Addemployee from './Addemployee';
import StdList from './StdList';
import EmpList from './EmpList';
import AddAttendance from './AddAttendance';
import ViewAttendance from './ViewAttendance';
import AddCustomer from './AddCustomer';
import ViewCustomer from './ViewCustomer';
import AddVendor from './AddVendor';
import ViewVendors from './ViewVendors';
import ManageReports from './ManageReports';
import AddLead from './AddLead';
import ManageLead from './ManageLead';
import RescheRead from './RescheRead';
import CashOut from './CashOut';
import Cashin from './Cashin';
import IntervwSche from './IntervwSche';
import ManageInterview from './ManageInterview';
import Gst from './Gst';
import Nongst from './Nongst';
import { FaSearch } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CgStack } from "react-icons/cg";
import './Student.css'
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";
import { MdDelete, MdEdit, MdOutlineFileDownloadDone} from "react-icons/md";

const Empview = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [currentContent, setCurrentContent] = useState('viewemp');
    const [openSection, setOpenSection] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true); 
    const [viewEmp, setEmpview] = useState(false);
    
    const Navigate = useNavigate()
    useEffect(() => {
      // Check if token is available (e.g., in local storage)
      const token = localStorage.getItem('token');
      if (!token) {
        // Redirect to login page if token is not available
        Navigate('/');
      }
    }, []);
    
    const toggleSidebar = () => {
      setShowSidebar(!showSidebar);
    };
  
    const handleViewEmp = () => {
      setCurrentContent('viewemp');
      setEmpview(true); // Show details when "View Employee" is clicked
    };
    const handleDashboardClick = () => {
      setCurrentContent('dashboards');
    };
    const handleInvoiceClick = () => {
      setCurrentContent('invoiceno');
    };
    const handleStudentidClick = () => {
      setCurrentContent('stdid');
    };
    const handleEmpidClick = () => {
      setCurrentContent('empid');
    };
    const handleCreatestfClick = () => {
      setCurrentContent('createstf');
    };
    const handleCourseFeeClick = () => {
      setCurrentContent('coursefee');
    };
    const handleAdminsClick = () => {
      setCurrentContent('admin');
    };
    const handleAddStudentClick = () => {
      setCurrentContent('addstudents');
    };
    const handleAddEmpClick = () => {
      setCurrentContent('addemp');
    };
    const handleStdListClick = () => {
      setCurrentContent('stdlist');
    };
    const handleEmpListClick = () => {
      setCurrentContent('emplist');
    };
    const handleAttenListClick = () => {
      setCurrentContent('attendance');
    };
    const handleAttenViewClick = () => {
      setCurrentContent('attendanceview');
    };
    const handleCustomerAddClick = () => {
      setCurrentContent('addcustomer');
    };
    const handleCustomerlistAddClick = () => {
      setCurrentContent('viewcustomer');
    };
    const handleVendorAddClick = () => {
      setCurrentContent('addvendor');
    };
    const handleViewVendorClick = () => {
      setCurrentContent('viewvendor');
    };
    
    const handleManageReportsClick = () => {
      setCurrentContent('managereports');
    };
    const handleAddleadClick = () => {
      setCurrentContent('addlead');
    };
    const handleManageleadClick = () => {
      setCurrentContent('managelead');
    };
    const handleRescheleadClick = () => {
      setCurrentContent('reschlead');
    };
    const handleCashinClick = () => {
      setCurrentContent('cashin');
    };
    const handleCashoutClick = () => {
      setCurrentContent('cashout');
    };
    const handleScheIntervwClick = () => {
      setCurrentContent('intervwsche');
    };
    const handleManIntervwClick = () => {
      setCurrentContent('manageintervw');
    };
    const handlegstClick = () => {
      setCurrentContent('gst');
    };
    const handleNongstClick = () => {
      setCurrentContent('nongst');
    };
  return (
    <div className={`wrapper ${showSidebar ? 'sidebar-collapse' : ''}`}>
        
      <Sidebar  handleDashboardClick={handleDashboardClick}
      toggleSidebar={toggleSidebar}handleCreatestfClick={handleCreatestfClick}
        showSidebar={showSidebar} handleInvoiceClick={handleInvoiceClick}
        openSection={openSection} handleEmpidClick={handleEmpidClick}
        setOpenSection={setOpenSection} handleStudentidClick={handleStudentidClick}
        handleCourseFeeClick={handleCourseFeeClick} handleAdminsClick={handleAdminsClick}
        handleAddStudentClick={handleAddStudentClick}
        handleAddEmpClick={handleAddEmpClick}
        handleStdListClick={handleStdListClick}handleEmpListClick={handleEmpListClick}
        handleAttenListClick={handleAttenListClick}handleAttenViewClick={handleAttenViewClick}
        handleCustomerAddClick={handleCustomerAddClick} handleCustomerlistAddClick={handleCustomerlistAddClick}
        handleVendorAddClick={handleVendorAddClick} handleViewVendorClick={handleViewVendorClick}
        handleManageReportsClick={handleManageReportsClick}handleAddleadClick={handleAddleadClick}
        handleManageleadClick={handleManageleadClick}handleRescheleadClick={handleRescheleadClick}
        handleCashoutClick={handleCashoutClick}handleCashinClick={handleCashinClick}
        handleScheIntervwClick={handleScheIntervwClick}handleManIntervwClick={handleManIntervwClick}
        handlegstClick={handlegstClick}handleNongstClick={handleNongstClick}
        handleViewEmp={handleViewEmp}

      />
    
      
      <div className="content-wrapper">
        {
        currentContent === 'viewemp' ? < ViewEmp/> :
        currentContent === 'dashboards' ? <DashboardContent /> :
          currentContent === 'invoiceno' ? <InvoceNo /> :
          currentContent === 'stdid' ? <Studentid /> :
          currentContent === 'empid' ? <Employeeid /> :
          currentContent === 'createstf' ? <CreateStuff /> :
            currentContent === 'coursefee' ? <CourseFees /> :
            currentContent === 'admin' ? <Admins /> :
            currentContent === 'addstudents' ? <Addstudent /> :
            currentContent === 'addemp' ? <Addemployee /> :
            currentContent === 'stdlist' ? <StdList /> :
            currentContent === 'emplist' ? <EmpList /> :
            currentContent === 'attendance' ? <AddAttendance /> :
            currentContent === 'attendanceview' ? <ViewAttendance /> :
            currentContent === 'addcustomer' ? <AddCustomer/> :
            currentContent === 'viewcustomer' ? <ViewCustomer/> :
            currentContent === 'addvendor' ? <AddVendor/> :
            currentContent === 'viewvendor' ? <ViewVendors/> :
            currentContent === 'managereports' ? <ManageReports/> :
            currentContent === 'addlead' ? <AddLead/> :
            currentContent === 'managelead' ? <ManageLead/> :
            currentContent === 'reschlead' ? <RescheRead/> :
            currentContent === 'cashin' ? <Cashin/> :
            currentContent === 'cashout' ? <CashOut/> :
            currentContent === 'intervwsche' ? <IntervwSche/> :
            currentContent === 'manageintervw' ? <ManageInterview/> :
            currentContent === 'gst' ? <Gst/> :
            currentContent === 'nongst' ? <Nongst/> :
                  <DashboardContent />
        }
      </div>
    </div>
    );
  }
  
  function Sidebar({toggleSidebar,showSidebar,handleInvoiceClick,openSection,
    setOpenSection,handleEmpidClick,handleCreatestfClick,
     handleDashboardClick,handleStudentidClick,handleCourseFeeClick,handleAdminsClick,handleAddStudentClick,
     handleAddEmpClick,handleStdListClick,handleEmpListClick,handleAttenListClick,handleAttenViewClick,
     handleCustomerAddClick,handleCustomerlistAddClick,handleVendorAddClick,handleViewVendorClick,
     handleManageReportsClick,handleAddleadClick,handleManageleadClick,handleRescheleadClick,handleCashinClick,
     handleCashoutClick,handleScheIntervwClick,handleManIntervwClick,handlegstClick,handleNongstClick,
handleViewEmp
  }) 
    
    
  {
    const handleLogout = () => {
      localStorage.removeItem('token');
      Navigate("/")
      // Add any other logout logic (e.g., redirect to login page)
    };
    const setDarkmode=()=>{
      document.querySelector("body").setAttribute('data-theme', 'dark')
    }
    const setLightmode=()=>{
      document.querySelector("body").setAttribute('data-theme', 'light')
    }
    const toggleSection = (section) => {
      setOpenSection(openSection === section ? null : section);
    }
  const toggleTheme=(e)=>{
    if(e.target.checked) setDarkmode()
    else setLightmode()
  }
    const Navigate = useNavigate()
    const [isHovered, setIsHovered] = useState(false);
    const [email, setEmail] = useState('kohn.doe@example.com'); // Static email for testing
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState('');
  
    useEffect(() => {
      // Function to fetch email from backend
      const fetchEmail = async () => {
        try {
          // Replace with your actual API endpoint
          const response = await axios.get('http://localhost:6001/api/getlogin');
          const userEmail = response.data.email;
          setEmail(userEmail.charAt(0).toUpperCase());
        } catch (error) {
          console.error('Error fetching email:', error);
          // Optionally set a fallback or handle error state
        }
      };
  
      fetchEmail();
    }, []);
  
    const letter = email ? email.split('@')[0].charAt(0).toUpperCase() : '';
    const [isFullscreen, setIsFullscreen] = useState(false);
    const toggleFullscreen = () => {
      if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(err => {
              console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
          });
          setIsFullscreen(true);
      } else {
          if (document.exitFullscreen) {
              document.exitFullscreen().catch(err => {
                  console.error(`Error attempting to exit full-screen mode: ${err.message} (${err.name})`);
              }); 
          }
          setIsFullscreen(false);
      }
  };
    return (
      <div className='mainbar'>
          <div className={`main-sidebar ${showSidebar && 'active'}`}
          >   
            
            <div className={`menu ${showSidebar && "active"}`}>
              <div id='menudash'>
              <IoMenu id='logomenu' className="nav-link" onClick={toggleSidebar}/>
             
              </div>
              <div id='logodiv'  > 
            <img src='https://kitkatsoftwaretechnologies.com/images/kitkat.jpg'/>
            </div>
            <div className='adminlogowitstatus'>
            {email ? (
    <div className="circle-container">
      <div className="circle">
        {letter}
      </div>
      <div className="status-dot available"></div>
{username}
    </div>
  ) : (
    'Loading...'
  )}
  <div>

  </div>
  <div className='kavi'>  Kavi M</div>
</div>


          <div className="sidebar">
            <nav>
              <ul>
                {/* <li className="nav-item">
                  <a href="#" className="nav-link" onClick={handleDashboardClick}>
                  <CgMenuGridR id='icons' /> <span className='dashb'>Dashboard</span>
                  </a>
                </li> */}
                <li className="nav-item">
                <CgProfile className='icons'/> <span >Student Info <FaAngleDown id='std-arrows'
                    className={`togglebtn ${openSection === 'students' ? 'rotate' : ''}`}
                    onClick={() => toggleSection('student')}
                    /></span>
                    </li>
                    {openSection === 'student' && (
                    <>
                    <div className='sidebarcon'>
                    <div className='sidebar-content' onClick={handleAddStudentClick}>
                    <MdOutlineAddBox /> Add Student
            </div>
            </div>
            </>
                    )}
                    {openSection === 'student' && (
                    <>
                    <div className='sidebarcon'>
                    <div className='sidebar-content' onClick={handleAddEmpClick}>
                    <MdOutlineAddBox /> Add Employee
            </div>
            </div>
            </>
                    )}
                   
                   {openSection === 'student' && (
                    <>
                    <div className='sidebarcon'>
                    <div className='sidebar-content' onClick={handleStdListClick}>
                    <FaList /> Student List 
            </div>
            </div>
            </>
                    )}
                    {openSection === 'student' && (
                    <>
                    <div className='sidebarcon'>
                    <div className='sidebar-content' onClick={handleEmpListClick}>
                    <FaList /> Employee List
            </div>
            </div>
            </>
                    )}
                <li className="nav-item">
                <ImProfile className='icons' /> <span >Attendance <FaAngleDown id='std-arrow'
                    className={`togglebtn ${openSection === 'attendance' ? 'rotate' : ''}`}
                    onClick={() => toggleSection('attendance')}
                    /></span>
                    </li>
                    {openSection === 'attendance' && (
                    <>
                    <div className='sidebarcon'>
                    <div className='sidebar-content' onClick={handleAttenListClick}>
                    <MdOutlineAddBox />Add Attendance
            </div>
            </div>
        </>
                )}
                {openSection === 'attendance' && (
                    <>
                    <div className='sidebarcon'>
                    <div className='sidebar-content' onClick={handleAttenViewClick}>
                    <FaList /> View Attendance
            </div>
            </div>
        </>
                )}
            <li className="nav-item">
            <CgProfile className='icons'/> <span >Customer <FaAngleDown id='cus-arrow'
               className={`togglebtn ${openSection === 'customer' ? 'rotate' : ''}`}
               onClick={() => toggleSection('customer')}
              /></span>
              </li>
              {openSection === 'customer' && (
              <>
              <div className='sidebarcon'>
               <div className='sidebar-content' onClick={handleCustomerAddClick}>
               <MdOutlineAddBox />Add Customer
      </div>
      </div>
      </>
              )}
              {openSection === 'customer' && (
              <>
              <div className='sidebarcon'>
               <div className='sidebar-content' onClick={handleCustomerlistAddClick}>
               <FaList />Customer List
      </div>
      </div>
      </>
              )}
                
            <li className="nav-item">
            <CgProfile className='icons'/> <span >Vendors <FaAngleDown id='ven-arrow'
                 
                 className={`togglebtn ${openSection === 'vendor' ? 'rotate' : ''}`}
               onClick={() => toggleSection('vendor')}
              /></span>
              </li>
              {openSection === 'vendor' && (
              <>
              <div className='sidebarcon'>
               <div className='sidebar-content' onClick={handleVendorAddClick}>
               
               <MdOutlineAddBox />Add Vendor
      </div>
      </div>
      </>
              )}{openSection === 'vendor' && (
                <>
                <div className='sidebarcon'>
                 <div className='sidebar-content' onClick={handleViewVendorClick}>
                 
                 <FaList />Manage Vendors
        </div>
        </div>
        </>
                )}
                
            <li className="nav-item">
            <CgProfile className='icons'/> <span >Leads <FaAngleDown id='leads-arrow'
                
                className={`togglebtn ${openSection === 'leads' ? 'rotate' : ''}`}
               onClick={() => toggleSection('leads')}
              /></span>
              </li>
              {openSection === 'leads' && (
              <>
              <div className='sidebarcon'>
               <div className='sidebar-content' onClick={handleAddleadClick} >
               <MdOutlineAddBox />Add Lead
      </div>
      </div>
      </>
              )}
              {openSection === 'leads' && (
              <>
              <div className='sidebarcon'>
               <div className='sidebar-content' onClick={handleManageleadClick} >
               <FaList />Manage Lead
      </div>
      </div>
      </>
              )}
              {openSection === 'leads' && (
              <>
              <div className='sidebarcon'>
               <div className='sidebar-content' onClick={handleRescheleadClick}>
               <FaList />Rescheduled Lead
      </div>
      </div>
      </>
              )}
               
            <li className="nav-item">
            <FaRegMessage className='icons'/> <span >Receipt <FaAngleDown id='rece-arrow'
                
                className={`togglebtn ${openSection === 'receipt' ? 'rotate' : ''}`}
                onClick={() => toggleSection('receipt')}
               /></span>
               </li>
               {openSection === 'receipt' && (
               <>
               <div className='sidebarcon'>
                <div className='sidebar-content' onClick={handleCashinClick}>
                <FaList /> Cash-In
       </div>
       </div>
       </>
               )}
                {openSection === 'receipt' && (
               <>
               <div className='sidebarcon'>
                <div className='sidebar-content' onClick={handleCashoutClick}>
                <FaList />Cash-Out
       </div>
       </div>
       </>
               )}
                <li className="nav-item">
            <IoMdCalendar className='icons'/> <span >Interview <FaAngleDown id='inter-arrow'
                
                className={`togglebtn ${openSection === 'interview' ? 'rotate' : ''}`}
                onClick={() => toggleSection('interview')}
               /></span>
               </li>
               {openSection === 'interview' && (
               <>
               <div className='sidebarcon'>
                <div className='sidebar-content' onClick={handleScheIntervwClick}>
                <MdOutlineAddBox />Schedule
       </div>
       </div>
       </>
               )}
                {openSection === 'interview' && (
               <>
               <div className='sidebarcon'>
                <div className='sidebar-content' onClick={handleManIntervwClick}>
                <FaList />Manage Interview
       </div>
       </div>
       </>
               )}
                <li className="nav-item">
            <MdBarChart className='icons'/> <span >Reports <FaAngleDown id='rep-arrow'
               className={`togglebtn ${openSection === 'reports' ? 'rotate' : ''}`}
               onClick={() => toggleSection('reports')}
              /></span>
              </li>
              {openSection === 'reports' && (
              <>
              <div className='sidebarcon'>
               <div className='sidebar-content' onClick={handleManageReportsClick}>
               <FaList />Manage Reports
      </div>
      </div>
      </>
              )}
                <li className="nav-item">
            <HiOutlineCash className='icons'/> <span >Billing <FaAngleDown id='bill-arrow'
                className={`togglebtn ${openSection === 'billings' ? 'rotate' : ''}`}
                onClick={() => toggleSection('billings')}
               /></span>
               </li>
               {openSection === 'billings' && (
               <>
               <div className='sidebarcon'>
                <div className='sidebar-content' onClick={handlegstClick}>
       <CgStack/>GST
       </div>
       </div>
       </>
               )}
               {openSection === 'billings' && (
               <>
               <div className='sidebarcon'>
                <div className='sidebar-content' onClick={handleNongstClick}>
                <CgStack/>Non-GST
       </div>
       </div>
       </>
               )}
                <li className="nav-item">
            <RiProfileLine className='icons'/> <span >Master <FaAngleDown id='mas-arrow'
                 className={`togglebtn ${openSection === 'invoiceno' ? 'rotate' : ''}`}
                 onClick={() => toggleSection('invoiceno')}
                /></span>
                </li>
                {openSection === 'invoiceno' && (
                <>
                <div className='sidebarcon'>
                 <div className='sidebar-content' onClick={handleInvoiceClick}>
                 <PiInvoice />Invoice No
        </div>
        <div className='sidebar-content' onClick={handleStudentidClick}>
        <PiInvoice />Student Id
          </div>
          <div className='sidebar-content' onClick={handleEmpidClick}>
          <PiInvoice />Employee Id
          </div>
          <div className='sidebar-content' onClick={handleCreatestfClick}>
          <TbFileInvoice />Create Staff
          </div>
          <div className='sidebar-content' onClick={handleCourseFeeClick}>
          <TbFileInvoice />Course Fees
          </div>
          <div className='sidebar-content' onClick={handleAdminsClick}>
          <TbFileInvoice />Admins
          </div>
        </div>
        </>
                )}
                <li className="nav-item" onClick={handleLogout}><RiLogoutCircleLine className='icons'/><span className='logoutcon'>Logout</span></li>
          </ul>
        </nav>
      </div>
      </div>
      
      {/* <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            
            <label className='dark_mode_label' for='darkmode-toggle'>
               
            </label>
        </div> */}
           <div className='subdashcons'>
      
      <span><FaSearch id='searchfaa'/><input placeholder='Search'/></span>
      <CiMail id='cimails'/>
      <MdFullscreen id='MdFullscreen' onClick={toggleFullscreen}/>
      <div className='adminlogowitstuss'>
            
    <div className="circle-containerss">
      <div className="circles">
      {letter}
      </div>
      <div className="status-dots availables"></div>

    </div>
 
  <div>

  </div>
  
</div>
      </div>
    </div>
    </div>
    );
}
const ViewEmp=()=>{
  const [data, setData] = useState()
  const [itemsPerPage] = useState(3); 
  const [editMode, setEditMode] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState([])
  const [ref, setRef] = useState(true)
  const [editedData, setEditedData] = useState({});
  const [empId, setEmpId] = useState('')
  const [empFirstname, setEmpFirstname] = useState('')
  const [empLastname, setEmpLastname] = useState('')
  const [emp_dob, setEmp_dob] = useState('')
  const [emp_email, setEmp_email] = useState('')
  const [emp_contact, setEmp_contact] = useState('')
  const [emp_desg, setEmp_desg] = useState('')
  const [emp_exp, setEmp_exp] = useState('')
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false); 


  useEffect(() => {
    axios.get("http://localhost:6001/api/empget").then((res) => {
      console.log(res.data);
      setData(res.data);

    });
  }, [ref])
  const handleSaveEdit = (v)=>{
    
    axios.put(`${"http://localhost:6001/api/empedit"}/${v._id}`, editedData, {
      empId,
      empFirstname,
      empLastname,
      emp_dob,
      emp_email,
      emp_contact,
      emp_desg,
      emp_exp
    })
   .then((res)=>{
    setEmpId('')
    setEmpFirstname('')
    setEmpLastname('')
    setEmp_dob('')
    setEmp_email('')
    setEmp_contact('')
    setEmp_desg('')
    setEmp_exp('')
    setEditMode(null);
    console.log(res)})
   .catch((err)=>{console.log(err)})
   
  }
  
  const handleEditRow = (id) => {
    setEditMode(id);
    const selectedItem = data.find((item) => item._id === id);
    setEditedData(selectedItem);
    console.log(id);
  };
  const handleSearchInputChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data ? data.slice(startIndex, endIndex) : [];
  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;
  // const handlePaginationClick = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };
  const handlePaginationClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
    
  };
  const handleIdStd = (id) => {
    const selected = data.find(student => student._id === id);
    setSelectedStudent(selected);
    setModalIsOpen(true); // Open the modal when student is selected
  };
  // const handleDeleteRow = (v)=>{
   
  //   axios.delete(`${"http://localhost:6001/api/empdelete"}/${v._id}`).then((res)=>console.log(res))
    
  //   console.log(v);
  // }

  return(
    <div className='emplist'>
      <div className='emplistbodys'>
     <div className='stdlistboby'>
      <span className='iospro' ><IoIosPeople /> Add Employee</span>
      <span className='registeremplist'>Manage Employees Data</span> 
      <p >Employee Info <IoIosArrowForward /> Employees List</p>
     </div>
     </div>
<div>
<div><input type="text" placeholder='Search' id='search' value={search} onChange={handleSearchInputChange}
   /></div>
   <div className='tableboby'>
   <table className='listtab'>
          <tr className='headth'>
            <th>ID</th>
            <th>FirtName</th>
            <th>LastName</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Designation</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
          <tbody >
          {data && currentItems.map((v) => {
              if (
                search === '' ||
                Object.values(v).some(
                  (val) =>
                    typeof val === 'string' && val.toLowerCase().includes(search)
                )
              ) 
              {
                return (
                  <tr key={v._id} className='trinput'>
                <td onClick={() => handleIdStd(v._id)}>{v.empId}</td>
                <td>{editMode === v._id ? <input type="text" name="empFirstname" value={editedData.empFirstname} 
                onChange={handleInputChange} /> : v.empFirstname}</td>
                <td >{editMode === v._id ? <input type="text" name="empLastname" value={editedData.empLastname} 
                onChange={handleInputChange} /> :v.empLastname}</td>
                <td >{editMode === v._id ? <input type="text" name="emp_dob" value={editedData.emp_dob} 
                onChange={handleInputChange} /> :v.emp_dob}</td>
                <td >{editMode === v._id ? <input type="text" name="emp_email" value={editedData.emp_email} 
                onChange={handleInputChange} /> :v.emp_email}</td>
                <td >{editMode === v._id ? <input type="text" name="emp_contact" value={editedData.emp_contact} 
                onChange={handleInputChange} /> :v.emp_contact}</td>
                <td >{editMode === v._id ? <input type="text" name="emp_desg" value={editedData.emp_desg} 
                onChange={handleInputChange} /> :v.emp_desg}</td>
                <td >{editMode === v._id ? <input type="text" name="emp_exp" value={editedData.emp_exp} 
                onChange={handleInputChange} /> :v.emp_exp}</td>
                <td>
                <MdEdit className='delicon' id='cash'onClick={() => handleEditRow(v._id)}  />
                <MdOutlineFileDownloadDone className='saveicons' id='cash'onClick={()=>handleSaveEdit(v)} />
                {/* <MdDelete onClick={() => handleIdStd(v._id)} className='deldelicons' id='cash'  /> */}
               <div>
               {/* <span className='viewicon'>View </span><span><GrView className='viewstd'/></span> */}
               </div> 
                </td>
                
              </tr>
                );
              }
              return null;
            })}
          </tbody>
          </table>
          <div className='pagibtn'>
            <button
              onClick={() => handlePaginationClick(currentPage - 1)}
              disabled={currentPage === 1}
              className={currentPage === 1 ? 'disabled' : ''}
            >
              Prev
            </button>
            <button
              onClick={() => handlePaginationClick(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={currentPage === totalPages ? 'disabled' : ''}
            >
              Next
            </button>
          </div>
          </div>
</div>

    </div>
  )
}

export default Empview
// import React, { useEffect, useState } from 'react'
// import { Route, Switch, useNavigate } from 'react-router-dom';
// import {Link} from "react-router-dom"
// import { BiLogoJquery } from "react-icons/bi";
// import { CgProfile, CgMenuGridR } from "react-icons/cg";
// import { ImProfile } from "react-icons/im";
// import { BsGraphUpArrow } from "react-icons/bs";
// import { FaRegMessage } from "react-icons/fa6";
// import { FaLock } from "react-icons/fa";
// import { RiProfileLine , RiLogoutCircleLine} from "react-icons/ri";
// import { IoMenu } from "react-icons/io5";
// import { FaAngleDown, FaCircle } from "react-icons/fa";
// import './component/dashboard.css'
// import Master from './component/Master'
// import DashboardContent from './component/DashboardContent';

// const Dashboard = () => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [currentContent, setCurrentContent] = useState('dashboards');
//   const [openSection, setOpenSection] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(true); 
//   const Navigate = useNavigate()
//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };
//   const handleDashboardClick = () => {
//     setCurrentContent('dashboards');
//   };
  
//   return (
//     <div className={`wrapper ${showSidebar ? 'sidebar-collapse' : ''}`}>
//       <Sidebar handleDashboardClick={handleDashboardClick} showSidebar={showSidebar} toggleSidebar={toggleSidebar}
      
//       />
//       <div className="content-wrapper">
//         {currentContent === 'dashboards' ? <DashboardContent /> :
                
//                  <Master/>
//         }
//       </div>
//     </div>
    
//   )
// }
// function Sidebar({handleDashboardClick,showSidebar,toggleSidebar
// }) 
// {
//   return (
    
//     <div className={`main-sidebar ${showSidebar && 'active'}`}
//     >
//       <div className={`menu ${showSidebar && "active"}`}>
//         <IoMenu id='logomenu' className="nav-link" onClick={toggleSidebar}/>
//     <div className="sidebar">
//       <nav >
//         <ul>
//           <li className="nav-item">
//             <a href="#" className="nav-link" onClick={handleDashboardClick}>
//             <CgMenuGridR id='icons' /> <span className='dashb'>Dashboard</span>
              
//             </a>
//           </li>
//           <li className="nav-item">
//           <CgProfile className='icons'/> <span >Student Info</span>
//               </li>
             
//           <li className="nav-item">
//           <ImProfile className='icons' /> <span >Employee Info </span>
//               </li>
             
//           <li className="nav-item">
//           <BsGraphUpArrow className='icons'/> <span >Attendance</span>
//               </li>
             
//           <li className="nav-item">
//           <FaRegMessage className='icons'/> <span >Receipt </span>
//               </li>
              
//           <li className="nav-item">
//           <FaLock className='icons'/> <span >GST Billing </span>
//               </li>
              
//           <li className="nav-item">
//           <RiProfileLine className='icons'/> <span >Master </span>
//               </li>
              
//               <li className="nav-item" ><RiLogoutCircleLine className='icons'/><span className='logoutcon'>Logout</span></li>
//         </ul>
//       </nav>
//     </div>
//     </div>
    
//   </div>
  
//   );
// }
// export default Dashboard


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
import './component/dashboard.css'
import { HiOutlineCash } from "react-icons/hi";
// import Master from './component/Master'/
import DashboardContent from './component/DashboardContent';
import InvoceNo from './component/InvoceNo';
import Studentid from './component/Studentid';
import Employeeid from './component/Employeeid';
import CreateStuff from './component/CreateStuff';
import CourseFees from './component/CourseFees';
import Admins from './component/Admins';
import { MdOutlineAddBox,MdFullscreen } from "react-icons/md";
import axios from 'axios';
import Addstudent from './component/Addstudent';
import Addemployee from './component/Addemployee';
import StdList from './component/StdList';
import EmpList from './component/EmpList';
import AddAttendance from './component/AddAttendance';
import ViewAttendance from './component/ViewAttendance';
import AddCustomer from './component/AddCustomer';
import ViewCustomer from './component/ViewCustomer';
import AddVendor from './component/AddVendor';
import ViewVendors from './component/ViewVendors';
import ManageReports from './component/ManageReports';
import AddLead from './component/AddLead';
import ManageLead from './component/ManageLead';
import RescheRead from './component/RescheRead';
import CashOut from './component/CashOut';
import Cashin from './component/Cashin';
import IntervwSche from './component/IntervwSche';
import ManageInterview from './component/ManageInterview';
import Gst from './component/Gst';
import Nongst from './component/Nongst';
import { FaSearch } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CgStack } from "react-icons/cg";


const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [currentContent, setCurrentContent] = useState('dashboards');
    const [openSection, setOpenSection] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true); 
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
      />
    
      
      <div className="content-wrapper">
        {currentContent === 'dashboards' ? <DashboardContent /> :
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
     handleCashoutClick,handleScheIntervwClick,handleManIntervwClick,handlegstClick,handleNongstClick

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

  
export default Dashboard

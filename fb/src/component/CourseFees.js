import React, {  useEffect, useState } from 'react'
import './Customer.css'
import axios from 'axios';
import { MdDelete, MdEdit, MdOutlineFileDownloadDone} from "react-icons/md";
import { IoIosPeople,IoIosArrowForward } from "react-icons/io";
import Modal from 'react-modal';
Modal.setAppElement('#root');

const CourseFees = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false); 
  const [editMode, setEditMode] = useState([]);
  const [ref, setRef] = useState(true)
  const [editedData, setEditedData] = useState({});
  const [data, setData] = useState()
  const [course, setcourse] = useState('')
  const [dura, setdura] = useState('')
  const [fee, setfee] = useState('')

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closePopup = () => {
    setSelectedStudent(null);
    
    setModalIsOpen(false); // Close the modal
  };
  const handleSaveEdit = (v)=>{
    
    axios.put(`${"http://localhost:6001/api/editfee"}/${v._id}`, editedData, {
      course,
      fee,
      dura

    })
   .then((res)=>{
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
  return (
    <div id='fees'>
     <div className='feeboby'>
      <span className='iospro'><IoIosPeople /> Add Student</span>
      <span className='registerfee'>Plan Course Offering</span> 
      <p>Master <IoIosArrowForward /> Course Fees</p>
     </div>
<form>
<div className='firmfeesss'>
      
       <p><span className='inputhandle'>Course:
       </span> <br/><input type="text" required className='fstname'
       /></p>
       <p><span className='inputhandle'>Fees:
       </span> <br/><input type="text" required className='fstname'
       /></p>
       <p><span className='inputhandle'>Duration:
       </span> <br/><input type="text" required className='fstname'
       /></p>
       <button >Add Field</button>
      </div>
     </form>
     <div className='iconsfee'>
     <span><MdEdit className='iconfee' id='' onClick={openModal} /></span>
     <span>  <MdOutlineFileDownloadDone className='iconfee' id='' /></span>
     <span> <MdDelete  className='iconfee' id=''  /></span>
            
             {/* <span className='viewicon'>View </span><span><GrView className='viewstd'/></span> */}
             </div> 
        <div id='popmodal'>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closePopup}
        contentLabel="Student Details"
        overlayClassName="modal-overlay"
        style={{
          content: {
            width:"300px",
            left: '700px',
            top:"180px", // Center the modal horizontally
            transform: 'translateX(-50%)', // Adjust to center the modal properly
          },
        }}
        // className="popmodal"
      >
        <div className="popup-content">
          <span className="close" onClick={closePopup}>&times;</span>
              <div className='stdpop'>
              <h4>Edit The Course</h4>
              <p><span className='inputhandle'>Course:
       </span> <br/><input type="text" required className=''
       /></p>
        <p><span className='inputhandle'>Fees:
       </span> <br/><input type="text" required className=''
       /></p>
        <p><span className='inputhandle'>Duration:
       </span> <br/><input type="text" required className=''
       /></p>
       <button>Edit</button><span> <button id='cancel' onClick={closePopup}> Cancel</button></span>
              </div>
        </div>
      </Modal>
      </div>
    </div>
  )
}

export default CourseFees

import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import './dashboard.css'
import { CiMail } from "react-icons/ci";
import { MdPermContactCalendar,MdGroups2,MdIncompleteCircle,MdFullscreen } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { GrFormPrevious,GrFormNext } from "react-icons/gr";

const DashoboraContent = () => {
  
   
  const [currentMonth, setCurrentMonth] = useState(new Date());
    const [days, setDays] = useState([]);
    useEffect(() => {
      const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
      const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
      const daysArray = [];

      // Fill the array with days of the week for the first row
      for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
          daysArray.push(null);
      }

      // Fill the array with days of the month
      for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
          daysArray.push(i);
      }

      setDays(daysArray);
  }, [currentMonth]);

  const handlePrevMonth = () => {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  const handlePrevYear = () => {
    const newDate = new Date(currentMonth.getFullYear() - 1, currentMonth.getMonth(), 1);
    setCurrentMonth(newDate);
  };

  const handleNextYear = () => {
    const newDate = new Date(currentMonth.getFullYear() + 1, currentMonth.getMonth(), 1);
    setCurrentMonth(newDate);
  };
  const renderDays = () => {
      const weeks = [];
      let daysInWeek = [];

      days.forEach((day, index) => {
          if (index % 7 === 0 && index !== 0) {
              weeks.push(<tr key={index}>{daysInWeek}</tr>);
              daysInWeek = [];
          }
          daysInWeek.push(
              <td key={index} className={day === new Date().getDate() && currentMonth.getMonth() === new Date().getMonth() ? 'today' : ''}>
                  {day || ''}
              </td>
          );
      });

      if (daysInWeek.length > 0) {
          weeks.push(<tr key={days.length}>{daysInWeek}</tr>);
      }

      return weeks;
  };
  const [email, setEmail] = useState('kohn.doe@example.com');
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
    <div className='dasboard-content'
    >
      {/* <div className='subdashcon'>
      
      <span><FaSearch id='searchfa'/><input placeholder='Search'/></span>
      <CiMail id='cimail' />
      <MdFullscreen id='MdFullscreen' onClick={toggleFullscreen}/>
      <div className='adminlogowitstus'>
            
    <div className="circle-containers">
      <div className="circles">
      {letter}
      </div>
      <div className="status-dots availables"></div>

    </div>
 
  <div>

  </div>
  
</div>
      </div> */}
      
<div className='dashbody'>
<div className='boxdash'>
<div>
  <p className='empdash'>Employees</p>
  <span><MdPermContactCalendar /></span>
  <p className='dashnum'>3</p>
</div>
<div>
<p className='empdash'>Students</p>
  <span><MdGroups2 /></span>
  <p className='dashnum'>1</p>
</div>
<div>
<p className='empdash'>Clients</p>
<span><BiSolidBarChartSquare /></span>
</div>
<div>
<p className='empdash'>Invoices</p>
<span><FaUserGroup /></span>
</div>

</div>
<div className='numbstd'>
  <div>
    <h2>Number of Students per Course</h2><span> <select>
      <option>2024</option>
      </select></span>
    <div className='blue'></div><span className='stack'>Full Stack Web Development</span>
    <div className='yellow'></div><sapn className='mobapp'>Mobile App Development</sapn>
  </div>
  <div>
  <MdIncompleteCircle className='chartyellow'/>
  </div>
  <div className="calendar-container">
    <div className='events'>
    <h3>Claendar Events</h3>
    <p>Importants Goals and Events are marked</p>
    </div>
 
  <div className='cladd'>
            <div className="calendar-header">
            <GrFormPrevious className='GrFormPrevious' onClick={handlePrevYear} />
            <GrFormPrevious className='GrFormPrevious' onClick={handlePrevMonth}/>
                {/* <button >Prev</button> */}
                <h4>{currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}</h4>
                {/* <button >Next</button> */}
                <GrFormNext className='GrFormNext' onClick={handleNextMonth}/>
                <GrFormNext className='GrFormNext' onClick={handleNextYear} />
            </div>
            <table className="calendar">
                <thead>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>
                    {renderDays()}
                </tbody>
            </table>
            </div>
        </div>
</div>

</div>

    </div>
  )
}

export default DashoboraContent

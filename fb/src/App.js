import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Addstudent from './component/Addstudent';
import StdList from './component/StdList';
import Stdview from './component/Stdview';
import Empview from './component/Empview';

function App() {
  return (
    <BrowserRouter>
    <div>
       <div>
       <Routes>
       
       <Route path='/' element={<Login/>}/> 
         <Route path='/dashborad' element={<Dashboard/>}/>
         <Route path='/viewstd' element={<Stdview/>}/>
         <Route path='/empview' element={<Empview/>}/>
       
       </Routes>
       </div>
       </div>
       </BrowserRouter>
  );
}

export default App;

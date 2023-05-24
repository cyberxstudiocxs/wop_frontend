
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';
import EmpRegister from './components/EmpRegister';
import Home from './components/Home';
import Menu from './components/Menu';
import Login from './components/Login';
import Footer from './components/Footer';
import ManageProfile from './components/ManageProfile';
import ProtectedRoute from './utils/ProtectedRoute';
import SearchJobByTitle from './components/SearchJobByTitle';
import JoobSeeker from './components/JobSeeker';
import ContactUs from './components/ContactUs';
import AccountSetting from "./components/AccountSetting";
import EmpDashboard  from "./components/EmpDashboard";
import PostAJob from './components/PostAJob';

function App() {

  const [spin, setSpin] = useState(false);
  useEffect(() => {
    setSpin(true)
    if (localStorage.getItem("token")) {

     }
     else{
     }

     setSpin(false)
}, [] )
  return (

    <div >

     
          {spin==false?
          <>
          <Menu />
         
   
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/empdashhboard' element={<EmpDashboard />} />
            <Route  path='/accountsetting'  element={<AccountSetting />} />
            <Route path='/postjob'  element={<PostAJob />} />
            <Route  path="/contactus" element={ <ContactUs />} />
            <Route  path="/searchjob"  element={<SearchJobByTitle />} />

            <Route  path="/jobseeker" element={<JoobSeeker />} />
            <Route path='/login' element={<Login />} />

            <Route path='/signup' element={<EmpRegister />} />
            
            <Route  path='/manageprofile'  element={
              <ProtectedRoute>
            <ManageProfile /> 
            </ProtectedRoute>
            }
             />
           
          </Routes>

   
          <Footer  />
          </>:""}
          </div>
    
  );
}

export default App;

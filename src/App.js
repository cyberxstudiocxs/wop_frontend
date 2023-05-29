
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';

import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import TermOfUse from './Pages/TermsOfUse';
import PrivacyPolicay from './Pages/PrivacyPolicy';
import EmpDashBoard  from "./Pages/Employers/EmpDashBoard";
import EmpAccountSetting from './Pages/Employers/EmpAccountSetting';
import EmpManageProfile from './Pages/Employers/EmpManageProfile';
import EmpPostAJob from './Pages/Employers/EmpPostAJobs';
import EmpJobListing from './Pages/Employers/EmpJobListing';
import JobPostConfirmation from './Pages/Employers/JobPostConfirmation';
import HowItWorkJobSeeker from './Pages/HowItWorkJobSeeker';


import Menu from './components/Menu';
import Footer from './components/Footer';
import Login from './components/Login';
import ProtectedRoute from './utils/ProtectedRoute';
import JobSearching from './Pages/JobSeekers/JobSearching';
import LatestJObPost from './Pages/JobSeekers/LatestJobPost';
import SignUp from './Pages/SignUp';



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

     
          {spin===false?
          <>
          <Menu />
         
   
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/empdashhboard' element={<EmpDashBoard />} />
            <Route  path='/accountsetting'  element={<EmpAccountSetting />} />
            <Route path='/postjob'  element={<EmpPostAJob />} />
            <Route  path="/searchjob"  element={<JobSearching />} />
            <Route  path="/contactus" element={ <ContactUs />} />
            <Route  path="/jobseeker" element={<LatestJObPost />} />
           

          
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/joblisting'  element={ <EmpJobListing />} />
            <Route path='/jobseekerworks' element={<HowItWorkJobSeeker />} />
            <Route path='/succesfullypostsubmit'   element={<JobPostConfirmation />} />
            <Route path='/termsofuse'  element={<TermOfUse />} />

            <Route path='/privacypolicy'  element={ <PrivacyPolicay />} />
            
            <Route  path='/manageprofile'  element={
              <ProtectedRoute>
            <EmpManageProfile /> 
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

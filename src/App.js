
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
import jwt_decode from "jwt-decode";
import DetailJobPost from './Pages/JobSeekers/DetailJobPost';
import ChangePassword from './Pages/Employers/ChangePassword';
import JobseekerDashBoard from './Pages/JobSeekers/JobseekerDashBoard';
import JobseekerProfile from './Pages/JobSeekers/JobseekerProfile';
import JobseekerAccountSetting from './Pages/JobSeekers/JobseekerAccoutSetting';

import RateYourSkils from './components/RateYourSkills';
import JobSeekerCreateProfile from './Pages/JobSeekers/JobSeekerCreateProfile';



function App() {

  const [spin, setSpin] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    setSpin(true)
    if (localStorage.getItem("token")) {
      var decoded = jwt_decode(localStorage.getItem('token'));
      setUser(decoded.result)
     }
     else{
      setUser()
     }

     setSpin(false)
}, [] )
  return (

    <div >

     
          {spin===false?
          <>
          <Menu />
         
   
          <Routes>
            <Route path='/' element={
                             
                            
                            <Home />
              
            
            } />
            <Route path='/empdashhboard' element={<EmpDashBoard />} />
            <Route  path='/accountsetting'  element={<EmpAccountSetting />} />
            <Route path='/postjob'  element={
                <ProtectedRoute>
                    <EmpPostAJob/>
                </ProtectedRoute>    
            } />
            <Route  path="/searchjob"  element={<JobSearching />} />
            <Route  path="/contactus" element={ <ContactUs />} />
            <Route  path="/jobseeker" element={<LatestJObPost />} />
           

           <Route  path='/jobseekerdashbaord'  element={<JobseekerDashBoard />} />
           <Route path='/jobseekerprofile' element={<JobseekerProfile />} />
           <Route path='/jobseekeraccountsetting'  element={<JobseekerAccountSetting />} />
           <Route path='/jobseekercreateprofile'  element={<JobSeekerCreateProfile />} />
          

           <Route path='/rateskill'  element={<RateYourSkils />} />

          <Route  path='/detailjobpost' element={<DetailJobPost />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/joblisting'  element={ <EmpJobListing />} />
            <Route path='/jobseekerworks' element={<HowItWorkJobSeeker />} />
            <Route path='/succesfullypostsubmit'   element={<JobPostConfirmation />} />
            <Route path='/changepassword'  element={< ChangePassword />} />
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

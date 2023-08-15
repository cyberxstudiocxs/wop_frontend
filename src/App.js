import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import TermOfUse from "./Pages/TermsOfUse";
import PrivacyPolicay from "./Pages/PrivacyPolicy";
import EmpDashBoard from "./Pages/Employers/EmpDashBoard";
import EmpAccountSetting from "./Pages/Employers/EmpAccountSetting";
import EmpManageProfile from "./Pages/Employers/EmpManageProfile";
import EmpPostAJob from "./Pages/Employers/EmpPostAJobs";
import EmpJobListing from "./Pages/Employers/EmpJobListing";
import JobPostConfirmation from "./Pages/Employers/JobPostConfirmation";
import HowItWorkJobSeeker from "./Pages/HowItWorkJobSeeker";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import JobSearching from "./Pages/JobSeekers/JobSearching";
import LatestJObPost from "./Pages/JobSeekers/LatestJobPost";
import SignUp from "./Pages/SignUp";
import jwt_decode from "jwt-decode";
import DetailJobPost from "./Pages/JobSeekers/DetailJobPost";
import ChangePassword from "./Pages/Employers/ChangePassword";
import JobseekerDashBoard from "./Pages/JobSeekers/JobseekerDashBoard";
import JobseekerProfile from "./Pages/JobSeekers/JobseekerProfile";
import JobseekerAccountSetting from "./Pages/JobSeekers/JobseekerAccoutSetting";

import RateYourSkils from "./components/RateYourSkills";
import JobSeekerCreateProfile from "./Pages/JobSeekers/JobSeekerCreateProfile";
import SkillSearch from "./Pages/skillsearch";
import UpdatedProfile from "./Pages/JobSeekers/UpdateProfile";


function App() {
  const [spin, setSpin] = useState(false);
  const [user, setUser] = useState({});
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    setSpin(true);
    if (localStorage.getItem("token")) {
      var decoded = jwt_decode(localStorage.getItem("token"));
      setUser(decoded.result);
      setIsUser(true);
    } else {
      setIsUser(false);
      setUser();
    }

    setSpin(false);
  }, []);
  return (
    <div>
      {spin === false ? (
        <>
          <Menu />

          <Routes>
            <Route
              path="/"
              element={
                // isUser?<EmpDashBoard />:
                <Home />
              }
            />
            <Route path="/empdashhboard" element={<EmpDashBoard />} />
            <Route path="/accountsetting" element={<EmpAccountSetting />} />
            <Route
              path="/postjob"
              element={
                <ProtectedRoute>
                  <EmpPostAJob />
                </ProtectedRoute>
              }
            />

            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/jobs" element={<LatestJObPost />} />

            <Route
              path="/jobseekerdashbaord"
              element={
                <ProtectedRoute>
              <JobseekerDashBoard />
              </ProtectedRoute>
              }
            />
            <Route path="/jobseekerprofile" element={
              <ProtectedRoute>
                <JobseekerProfile />
              </ProtectedRoute>
            } />
            <Route
              path="/jobseekeraccountsetting"
              element={
                <ProtectedRoute>
              <JobseekerAccountSetting />
              </ProtectedRoute>
              }
            />
            <Route
              path="/jobseekercreateprofile"
              element={
                <ProtectedRoute>
              <JobSeekerCreateProfile />
              </ProtectedRoute>
              }
            />
            
            <Route path="/jobseekersearchjob" element={<JobSearching />} />
            <Route path="/rateskill" element={<RateYourSkils />} />

            <Route path="/detailjobpost" element={<DetailJobPost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/joblisting" element={
                <ProtectedRoute>
                  <EmpJobListing />
                 </ProtectedRoute> 
            } />
            <Route path="/jobseekerworks" element={<HowItWorkJobSeeker />} />
            <Route
              path="/succesfullypostsubmit"
              element={<JobPostConfirmation />}
            />

            <Route  path="/updateprofile"  element={
              <ProtectedRoute>
                 <UpdatedProfile  />
               </ProtectedRoute>  
            } />
            <Route path="/changepassword" element={
                <ProtectedRoute>
                   <ChangePassword />
                </ProtectedRoute>   
            } />
            <Route path="/termsofuse" element={<TermOfUse />} />

            <Route path="/privacypolicy" element={<PrivacyPolicay />} />
            <Route  path="/searchskill"  element={<SkillSearch />} />
            <Route
              path="/manageprofile"
              element={
                <ProtectedRoute>
                  <EmpManageProfile />
                </ProtectedRoute>
              }
            />
          </Routes>

          <Footer />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;

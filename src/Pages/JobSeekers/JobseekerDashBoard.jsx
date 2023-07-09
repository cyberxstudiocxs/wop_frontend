import imagess from "../../assets/images/download.png";
import { Link } from "react-router-dom";
import "../../styles/jobseeekerdashboard.css";
import { useState,useEffect} from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const JobseekerDashBoard = () => {

  const [user,setUser]=useState()
  const [profile,setProfile]=useState()

  useEffect(() => {
   
    if (localStorage.getItem("token")) {
      var decoded = jwt_decode(localStorage.getItem('token'));
       setUser(decoded.result)
       axios.get(`https://next.mazglobal.co.uk/wop-api/jobseekers/${decoded.result.id}`)
       .then(res=>{
        setProfile(res.data.data)
       }).catch(err=>console.log(err))
    }
  }, []);

  return (
    <div>
      <section  class="contact-us-main"> 
        <div className="container">
          <div className="row">
           
            <div className="col-lg-6">
              
            </div>
           
            <div className="col-lg-6">
              
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="jobseekerdashboard">
                <div className="jobseeker-heads">
                  <div className="jobseeker-person">
                    <img className="person" alt="100%x280" src={imagess} />
                  </div>
                  <div className="jobseeker-jobtype">
                    <p className="jobseeekertitle">{profile?profile.title:""} </p>
                  </div>
                </div>
              </div>

              <div className=" obseekerdashboard">
                <div className="jobseeker-body">
                  <div className="jobseeker-person">
                    <Link to="/jobseekerprofile"  className="editprofileee"> edit profile </Link>
                  </div>
                  <div className="jobseeker-jobtype">
                    <p className="salaryjobseeeker"> salary  {profile?profile.salary:""} </p>
                    <p className="typess"> Looking for {profile?profile.type_description:''} </p>
                    <p className="Educationstatic"> Education</p>
                    <p className="education"> {profile?profile.educational_description:''}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobseekerDashBoard;

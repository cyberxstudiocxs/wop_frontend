import { FaSuitcase } from "react-icons/fa";
import imagess from "../../assets/images/download.png";
import { useState,useEffect} from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const JobseekerProfile = () => {
 
  const [user,setUser]=useState()
  const [profile,setProfile]=useState()

  useEffect(() => {
    if (localStorage.getItem("token")) {
      var decoded = jwt_decode(localStorage.getItem('token'));
       setUser(decoded.result)
       axios.get(`https://next.mazglobal.co.uk/wop-api/jobseekers/${decoded.result.id}`)
       .then(res=>{
        let dob=res.data.data.date_of_birth.split("T")
        res.data.data.date_of_birth=dob[0]
        setProfile(res.data.data)
       }).catch(err=>console.log(err))
    }
  }, []);

  return (
    <div>
      <section class="jobseeker-profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="jobseeekerprofile-banner">
                <div className="profile-person">
                  <img className="person" alt="100%x280" src={imagess} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="profiletype-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="jobseeker-profilejobtype">
                <p> {profile?profile.title:""}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="graybg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <div
                className="
                profile-left-outer-box"
              >
                <div className="jobseekerleft-profile">
                  <h3> OverView</h3>

                  <div className="types-box">
                    <div className="work-icons">
                      <FaSuitcase />
                    </div>
                    <div className="works-info">
                      <h5> Types of works</h5>
                      <p> {profile?profile.type_description:''} </p>
                    </div>
                  </div>

                  <div className="types-box">
                    <div className="work-icons">
                      <FaSuitcase />
                    </div>
                    <div className="works-info">
                      <h5> Degree</h5>
                      <p> {profile?profile.educational_description:''} </p>
                    </div>
                  </div>
                </div>

               
              </div>
              <div className="m-3"></div>
              <div
                className="
                profile-left-outer-box"
              >
              <div className="profile-description">
                  <h3> Profile Description </h3>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
              <div className="right-profile">
                <h3> Basic Information</h3>

                <p className="salaryjobseeeker"> Date of Birth </p>
                <p className="typess"> {profile?profile.date_of_birth:''} </p>

                <p className="salaryjobseeeker"> Gender </p>
                <p className="typess"> {profile?profile.gender:''} </p>

                {/* <p className="salaryjobseeeker"> Salary </p>
                <p className="typess">51472 </p>

                <p className="salaryjobseeeker"> Education </p>
                <p className="typess"> Bscs </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobseekerProfile;

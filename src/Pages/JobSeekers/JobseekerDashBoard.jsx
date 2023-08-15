import imagess from "../../assets/images/download.png";

import "../../styles/jobseeekerdashboard.css";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const JobseekerDashBoard = () => {
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      var decoded = jwt_decode(localStorage.getItem("token"));
      setUser(decoded.result);
      axios
        .get(
          `https://api.zalimburgers.com/wop-api/jobseekers/${decoded.result.id}`
        )
        .then((res) => {
          setProfile(res.data.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div>
      <section class="contact-us-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>

            <div className="col-lg-6"></div>
          </div>
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="jobseekerdashboard">
                <div className="jobseeker-heads">
                  <div className="jobseeker-person">
                    <img className="person" alt="100%x280" src={imagess} />
                  </div>
                  <div className="jobseeker-jobtype">
                    <p className="jobseeekertitle">
                      {profile ? profile.title : ""}{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className=" obseekerdashboard">
                <div className="jobseeker-body">
                  <div className="jobseeker-person">
                    <Link className="worker-btns" to="/updateprofile">
                      {" "}
                      Update Profile
                    </Link>
                  </div>
                  <div className="jobseeker-jobtype">
                    <p className="salaryjobseeeker"> salary </p>
                    <p> {profile ? profile.salary : ""} </p>
                    <p className="salaryjobseeeker"> Looking for </p>
                    <p> {profile ? profile.type_description : ""} </p>
                    <p className="Educationstatic"> Education</p>
                    <p className="education">
                      {" "}
                      {profile ? profile.educational_description : ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-space"></div>

        <section className="middle-banner-jobseekers">
          <div className="container ">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <div className="middle-banner-jobseekers">
                  <h3>Looking for a job?</h3>
                  <p>
                   
                    Find your dream employer today and take the first step
                    towards your future!
                  </p>

                  <Link className="worker-btns" to="/jobs">
                    Search Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-banner">
          <div className="container ">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <div className="jobseeker-cta-bg">
                  <h3>
                    {" "}
                    Ready to take the leap and find a job that's just right?
                  </h3>

                  <p>
                    Explore our diverse job opportunities and let your career
                    take flight!
                  </p>
                  <Link className="worker-btns" to="/jobs">
                    View Latest Job Openings!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default JobseekerDashBoard;

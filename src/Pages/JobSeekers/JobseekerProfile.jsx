import { FaSuitcase, FaGraduationCap } from "react-icons/fa";
import imagess from "../../assets/images/download.png";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link,useLocation } from "react-router-dom";
const JobseekerProfile = () => {
  const location = useLocation();
  const [user, setUser] = useState();
  const [profile, setProfile] = useState();

  useEffect(() => {
    let data = {};
    
    let j_id=null;
    if (localStorage.getItem("token")) {
      var decoded = jwt_decode(localStorage.getItem("token"));
      setUser(decoded.result);
      if(location.state){
      
        j_id=location.state.id
      }
      else{
        j_id=decoded.result.id
      }
      axios
        .get(
          `https://api.zalimburgers.com/wop-api/jobseekers/${j_id}`
        )
        .then((res) => {
          let dob = res.data.data.date_of_birth.split("T");
          res.data.data.date_of_birth = dob[0];
          data = res.data.data;
        })
        .catch((err) => console.log(err));

      axios
        .get(
          `https://api.zalimburgers.com/wop-api/jobseekers/skills/${j_id}`
        )
        .then((resp) => {
          data["skills"] = resp.data.data;
        })
        .catch((err) => console.log(err));

      setTimeout(() => {
        if (data) {
          console.log("data", data);
          setProfile(data);
        }
      }, 5000);
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
                <p> {profile ? profile.title : ""}</p>
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
                  <div className="headbg">
                    <h3> OverView</h3>
                  </div>

                  <div className="profilebodyy">
                    <div className="types-box">
                      <div className="work-icons">
                        <FaSuitcase />
                      </div>
                      <div className="works-info">
                        <h5> Types of works</h5>
                        <p> {profile ? profile.type_description : ""} </p>
                      </div>
                    </div>

                    <div className="types-box">
                      <div className="work-icons">
                        <FaGraduationCap />
                      </div>
                      <div className="works-info">
                        <h5> Degree</h5>
                        <p>
                          {" "}
                          {profile ? profile.educational_description : ""}{" "}
                        </p>
                      </div>
                    </div>

                    <div className="types-box">
                      <div className="work-icons">
                        <FaGraduationCap />
                      </div>
                      <div className="works-info">
                        <h5> Working Hours</h5>
                        <p>
                          {" "}
                          {profile ? profile.educational_description : ""}{" "}
                        </p>
                      </div>
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
                  <div className="headbg">
                    <h3> Profile Description </h3>
                  </div>
                </div>
                <div className="profilebodyy">
                  <p>{profile ? profile.profile_desc : ""}</p>
                </div>
              </div>
              <div className="m-3"></div>
              <div
                className="
                profile-left-outer-box"
              >
                <div className="profile-description">
                  <div className="headbg">
                    <h3> Top Skills</h3>
                  </div>
                  <div className="profilebodyy">
                    {profile && profile.skills ? (
                      <>
                        {profile.skills.map((skill) => (
                          <div className="SkilssShow-box">
                            <p>{skill.description}</p>

                            <div>
                              <div className="ratingstar">
                                <ReactStars
                                  count={5}
                                  size={24}
                                  value={skill.proficiency.charAt(0)}
                                  activeColor="#ffd700"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-profile">
                <div className="headbg">
                  <h3> Basic Information</h3>
                </div>

                <div className="profilebodyy">
                  <p className="salaryjobseeeker"> Date of Birth </p>
                  <p className="typess">
                    {" "}
                    {profile ? profile.date_of_birth : ""}{" "}
                  </p>

                  {/* <p className="salaryjobseeeker"> Website </p>
                <p className="typess"> No Link Yet </p> */}

                  <p className="salaryjobseeeker"> Gender </p>
                  <p className="typess"> {profile ? profile.gender : ""} </p>

                
{/* 
                <p className="salaryjobseeeker"> Address </p>
                <p className="typess"> Calamba, Laguna </p>  */}
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container ">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="jobseeker-cta-bg profilecta">
                <div className="cta-size-box">
                  <h3>Ready to Be in the Spotlight?</h3>

                  <p>
                    Want to prove your expertise to employers? Take our
                    proficiency tests and get the recognition you deserve!
                  </p>
                  <Link className="worker-btns" to="/contactus">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobseekerProfile;

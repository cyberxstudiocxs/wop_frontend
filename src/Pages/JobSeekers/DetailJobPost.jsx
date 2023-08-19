import "../../styles/jobsekeer.css";
import { useEffect, useState } from "react";
import { FaSuitcase, FaRegCalendarAlt } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import jwt_decode from "jwt-decode";
import axios from "axios";
import moment from "moment/moment";
import { Link,useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
const DetailJobPost = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [job, setJob] = useState();
  const [profile, setProfile] = useState();
  const [applicant, setApplicant] = useState({
    email: "",
    fullname: "",
    education: null,
    experience: "",
    summary: "",
    attachment: "",
  });
  const [resumeOption, setResumeOption] = useState();
  const [msg, setMsg] = useState();
  const [user, setUser] = useState();
  const [resumeAlert, setResumeAlert] = useState(false);
  const resumeToggle = () => setResumeAlert(!resumeAlert);
  const [modals, setModals] = useState(false);
  const toggle = () => setModals(!modals);
  const [msgmodal, setMsgModal] = useState(false);
  const msgToggle = () => setMsgModal(!msgmodal);

  useEffect(() => {
    let data = {};
    if (localStorage.getItem("token")) {
      var decoded = jwt_decode(localStorage.getItem("token"));
      setUser(decoded.result);
      axios
        .get(
          `https://api.zalimburgers.com/wop-api/jobseekers/${decoded.result.id}`
        )
        .then((res) => {
          let dob = res.data.data.date_of_birth.split("T");
          res.data.data.date_of_birth = dob[0];
          data = res.data.data;
        })
        .catch((err) => console.log(err));

      axios
        .get(
          `https://api.zalimburgers.com/wop-api/jobseekers/skills/${decoded.result.id}`
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
    if (location.state) {
      console.log("in details ", location.state.id);
      axios
        .get(
          `https://api.zalimburgers.com/wop-api/joblistings/${location.state.id}`
        )
        .then((res) => {
          let jobDate = res.data.data.created_at.split("T");
          jobDate = jobDate[0];
          jobDate = jobDate.split("-");
          jobDate[1] = parseInt(jobDate[1]) - 1;
          var date = new Date(jobDate[0], jobDate[1].toString(), jobDate[2]);
          res.data.data.created_at = moment(date).format("dddd MMMM D Y");
          setJob(res.data.data);
        })
        .catch((err) => console.log(err));
        setApplicant({
          ...applicant,
          ['job_id']:location.state.id
        })
    }
  }, []);

  const resumeOptions = (opt) => {
   
    setResumeOption(opt);
    if (opt === "1") {
     
      resumeToggle();
    }
  };

  const addDetails = () => {
    console.log(profile);
    setApplicant({
      ...applicant,
      ["email"]: profile.email?profile.email:'',
      ["fullname"]: profile.fullname?profile.fullname:'',
      ['jobseeker_id']:user.id
    });
    toggle();
  };

  const submitApplication = (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append('pdfFile', applicant.attachment);
    formData.append('email',applicant.email);
    formData.append('fullname',applicant.fullname);
    formData.append('job_id',applicant.job_id);
    formData.append('experience',applicant.experience);
    formData.append('education',applicant.education);
    formData.append('summary',applicant.summary);
    formData.append('jobseeker_id',applicant.jobseeker_id);
    formData.append('applicants',job.applicants);
    formData.append('new_applicants',job.new_applicants);
    formData.append('jobseeker_name',user.full_name);
    formData.append('jobseeker_email',user.email);

    //https://api.zalimburgers.com/wop-api
    console.log('in sunnn')

    axios
        .post(
          `https://api.zalimburgers.com/wop-api/joblistings/addApplicant`,formData,{}
        )
        .then((res) => {
          console.log("res",res.data)
           setMsg(res.data.message)
           msgToggle()
        }).catch((err)=>{
          console.log(err)
          setMsg(err.response.data.message)
          msgToggle()
        })
  };
  
  const handleApplicantChange=(e)=>{
    if (e.target.name === "attachment") {
      if (e.target.files && e.target.files[0]) {
        // let imgg = e.target.files[0];
        setApplicant({
          ...applicant,
          [e.target.name]: e.target.files[0]
        });
      }
    } else {
      setApplicant({
        ...applicant,
        [e.target.name]: e.target.value,
      });
    }
  }

  const reload=()=>{
    console.log('kkkkkkkkkkkk')
    navigate("/jobs", {

    });
  }

  return (
    <>
      {job && (
        <div>
          <section className="single-job-post-jobseeker">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="jobseeker-post-banner">
                    <h3> {job.title} </h3>
                    {!user && (
                      <p>
                        {" "}
                        Please <Link to="/login">login</Link> or{" "}
                        <Link to="/signup">Register</Link> as jobseeker to apply
                        for this job.{" "}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            {" "}
            <div className="container">
              <div className="row sameee-boxx ">
                <div className="col-lg-4">
                  <div className="types-box">
                    <div className="work-icons">
                      <FaSuitcase className="singlee-icons " />
                    </div>
                    <div className="works-info">
                      <h5> Types of works</h5>
                      <p> {job.job_type_description} </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="types-box">
                    <div className="work-icons">
                      <BiDollarCircle className="singlee-icons" />
                    </div>
                    <div className="works-info">
                      <h5> salary</h5>
                      <p> {job.salary} </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="types-box">
                    <div className="work-icons">
                      <FaRegCalendarAlt className="singlee-icons" />
                    </div>
                    <div className="works-info">
                      <h5> Date Post </h5>
                      <p> {job.created_at}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="onlinejob-box">
                    <div className="onlinejob-info">
                      <h3>Job Overview</h3>
                      <p> {job.description}</p>
                      {job.job_link && user && (
                        <>
                          <h5>Apply for job on the below link</h5>
                          <div className="jobapplylinksss">
                            <a href={job.job_link} target="_blank">
                              {job.job_link}
                            </a>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

             {!job.job_link &&
              <div className="row">
                <div className="col-lg-12">
                  <div className="popupppp">
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => addDetails()}
                    >
                      Apply Job
                    </button>
                  </div>
                </div>
              </div>
            }
            </div>{" "}
          </section>

          <Modal
            isOpen={resumeAlert}
            toggle={resumeToggle}
            className="emp-box-outer"
          >
            <ModalHeader
              toggle={resumeToggle}
              closeButton
              className="emp-box"
            ></ModalHeader>
            <h3 className="emp-heading">
              Sign Up for a Job Seeker Account for Free{" "}
            </h3>
            <ModalBody>
              <div className="jobseekerleft-profile">
                <div className="headbg">
                  <h3> OverView</h3>
                </div>

                <div className="profilebodyy">
                  <div className="types-box">
                    <div className="work-icons"></div>
                    <div className="works-info">
                      <h5> Types of works</h5>
                      <p> {profile ? profile.type_description : ""} </p>
                    </div>
                  </div>

                  <div className="types-box">
                    <div className="work-icons"></div>
                    <div className="works-info">
                      <h5> Degree</h5>
                      <p>
                        {" "}
                          {profile ? profile.educational_description : ""}{" "}
                      </p>
                    </div>
                  </div>

                  <div className="types-box">
                    <div className="work-icons"></div>
                    <div className="works-info">
                      <h5> Working Hours</h5>
                      <p>
                        {" "}
                          {profile ? profile.educational_description : ""}{" "}
                      </p>
                    </div>
                  </div>
                </div>

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


                    <p className="salaryjobseeeker"> Gender </p>
                    <p className="typess"> {profile ? profile.gender : ""} </p>

                  </div>
                </div>

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
            </ModalBody>
          </Modal>

          <Modal isOpen={modals} toggle={toggle} className="emp-box-outer">
            <ModalHeader
              toggle={toggle}
              closeButton
              className="emp-box"
            ></ModalHeader>
            <div>
              <h5>Choose Your Resume Options</h5>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  onChange={(e) => resumeOptions("1")}
                />
                <label class="form-check-label" for="exampleRadios1">
                 Work Online Portal Profile/CV
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                  onChange={(e) => resumeOptions("2")}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Upload CV  
                </label>
              </div>
            </div>
            <ModalBody>
              <div>
                <form onSubmit={submitApplication}>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      value={(applicant && applicant.email)?applicant.email:''}
                      onChange={(e)=>handleApplicantChange(e)}
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Full Name</label>
                    <input
                      type="text"
                      class="form-control"
                      value={(applicant && applicant.fullname)?applicant.fullname:''}
                      onChange={(e)=>handleApplicantChange(e)}
                      id="exampleInputPassword1"
                      placeholder="Full Name"
                    />
                  </div>

                  <div class="form-group">
                    <label for="exampleInputPassword1">Experience </label>
                    <input
                      type="text"
                      class="form-control"
                      name="experience"
                      value={(applicant &&applicant.experience)?applicant.experience:''}
                      onChange={(e)=>handleApplicantChange(e)}
                      id="exampleInputPassword1"
                      required
                      placeholder="experience"
                    />
                  </div>

                  <Form.Group controlId="formEmpTypess">
                    <Form.Label>Highest Educational Attainment</Form.Label>
                    <Form.Select
                      aria-readonly="true"
                      className="shadow-none"
                      name="education"
                      value={(applicant &&applicant.education)?applicant.education:''}
                      onChange={(e)=>handleApplicantChange(e)}
                      required
                    >
                      <option value="">Select Degree</option>
                      <option value="1">High School Diploma</option>
                      <option value="2">Bachelor Degree</option>
                      <option value="3">Associate Degree</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="summary">
                    <Form.Label>Summary </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={(applicant && applicant.summary)?applicant.summary:''}
                      onChange={(e)=>handleApplicantChange(e)}
                      placeholder="Tell us summary about your skills and how you want to be known as a worker."
                      className="shadow-none"
                      required
                      name="summary"
                    />
                  </Form.Group>
                  {resumeOption === "2" && (
                    <div class="form-group">
                      <label for="exampleFormControlFile1">
                        Attach Your CV/Resume
                      </label>
                      <input
                        type="file"
                        name="attachment"
                        
                        onChange={(e)=>handleApplicantChange(e)}
                        accept=".pdf"
                        class="form-control-file"
                        required={resumeOption === "2"}
                        id="exampleFormControlFile1"
                      />
                    </div>
                  )}
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </ModalBody>
          </Modal>

          <Modal isOpen={msgmodal} toggle={msgToggle}>
        <ModalHeader toggle={msgToggle} className="emp-box"></ModalHeader>
        <h3 className="emp-heading">Notification!</h3>
        <ModalBody>
          <p>
            {msg}
          </p>
        </ModalBody>
        <ModalFooter>
        <Button  className="worker-btns" toggle={()=>reload()} >Ok</Button>
        </ModalFooter>
      </Modal>
        </div>
      )}
    </>
  );
};

export default DetailJobPost;

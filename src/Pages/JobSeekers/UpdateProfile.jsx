import { FaSuitcase, FaGraduationCap } from "react-icons/fa";
import imagess from "../../assets/images/download.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { BsPencil } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactStars from "react-rating-stars-component";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import jwt_decode from "jwt-decode";

const UpdatedProfile = () => {
  const [profile, setProfile] = useState();
  const [updatedProfileValues, setUpdatedProfileValues] = useState();
  const [skill, setSkill] = useState();
  const [updatedSkillValues, setUpdatedSkillValues] = useState();
  const [jobseekerSkills, setJobSeekerSkills] = useState([]);
  const [user, setUser] = useState();
  const [msg, setMsg] = useState("");
  const [skill_msg, setSkillMsg] = useState("");
  const [newSkill, setNewSkill] = useState({
    jobseeker_id: null,
    skill_id: null,
    skill_period: "Less than 6 month",
    proficiency: "",
    experience: "",
  });
  const [options, setOptions] = useState([]);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [skill_modal, setSkillModal] = useState(false);
  const skill_toggle = () => setSkillModal(!skill_modal);

  const handleChange = (choice) => {
    setNewSkill({
      ...newSkill,
      ["skill_id"]: choice.value,
    });
    toggle();
  };

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
          //setProfile(data);
          setUpdatedProfileValues(data)
        }
      }, 5000);
    }
  }, []);

 // rating stars
 const ratingChanged = (newRating) => {
  console.log(newRating);
  setSkillMsg("");
  setSkill({
    ...skill,
    ["proficiency"]: newRating + " " + "star"
  });
  setUpdatedSkillValues({
    ...updatedSkillValues,
    ["proficiency"]: newRating + " " + "star"
  });
};

const handleSkillChange = (e) => {
 
  setSkill({
    ...skill,
    [e.target.name]: e.target.value,
  });
  setUpdatedSkillValues({
    ...updatedSkillValues,
    [e.target.name]: e.target.value,
  });
  
};

const handleProfileChange = (e) => {
  setUpdatedProfileValues({
    ...updatedProfileValues,
    [e.target.name]: e.target.value,
  });

  setProfile({
    ...profile,
    [e.target.name]: e.target.value,
  });

};

const addSkill = (e) => {
  if (!newSkill.proficiency) {
    setMsg("Please rate your skill");
    e.preventDefault();
  } else {
    axios
      .post(
        `https://api.zalimburgers.com/wop-api/jobseekers/addSkill`,
        newSkill
      )
      .then((res) => {
        toggle();
        window.location.reload()
      })
      .catch((err) => console.log(err));
  }
};

const updateSkill = (e) => {
  if (!skill.proficiency) {
    setSkillMsg("Please rate your skill");
    e.preventDefault();
  } else {
    //https://api.zalimburgers.com
    axios
      .put(
        `https://api.zalimburgers.com/wop-api/jobseekers/updateSkill/${skill.id}`,
        updatedSkillValues
      )
      .then((res) => {
        setMsg(res.data.message)
        toggle();
        window.location.reload()
      })
      .catch((err) =>{
        console.log(err)
        setMsg(err.response.data.message)
        toggle();
      } );
  }
};

const viewSkillDialog = (skill) => {
    setSkill(skill)
    skill_toggle()
}

const updateProfile = (e) => {
  // if (!newSkill.proficiency) {
  //   setMsg("Please rate your skill");
  //   e.preventDefault();
  // } else {
    console.log('profile updatedd')
    
    axios
      .put(
        `https://api.zalimburgers.com/wop-api/jobseekers/updateProfile/${user.id}`,
        profile
      )
      .then((res) => {
        console.log(res.data)
        setMsg(res.data.message)
        toggle();
        //window.location.reload()
      })
      .catch((err) => {
        console.log(err)
        setMsg(err.response.data.message)
        toggle();
      });
 // }
};

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
                <p> {updatedProfileValues?updatedProfileValues.title:''}</p>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="graybg">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div
                className="
                profile-left-outer-box"
              >
                <div className="jobseekerleft-profile">
                  <div className="headbg">
                    <h3> OverView</h3>
                  </div>

                  <div className="profilebodyy">
                  
                    
                      
                      <div >
                      <Form.Label>Types of works</Form.Label>
                        
                        <Row className="mb-3">
                          <Form.Group controlId="formEmpTypess">
                            <Form.Select
                              aria-readonly="true"
                              defaultValue="Full Time"
                              className="shadow-none"
                              name="job_type"
                              value={updatedProfileValues?updatedProfileValues.job_type:''}
                              required
                              onChange={e=>handleProfileChange(e)}
                            >
                              <option value="1">Full Time</option>
                              <option value="2">Part Time</option>
                              <option value="3">Gig </option>
                            </Form.Select>
                          </Form.Group>
                        </Row>
                      </div>

                      
                    
                   
                     
                      <div >
                      <Form.Label>Degree</Form.Label>
                        
                        <Row className="mb-3">
                          <Form.Group controlId="formEmpTypess">
                            <Form.Select
                              aria-readonly="true"
                              defaultValue="Select Degree"
                              className="shadow-none"
                              name="education"
                              required
                              value={updatedProfileValues?updatedProfileValues.education:''}
                              onChange={e=>handleProfileChange(e)}
                            >
                              <option>Select Degree</option>
                              <option value="1">High School Diploma</option>
                              <option value="2">Bachelor Degree</option>
                              <option value="3">Associate Degree</option>
                            </Form.Select>
                          </Form.Group>
                        </Row>
                      </div>
                    
                    <Row className="mb-3">
                      <Form.Group controlId="formJobTitle">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control
                          type="text"
                          name="title"
                          required
                          placeholder="E.G Digital Marketing Specialist."
                          className="shadow-none"
                          value={updatedProfileValues?updatedProfileValues.title:''}
                          onChange={e=>handleProfileChange(e)}
                        />
                      </Form.Group>
                    </Row>

                    <Row>
                    <Form.Group  as={Col} controlId="formPersonname">
                        <Form.Label>Current Salary</Form.Label>
                        <Form.Control
                          type="number"
                          name="salary"
                          required
                          value={updatedProfileValues?updatedProfileValues.salary:''}
                          onChange={e=>handleProfileChange(e)}
                          className="shadow-none"
                        />
                      </Form.Group>
                    </Row>

                    <Row>
                    <Form.Group as={Col} controlId="formPersonname">
                        <Form.Label>Enter Work Hours</Form.Label>
                        <Form.Control
                          type="number"
                          name="work_hours"
                          required
                          value={updatedProfileValues?updatedProfileValues.work_hours:''}
                          onChange={e=>handleProfileChange(e)}
                          className="shadow-none"
                        />
                      </Form.Group>
                    </Row>

                    
                    <Form.Label>Date of Birth</Form.Label>
                  
                  <Row className="mb-3">
                      <Form.Group  as={Col} controlId="formPersonname">
                        
                        <Form.Control
                          type="text"
                          name="date_of_birth"
                          required
                          value={updatedProfileValues?updatedProfileValues.date_of_birth:''}
                          onChange={e=>handleProfileChange(e)}
                          className="shadow-none"
                        />
                      </Form.Group>

                      
                    </Row>

                  <p className="salaryjobseeeker"> Gender </p>
                  <Row className="mb-3">
                      <Form.Group controlId="kindOfStand" onChange={e=>handleProfileChange(e)}>
                      
                        <Form.Check
                          value="Male"
                          name="gender"
                          type="radio"
                          aria-label="radio 1"
                          label="Male"
                          checked={updatedProfileValues && updatedProfileValues.gender=="Male"}
                        />
                        <Form.Check
                          value="Female"
                          name="gender"
                          type="radio"
                          aria-label="radio 2"
                          label="Female"
                          checked={updatedProfileValues && updatedProfileValues.gender=="Female"}
                        />
                      </Form.Group>
                    </Row>
                
                    <div className="profilebodyy">
                  <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="profileDesc">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Tell us summary about your skills and how you want to be known as a worker."
                        className="shadow-none"
                        required
                        name="profile_desc"
                        value={updatedProfileValues?updatedProfileValues.profile_desc:''}
                        onChange={e=>handleProfileChange(e)}
                      />
                    </Form.Group>
                  </Row>

                  <Row>
                  <button onClick={updateProfile}  className="postjob-btn">  Update Profile</button>
                  </Row>
                </div>
                  
                  </div>
                </div>
              </div>
              <div className="m-3"></div>
             
              <div className="m-3"></div>
              <div
                className="
                profile-left-outer-box"
              >
                <div className="headbg">
                  <h3> Top Skill </h3>   
                </div>

                <div className="profilebodyy">
                  {(updatedProfileValues && updatedProfileValues.skills) ?
                  <>
                    {updatedProfileValues.skills.map((skill)=>(
                         <div className="SkilssShow-box">
                 
                         <p>{skill.description}</p>
                         <div className="ratingstar">
                                     <ReactStars
                                       count={5}
                                       size={24}
                                       activeColor="#ffd700"
                                       value={skill.proficiency.charAt(0)}
                                     />
                                   </div>
                         <BsPencil onClick={()=>viewSkillDialog(skill)}/>
                       </div>
                    ))

                    }
                  </>:""
                  }
               
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Modal isOpen={skill_modal} toggle={skill_toggle}>
        <ModalHeader toggle={skill_toggle} className="emp-box"></ModalHeader>
        <h3 className="emp-heading"> Update SKill</h3>
        <ModalBody>
          <Form>
            <Row className="mb-3">
              <Form.Group controlId="formSkillTypes">
                <Form.Label>EXPERIENCE LEVEL FOR THIS SKILL </Form.Label>
                <Form.Select
                  aria-readonly="true"
                  defaultValue="Select Time Period"
                  className="shadow-none"
                  name="skill_period"
                  value={skill?skill.skill_period:''}
                  required
                  onChange={(e) => handleSkillChange(e)}
                >
                  <option value="Less than 6 month" selected>
                    Less than 6 month{" "}
                  </option>
                  <option value="One Year">One Year</option>
                  <option value="Two Year">Two Year</option>
                  <option value="Three Year">Three Year</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <div className="ratingstar">
              <label> RATE SKILL PROFICIENCY </label>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                value={skill?skill.proficiency.charAt(0):''}
                size={24}
                activeColor="#ffd700"
              />
              {skill_msg && <p style={{ color: "red" }}>{skill_msg}</p>}
            </div>

            <Row className="mb-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextareatwo"
              >
                <Form.Label>DESCRIBE YOUR EXPERIENCE (OPTIONAL)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Tell us summary about your skills and how you want to be known as a worker."
                  className="shadow-none"
                  onChange={(e) => handleSkillChange(e)}
                  name="experience"
                  value={skill?skill.experience:''}
                />
              </Form.Group>
            </Row>

            <div className="text-center">
              <Button className="step-btns" onClick={updateSkill}>
                Save
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
      
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="emp-box"></ModalHeader>
        <h3 className="emp-heading">Notification!</h3>
        <ModalBody>
          <p>
            {msg}
          </p>
        </ModalBody>
        <ModalFooter>
        <Button  className="worker-btns" toggle={toggle} >Ok</Button>
        </ModalFooter>
      </Modal>

    </div>
  );
};

export default UpdatedProfile;

import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useState,useEffect} from "react";

import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from 'axios';

const CreateProfileJobseeker = () => {
  const navigat = useNavigate();
  const [user,setUser]=useState()
  const [state,setState]=useState({
    title:'',
    education:null,
    job_type:null,
    gender:"",
    salary:"",
    work_hours:"",
    date_of_birth:"",
    profile_desc:""
  })
  
  useEffect(() => {

    if (localStorage.getItem("token")) {
      var decoded = jwt_decode(localStorage.getItem('token'));
       setUser(decoded.result)
     
    }
  }, []);

  const handleChange=(e)=>{
    let val;
    val=e.target.value
    // if(e.target.name==='date_of_birth'){
    //   let date =new Date(e.target.value)
    //   val=date
    // }
    setState({
      ...state,
      [e.target.name]:val
    })
  }

  const saveProfile=(e)=>{
     e.preventDefault()
     
     state.work_hours= state.work_hours.toString()
     state.salary=state.salary.toString()
     axios.put(`https://api.zalimburgers.com/wop-api/jobseekers/updateProfile/${user.id}`,state)
     .then(res=>{
      navigat("/rateskill"); 
     }).catch(err=>console.log(err))
      
  
  }

  return (
    <div>
      <section className="jobseeekr-steps">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="leftsdiebar-jobseeekr">
                <Link className="sidebar-btns" to="/jobseekercreateprofile">
                  Create Profile
                </Link>

                <Link className="sidebar-btns" to="/rateskill">
                  Rate Your Skills
                </Link>

                <Link className="sidebar-btns" to="">
                  View Avilable Jobs
                </Link>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="right-sidebar-jobseeker">
                <h3> Tell us about you </h3>
                <p>
                  Take this opportunity to show off your skills. Write a
                  paragraph about your employment skills. Don’t just write a
                  list. Write something that will demonstrate to an employer how
                  knowledgeable you are
                </p>

                <div className="right-formsss">
                  <Form onSubmit={saveProfile}>
                    <Row className="mb-3">
                      <Form.Group controlId="formJobTitle">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control
                          type="text"
                          name="title"
                          required
                          onChange={e=>handleChange(e)}
                          placeholder="E.G Digital Marketing Specialist."
                          className="shadow-none"
                        />
                      </Form.Group>
                    </Row>

                 

                    <Row className="mb-3">
                      <Form.Group controlId="formEmpTypess">
                        <Form.Label>Highest Educational Attainment</Form.Label>
                        <Form.Select
                          aria-readonly="true"
                          defaultValue="Select Degree"
                          className="shadow-none"
                          name="education"
                          onChange={e=>handleChange(e)}
                          required
                        >
                          <option>Select Degree</option>
                          <option value="1">High School Diploma</option>
                          <option value="2">Bachelor Degree</option>
                          <option value="3">Associate Degree</option>
                        </Form.Select>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group controlId="formEmpTypess">
                        <Form.Label>Looking For</Form.Label>
                        <Form.Select
                          aria-readonly="true"
                          defaultValue="Full Time"
                          className="shadow-none"
                          name="job_type"
                          onChange={e=>handleChange(e)}
                          required
                        >
                          <option value="1">Full Time</option>
                          <option value="2">Part Time</option>
                          <option value="3">Gig </option>
                        </Form.Select>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group  as={Col} controlId="formPersonname">
                        <Form.Label>Enter Date Of Birth</Form.Label>
                        <Form.Control
                          type="text"
                          name="date_of_birth"
                          required
                          onChange={e=>handleChange(e)}
                          className="shadow-none"
                        />
                      </Form.Group>

                      {/* <Form.Group as={Col} controlId="formPersonname">
                        <Form.Label>Enter Your Age</Form.Label>
                        <Form.Control
                          type="number"
                          name="age"
                          required
                          onChange={e=>handleChange(e)}
                          className="shadow-none"
                        />
                      </Form.Group> */}
                    </Row>


                    <Row className="mb-3">
                      <Form.Group  as={Col} controlId="formPersonname">
                        <Form.Label>Current Salary</Form.Label>
                        <Form.Control
                          type="number"
                          name="salary"
                          required
                          onChange={e=>handleChange(e)}
                          className="shadow-none"
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formPersonname">
                        <Form.Label>Enter Work Hours</Form.Label>
                        <Form.Control
                          type="number"
                          name="work_hours"
                          required
                          onChange={e=>handleChange(e)}
                          className="shadow-none"
                        />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        className="mb-3"
                        controlId="profileDesc"
                      >
                        <Form.Label>Profile Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          onChange={e=>handleChange(e)}
                          placeholder="Tell us summary about your skills and how you want to be known as a worker."
                          className="shadow-none"
                          required
                          name="profile_desc"
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group controlId="kindOfStand"   onChange={e=>handleChange(e)}>
                      <Form.Label>Gender</Form.Label>
                        <Form.Check
                          value="Male"
                          name="gender"
                          type="radio"
                          aria-label="radio 1"
                          label="Male"
                        />
                        <Form.Check
                          value="Female"
                          name="gender"
                          type="radio"
                          aria-label="radio 2"
                          label="Female"
                        />
                      </Form.Group>
                    </Row>

                  


                    <div className="text-center">
                      
                    <button type="submit" className="step-btns" >
                          Next
                    
                    </button>
                    
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateProfileJobseeker;
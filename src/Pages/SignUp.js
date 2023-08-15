
import React,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import Form from "react-bootstrap/Form";
import axios from "axios";
import "../styles/register.css";
import Validation from "../components/Validations"


const SignUp = () => {
  const [show, setShow] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [isAlert, setIsAlert] = useState(false);
  const alertToggle = () => setIsAlert(!isAlert);
  const [jobseekerModal, setJobSeekerModal] = React.useState(false);
  const jobseekerToggle = () => setJobSeekerModal(!jobseekerModal);
  const [employerModal, setEmployerModal] = React.useState(false);
  const employerToggle = () => setEmployerModal(!employerModal);

  const handleClose = () => {
    setUser({
      fullname: "",
      email: "",
      password: "",
    });
    setShow(false);
  };
  const handleShow = () => {
    setError(false)
    setErrorMsg('')
    setPakError(false)
    setPakErrorMsg('')
    setShow(true);
  }

  const [jobshow, jobsetShow] = useState(false);
  const jobhandleClose = () => {
    setUser({
      fullname: "",
      email: "",
      password: "",
    });
    jobsetShow(false);
  };
  const jobhandleShow = () => {
    setError(false)
    setErrorMsg('')
    setPakError(false)
    setPakErrorMsg('')
    jobsetShow(true);
  }
  

  const [spinner, setSpinner] = useState(false);

  const [users, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errorsmeaasage, setErrormessage] = useState({});

  const [checks, setChecks] = useState(false);
  const [error, setError] = useState(false);
  const [pakerror, setPakError] = useState(false);
  const [errormsg, setErrorMsg] = useState("");
  const [pakerrormsg, setPakErrorMsg] = useState("");

  const onChangeValues = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };
 

  const UserRegistration = (e) => {
    e.preventDefault();
    setSpinner(true);
    setErrormessage(Validation(users));
   
    if (!pakerror && !error) {
      setPakErrorMsg(" Please Select The Pakistani Check box");
      setErrorMsg(" Please Select The Check box");
      setSpinner(false);
    }
    else if (!pakerror) {
      setPakErrorMsg(" Please Select The Pakistani Check box");
      setSpinner(false);
    } else if(!error){
      setErrorMsg(" Please Select The Check box");
      setSpinner(false);
    } else {
      //https://975c-2a07-23c0-8-b000-00-bd1b.ngrok-free.app
      console.log(users);
      //https://api.zalimburgers.com
      axios
        .post("https://api.zalimburgers.com/wop-api/employers", users, {})
        .then((result) => {
          console.log(result.data);
          setSpinner(false);
          setTimeout(()=>{
            
            setAlertMsg(result.data.message)
            alertToggle()
            employerToggle()
          },1000)
        

          
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response.data.message);
          setSpinner(false);
          setTimeout(()=>{
            setAlertMsg(err.response.data.message)
            alertToggle()
            employerToggle()
          },1000)
          
        });
    }
  };

  const setErrorChk=(choice)=>{
    if(choice==1){
      setPakError(!pakerror)
    
    }
    else{
      setError(!error)
    }
  }
  const JobSeekerRegistration = (e) => {
    e.preventDefault();
    setSpinner(true);
    setErrormessage(Validation(users));
   
    if (!pakerror && !error) {
      setPakErrorMsg(" Please Select The Pakistani Check box");
      setErrorMsg(" Please Select The Check box");
      setSpinner(false);
    }
    else if (!pakerror) {
      setPakErrorMsg(" Please Select The Pakistani Check box");
      setSpinner(false);
    } else if(!error){
      setErrorMsg(" Please Select The Check box");
      setSpinner(false);
    }
    else {
      //https://975c-2a07-23c0-8-b000-00-bd1b.ngrok-free.app
      console.log(users);
      axios
        .post("https://api.zalimburgers.com/wop-api/jobseekers", users, {})
        .then((result) => {
          console.log(result.data);
          setSpinner(false);
          
          setTimeout(()=>{
           // <MyAlert msg={result.data.message}/>
            
            setAlertMsg(result.data.message)
            alertToggle()
           
            //alert(result.data.message);
            jobseekerToggle()
            //jobhandleClose()
          },1000)
        
        })
        .catch((err) => {
        
          setSpinner(false);
          setTimeout(()=>{
            //<MyAlert msg={err.response.data.message}/>
            setAlertMsg(err.response.data.message)
            alertToggle()
          
           
           // alert(err.response.data.message);
           jobseekerToggle()
           // jobhandleClose()
          },1000)
        });
    }
  };

  return (
    <div>
      <section className="main-register-box">
        <div className="container-fluid   " >
          <div className="row ">
            <div className="col-lg-6">
              <div className="emp-outer-box">
                <h3>I’m an Employer</h3>

                <p>Seeking Exceptional Hires </p>
                <Link className="emp-btns" onClick={employerToggle}>
                  Start Recruitment Now!
                </Link>
                <Modal
                  isOpen={employerModal} toggle={employerToggle}
                  className="emp-box-outer"
                >
                  <ModalHeader closeButton className="emp-box"></ModalHeader>
                  <h3 className="emp-heading">Register as an Employer </h3>
                  <ModalBody>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Your Name"
                          name="fullname"
                          className="shadow-none"
                          value={users.fullname}
                          onChange={(e) => onChangeValues(e)}
                        />
                        {errorsmeaasage.fullname && (
                          <p style={{ color: "red" }}>
                            {" "}
                            {errorsmeaasage.fullname}{" "}
                          </p>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          required
                          type="email"
                          placeholder="Enter E-Mail"
                          name="email"
                          className="shadow-none"
                          value={users.email}
                          onChange={(e) => onChangeValues(e)}
                        />
                        {errorsmeaasage.email && (
                          <p style={{ color: "red" }}>
                            {" "}
                            {errorsmeaasage.email}{" "}
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          required
                          type="password"
                          placeholder="Password"
                          name="password"
                          className="shadow-none"
                          value={users.password}
                          onChange={(e) => onChangeValues(e)}
                        />
                        {errorsmeaasage.password && (
                          <p style={{ color: "red" }}>
                            {" "}
                            {errorsmeaasage.password}{" "}
                          </p>
                        )}
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check    
                          type="checkbox"
                          onChange={() => setErrorChk(1)}
                          label="Subscribe me to your complimentary outsourcing education emails."
                        />
                      </Form.Group>
                      <div className="text-center my-3">
                        {!pakerror && <p style={{ color: "red" }}>{pakerrormsg} </p>}  </div>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check
                          type="checkbox"
                          onChange={() => setErrorChk(2)}
                          label="I consent to the Terms of Service and Privacy Policy."
                        />
                      </Form.Group>
                      <div className="text-center my-3">
                        {!error && <p style={{ color: "red" }}>{errormsg} </p>}
                        <Button
                          variant="primary"
                          type="submit"
                          className="loginbtns"
                          onClick={UserRegistration}
                        >
                          {spinner && (
                            <span
                              class="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          )}
                          Register
                        </Button>
                      </div>
                      <div className="text-center my-3">{}</div>
                      <div className="text-center">
                        <p className="already-reg"> Already Register</p>
                        <Link className="gologin" to="/login">
                          Login
                        </Link>
                      </div>
                    </Form>
                  </ModalBody>
                </Modal>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="worker-outer-box">
                <h3>I’m a Job Seeker</h3>
                <p>Seeking Best Employment Opportunities</p>

                <Link className="worker-btns" onClick={jobseekerToggle}>
                  Create Account
                </Link>

                <Modal
                  isOpen={jobseekerModal} toggle={jobseekerToggle}
                  className="emp-box-outer"
                >
                  <ModalHeader toggle={jobseekerToggle} closeButton className="emp-box"></ModalHeader>
                  <h3 className="emp-heading">Sign Up for a Job Seeker Account for Free </h3>
                  <ModalBody>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Your Name"
                          name="fullname"
                          className="shadow-none"
                          value={users.fullname}
                          onChange={(e) => onChangeValues(e)}
                        />
                        {errorsmeaasage.fullname && (
                          <p style={{ color: "red" }}>
                            {" "}
                            {errorsmeaasage.fullname}{" "}
                          </p>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          required
                          type="email"
                          placeholder="Enter E-Mail"
                          name="email"
                          className="shadow-none"
                          value={users.email}
                          onChange={(e) => onChangeValues(e)}
                        />
                        {errorsmeaasage.email && (
                          <p style={{ color: "red" }}>
                            {" "}
                            {errorsmeaasage.email}{" "}
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          required
                          type="password"
                          placeholder="Password"
                          name="password"
                          className="shadow-none"
                          value={users.password}
                          onChange={(e) => onChangeValues(e)}
                        />
                        {errorsmeaasage.password && (
                          <p style={{ color: "red" }}>
                            {" "}
                            {errorsmeaasage.password}{" "}
                          </p>
                        )}
                      </Form.Group>
                     
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check    
                          type="checkbox"
                          checked={pakerror}
                          onChange={() => setErrorChk(1)}
                          label="As a Pakistani, I'm aware that WOP is exclusively for Pakistani workers."
                        />
                      </Form.Group>
                      <div className="text-center my-3">
                        {!pakerror && <p style={{ color: "red" }}>{pakerrormsg} </p>}  </div>

                        <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check
                          type="checkbox"
                          checked={error}
                          onChange={() => setErrorChk(2)}
                          label="I agree to the Terms of Service and Privacy Policy"
                        />
                      </Form.Group>

                      <div className="text-center my-3">
                        {!error && <p style={{ color: "red" }}>{errormsg} </p>}  
                        <Link
                          variant="primary"
                          type="submit"
                          className="worker-btns"
                          onClick={JobSeekerRegistration}
                        >
                           {spinner && (
                            <span
                              class="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          )}
                          Register
                        </Link>
                        </div>
                      <div className="text-center my-3">{}</div>
                      <div className="text-center">
                        <p className="already-reg"> Already Register</p>
                        <Link className="gologin" to="/login">
                          Login
                        </Link>
                      </div>
                    </Form>
                  </ModalBody>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>
<section className="cta-banner">
<div className="container ">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="middle-box">
              <p>
                We {"’"} re here to help! If you need any assistance with the
                registration process, please don't hesitate to reach out to us.
                Our team is able to provide guidance and support to ensure a
                smooth and hassle-free experience.
              </p>
              <Link className="worker-btns"  to="/contactus">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
</section>
   <Modal isOpen={isAlert} toggle={alertToggle}>
        <ModalHeader toggle={alertToggle} className="emp-box"></ModalHeader>
        <h3 className="emp-heading">Notification!</h3>
        <ModalBody>
          <p>
            {alertMsg}
          </p>
    
        </ModalBody>
        <ModalFooter>
        <Button  className="worker-btns" toggle={alertToggle} >Ok</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default SignUp;

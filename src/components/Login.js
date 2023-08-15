
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsShieldLock } from "react-icons/bs";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import React,{ useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Validation from "./Validations";
import "../styles/login.css";
import {  BsFillPeopleFill} from "react-icons/bs";
const Login = () => {
  
  const [errorMsg, setErrorMsg] = React.useState(false);
  const [uId, setUId] = React.useState();
  const [errormodal, setErrorModal] = React.useState(false);
  const errortoggle = () => setErrorModal(!errormodal);

  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  const [userToken, setUserToken] = useState()
  const [users, setUser] = useState({
    email: "",
    password: "",
  });
  const [spinner, setSpinner] = useState(false);

  const [errorsmeaasage, setErrormessage] = useState({});
  const onChangeValues = (e) => {
    setErrormessage(Validation(users));
    setUser({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };
  const navigat = useNavigate();

  const ProcedLogin = (e) => {
    e.preventDefault();
    setSpinner(true);
    
    
    if(uId==1)
    {
      //https://api.zalimburgers.com
      axios
      .post(
        "https://api.zalimburgers.com/wop-api/jobseekers/login",
        users
      )
      .then((result) => {
        if(result.data.success===0){
          errortoggle()
          setErrorMsg(result.data.message);
          setSpinner(false);
        }
        else{
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("userId", 1);
          var decoded = jwt_decode(result.data.token);
          setUserToken(decoded.result)
          if(decoded.result.login==0)
          {
            setTimeout(()=>{
              navigat("/jobseekercreateprofile"); 
              window.location.reload()
            },2000)
          }else{
            setTimeout(()=>{
              navigat("/jobseekerdashbaord"); 
              window.location.reload()
            },2000)
          }
          setSpinner(false);
        
        }
     
      })
      .catch((err) => {
        setSpinner(false)
        setErrorMsg(err.response.data.message);
        errortoggle()
       
      });
    }else if(uId==2){
      //https://api.mazglobal.co.uk/wop-api
      axios
      .post(
        "https://api.zalimburgers.com/wop-api/employers/login",
        users
      )
      .then((result) => {
        console.log("result",result);
        if(result.data.success===0){
          setSpinner(false);
          setErrorMsg(result.data.message);
          errortoggle()
        }
        else{
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("userId", 2);
          setTimeout(()=>{
            setSpinner(false);
            navigat("/empdashhboard",{
                state: {
                  id: 2,
                },
              })
              window.location.reload()
          
          },2000)
        
        }
     
      })
      .catch((err) => {
        setSpinner(false);
        setErrorMsg(err.response.data.message);
        errortoggle()
      });

    }else{

    }
   
  };

  const setIds=(id)=>{
    setUId(id)
    toggle()

  }

  useEffect(() => {
    toggle()
  }, []);
  return (
    <section>
<div className="container">
      <div className="row  outer-box-one">
        <div className="col-lg-6 m-auto inner-box-one">
          <div className="outer-box ">
            <div className="inner-box ">
            <h3 className="emp-heading">Access Exclusive Online Job Opportunities - </h3>
            <h3 className="emp-heading">Login to WOP!</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                <InputGroup className="outer-inputss mb-3">
               
                  <div className="serach-icons">
                  <   BsFillPeopleFill className="f-icpons" />
                  </div>
                  <Form.Control
                    type="email"
                    placeholder="Enter E-Mail"
                    name="email"
                    className="shadow-none"
                    onChange={(e) => onChangeValues(e)}
                  />
                 
                </InputGroup>
                 
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>

                  <InputGroup className="outer-inputss  mb-3">
               
                  <div className="serach-icons">
                  <BsShieldLock  className="f-icpons"/>
                
                  </div>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="shadow-none"
                    onChange={(e) => onChangeValues(e)}
                  />
                  
                </InputGroup>
                 
                     
                </Form.Group>
                <div className="text-center my-3">
                  <Button
                    variant="primary"
                    type="submit"
                    className="loginbtn"
                    onClick={ProcedLogin}
                  >
                    {spinner && (
                            <span
                              class="spinner-border spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          )}
                    LogIn
                  </Button>
                </div>
                <div className="text-center">
                  <p> Not Yet Register</p>
                  <a href="/resetpass">Create Free Account Now !</a>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>

     <Modal isOpen={errormodal} toggle={errortoggle}>
        <ModalHeader toggle={errortoggle}>Error</ModalHeader>
        <ModalBody>
          <>!{errorMsg}</>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={errortoggle}>
            OK
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="emp-box"></ModalHeader>
        <h3 className="emp-heading"> Login To WOP!</h3>
        <ModalBody>
          <div style={{display:'flex', justifyContent: "space-evenly",flexDirection:'row'}}>
          <Button onClick={()=>setIds(1)} className="worker-btns" >As JobSeeker</Button>
          <Button onClick={()=>setIds(2)} className="emp-btns" >As Employer</Button>
          </div>
        </ModalBody>
        
      </Modal>
    </div>
    </section>
    
  );
};

export default Login;


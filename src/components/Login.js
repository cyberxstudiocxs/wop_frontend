import Form from "react-bootstrap/Form";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import React,{ useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Validation from "./Validations";
import "../styles/login.css";
const Login = () => {
  
  const [errorMsg, setErrorMsg] = React.useState(false);
  const [uId, setUId] = React.useState();
  const [errormodal, setErrorModal] = React.useState(false);
  const errortoggle = () => setErrorModal(!errormodal);

  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  const [users, setUser] = useState({
    email: "",
    password: "",
  });

  const [errorsmeaasage, setErrormessage] = useState({});
  const onChangeValues = (e) => {
    setErrormessage(Validation(users));
    setUser({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };
  const navigat = useNavigate();

  const ProcedLogin = (e) => {
    e.preventDefault();
    //https://api.mazglobal.co.uk/wop-api
    
    if(uId==1)
    {
      axios
      .post(
        "https://api.mazglobal.co.uk/wop-api/jobseekers/login",
        users
      )
      .then((result) => {
        console.log("result",result);
        if(result.data.success===0){
          errortoggle()
          setErrorMsg(result.data.message);
        }
        else{
          localStorage.setItem("token", result.data.token);
          navigat("/login")
          setTimeout(()=>{
            navigat("/jobseeker");
          },2000)
        
        }
     
      })
      .catch((err) => {
        console.log(err);

        alert(err.response.data.message);
      });
    }else if(uId==2){
      axios
      .post(
        "https://api.mazglobal.co.uk/wop-api/employers/login",
        users
      )
      .then((result) => {
        console.log("result",result);
        if(result.data.success===0){
          errortoggle()
          setErrorMsg(result.data.message);
        }
        else{
          localStorage.setItem("token", result.data.token);
          navigat("/login")
          setTimeout(()=>{
            navigat("/empdashhboard");
          },2000)
        
        }
     
      })
      .catch((err) => {
        console.log(err);

        alert(err.response.data.message);
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
                  <Form.Control
                    type="email"
                    placeholder="Enter E-Mail"
                    name="email"
                    className="shadow-none"
                    onChange={(e) => onChangeValues(e)}
                  />
                    {errorsmeaasage.email && (
                          <p style={{ color: "red" }}>
                            {" "}
                            {errorsmeaasage.email}{" "}
                          </p>
                        )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="shadow-none"
                    onChange={(e) => onChangeValues(e)}
                  />
                     {errorsmeaasage.password && (
                          <p style={{ color: "red" }}>
                            {" "}
                            {errorsmeaasage.password}{" "}
                          </p>
                        )}
                </Form.Group>
                <div className="text-center my-3">
                  <Button
                    variant="primary"
                    type="submit"
                    className="loginbtn"
                    onClick={ProcedLogin}
                  >
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
        {/* <ModalFooter> */}
          {/* <Button color="primary" onClick={toggle}>
            OK
          </Button> */}
        {/* </ModalFooter> */}
      </Modal>
    </div>
  );
};

export default Login;

import Form from "react-bootstrap/Form";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import React,{ useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
const Login = () => {
  
  const [errorMsg, setErrorMsg] = React.useState(false);
  const [errormodal, setErrorModal] = React.useState(false);
  const errortoggle = () => setErrorModal(!errormodal);

  const [users, setUser] = useState({
    email: "",
    password: "",
  });
  const onChangeValues = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };
  const navigat = useNavigate();

  const ProcedLogin = (e) => {
    e.preventDefault();
    //https://api.mazglobal.co.uk/wop-api
    
    axios
      .post(
        "https://api.mazglobal.co.uk/wop-api/employers/login",
        users
      )
      .then((result) => {
        console.log("result",result);
        if(result.data.success==0){
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
  };

  useEffect(() => {}, []);
  return (
    <div className="container">
      <div className="row  outer-box-one">
        <div className="col-lg-6 m-auto inner-box-one">
          <div className="outer-box ">
            <div className="inner-box ">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter E-Mail"
                    name="email"
                    onChange={(e) => onChangeValues(e)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => onChangeValues(e)}
                  />
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
                  <a href="/resetpass">Create Free Account</a>
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
    </div>
  );
};

export default Login;

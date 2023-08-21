import Form from "react-bootstrap/Form";
import axios from 'axios'
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearchPlus } from "react-icons/fa";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { BiSupport } from "react-icons/bi";
import { AiFillProfile } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const ChangePassword = () => {

  const [users, setUser] = useState();
  const [msg, setMsg] = useState();
  const [changedCred, setChangedCred] = useState();
  const [msgmodal, setMsgModal] = React.useState(false);
  const msgtoggle = () => setMsgModal(!msgmodal);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      var decoded = jwt_decode(localStorage.getItem('token'));
      console.log(decoded.result)
      setUser(decoded.result)
      setChangedCred({
        ...changedCred,
        ['email']:decoded.result.email,
        ['id']:decoded.result.id
      })
    }
  },[])

  const onChangeValues = (e) => {
    setChangedCred({ ...changedCred, [e.target.name]: e.target.value });
    
  };

  const proceedLogin = (e) => {
    e.preventDefault()
    if(!changedCred.newpassword || !changedCred.confirmpassword || !changedCred.password || !changedCred.email){
      setMsg('Please Add All the Fields')
      msgtoggle()
      e.preventDefault()
    }
    if(changedCred.newpassword!==changedCred.confirmpassword){
      setMsg('New Password and Confirm Password did not match')
      msgtoggle()
      e.preventDefault()
    }
    else{
      
      const config = {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      };
     
      //https://api.zalimburgers.com
      axios.post(`https://api.zalimburgers.com/wop-api/employers/updateLoginInfo`,changedCred,config)
      .then(res=>{
        console.log('res',res.data)
          setMsg(res.data.message)
          msgtoggle()
      }).catch(err=>{
          setMsg(err.response.data.message)
          msgtoggle()
          console.log(err)
      })
    
    }
  };
  const move=()=>{
    window.location.reload()
  }

  return (
    <div>
      <section>
        <div className="space2"></div>
        <div className="container">
          <div className="row  outer-box-one">
            <div className="col-lg-8 m-auto inner-box-one">
              
                <div className="inner-box-update ">
                  <h3 className="emp-heading">Login Information </h3>

                  <Form onSubmit={proceedLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <InputGroup className="outer-inputss mb-3">
                        <Form.Control
                          type="email"
                          placeholder="Enter E-Mail"
                          name="email"
                          required
                          value={changedCred?changedCred.email:''}
                          className="shadow-none"
                          onChange={(e) => onChangeValues(e)}
                        />
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label> Old Password</Form.Label>

                      <InputGroup className="outer-inputss  mb-3">
                        <Form.Control
                          type="password"
                          name="password"
                          required
                          className="shadow-none"
                          onChange={(e) => onChangeValues(e)}
                        />
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label> New Password</Form.Label>

                      <InputGroup className="outer-inputss  mb-3">
                        <Form.Control
                          type="password"
                          name="newpassword"
                          required
                          className="shadow-none"
                          onChange={(e) => onChangeValues(e)}
                        />
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label> Confirm Password</Form.Label>

                      <InputGroup className="outer-inputss  mb-3">
                        <Form.Control
                          type="password"
                          name="confirmpassword"
                          required
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
                         //onClick={(e)=>proceedLogin(e)}
                      >
                        Save Log In Information
                      </Button>
                    </div>
                  </Form>
                
              </div>
            </div>
          </div>
        </div>

        <div className="space2"></div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
                <AiOutlineCopy className="acoount-icons" />

                <h3> Quick search for talented resumes</h3>
                <Link className="account-setting-btns" to="/postjob">Post A Job</Link>
              </div>
            </div>

            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
              <FaSearchPlus className="acoount-icons" />
                <h3> Find the right worker through skill you need.</h3>
                <Link className="account-setting-btns"   to="/searchskill">Advanced Search</Link>
              </div>
            </div>

            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
              <AiFillProfile  className="acoount-icons" />
               
                <h3> Read case studies from our valued customers</h3>
                <Link className="account-setting-btns">Browse Profile</Link>
              </div>
            </div>

            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
                <BiSupport className="acoount-icons" />
                <h3> A quick Video on how to get started with onlinejobs.pk</h3>
                <Link className="account-setting-btns" to="/contactus">
                  Contact For Support{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="space2"></div>
      </section>
     
      <Modal isOpen={msgmodal} toggle={msgtoggle}>
        <ModalHeader toggle={msgtoggle}>Alert</ModalHeader>
        <ModalBody>
          <>!{msg}</>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={move}>
            OK
          </Button>
        </ModalFooter>
      </Modal>

    </div>
  );
};

export default ChangePassword;
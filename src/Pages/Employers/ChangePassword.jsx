import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearchPlus } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
const ChangePassword = () => {
  const [users, setUser] = useState({
    email: "",
    password: "",
  });
  const onChangeValues = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };

  const ProcedLogin = (e) => {};
  return (
    <div>
      <section>
        <div className="space2"></div>
        <div className="container">
          <div className="row  outer-box-one">
            <div className="col-lg-10 m-auto inner-box-one">
              <div className="outer-box ">
                <div className="inner-box ">
                  <h3 className="emp-heading">Login Information </h3>

                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <InputGroup className="outer-inputss mb-3">
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
                      <Form.Label> Old Password</Form.Label>

                      <InputGroup className="outer-inputss  mb-3">
                        <Form.Control
                          type="password"
                          name="password"
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
                        Save LogIn Information
                      </Button>
                    </div>
                  </Form>
                </div>
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
                <Link className="account-setting-btns">Post A Job</Link>
              </div>
            </div>

            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
                <AiOutlineSetting className="acoount-icons" />
                <h3> Find the right worker through skill you need.</h3>
                <Link className="account-setting-btns">Advanced Search</Link>
              </div>
            </div>

            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
                <FaSearchPlus className="acoount-icons" />
                <h3> Read case studies from our valued customers</h3>
                <Link className="account-setting-btns">Browse Profile</Link>
              </div>
            </div>

            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
                <BiSupport className="acoount-icons" />
                <h3> A quick Video on how to get started with onlinejobs.pk</h3>
                <Link className="account-setting-btns">
                  Contact For Support{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="space2"></div>
      </section>
    </div>
  );
};

export default ChangePassword;

import "../../styles/manageprofile.css";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import {  Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import { FaSearchPlus } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiFillProfile } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";

const EmpManageProfile = () => {
  const [empprfile, setState] = useState({
    id: null,
    business_name: "",
    email: "",
    fullname: "",
    address: "",
    city: "",
    country: "",
    phone: "",
    profile_photo: "",
    website: "",
  });
  
  const [alertMsg, setAlertMsg] = useState('');
  const [isAlert, setIsAlert] = useState(false);
  const alertToggle = () => setIsAlert(!isAlert);
  const [updateEmp, updatEemps] = useState();
  const [user, setUser] = useState();
  const [config, setConfig] = useState();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      var decoded = jwt_decode(localStorage.getItem("token"));
      setUser(decoded.result);
      const confii = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      setConfig(confii);
      console.log("local", localStorage.getItem("token"));
      console.log("decoded", decoded.result);
      axios
        .get(
          `https://api.zalimburgers.com/wop-api/employers/getUserProfile/${decoded.result.id}`,
          confii
        )
        .then((result) => {
          console.log(result.data, config);
          setState(result.data.data);
        })
        .catch((err) => console.log(err));
    } else {
    }
  }, []);
  const handleInputChange = (e) => {
    setState({ ...empprfile, [e.target.name]: e.target.value });
    updatEemps({ ...updateEmp, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://api.zalimburgers.com/wop-api/employers/updateProfile/${user.id}`,
        updateEmp,
        config
      )
      .then((result) => {
        setAlertMsg(result.data.message)
        
      })
      .catch((err) => {
        setAlertMsg(err.response.data.message);
        console.log(err);
      });
  };

  const refreshPage=()=>{
    window.location.reload()
  }

  return (
    <div>
      {user ? (
        <section className="main-outer-profile-">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 m-auto">
              <div class="middle-jobpostt">
                <h3> Manage Your Business Profile</h3>

                <p>
                  As an employer on Work Online Pakistan (WOP), maintaining an
                  updated and professional business profile is essential for
                  attracting top talent and showcasing your brand. With Work
                  Online Pakistan (WOP), updating your business profile is quick
                  and easy. Let’s get started!
                </p>
                </div>
              </div>
            </div>
      
            <div className="row">
              <div className="col-lg-8 m-auto">
                <div className="profile-box">
                  <h3> Profile Information</h3>
                  <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridBusinessName">
                        <Form.Label>Business Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={
                            empprfile.business_name
                              ? empprfile.business_name
                              : ""
                          }
                          name="business_name"
                          onChange={handleInputChange}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridCname">
                        <Form.Label>Contact Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={empprfile.fullname ? empprfile.fullname : ""}
                          name="fullname"
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        placeholder="1234 Main St"
                        value={empprfile.address ? empprfile.address : ""}
                        name="address"
                        onChange={handleInputChange}
                      />
                    </Form.Group>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          value={empprfile.city ? empprfile.city : ""}
                          name="city"
                          onChange={handleInputChange}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Select
                          aria-readonly="true"
                          disabled="true"
                          defaultValue="Pakistan"
                        >
                          <option>PAKISTAN</option>
                        </Form.Select>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          value={empprfile.phone ? empprfile.phone : ""}
                          name="phone"
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridWebsite">
                        <Form.Label>Website</Form.Label>
                        <Form.Control
                          type="text"
                          value={empprfile.website ? empprfile.website : ""}
                          name="website"
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Row>

                    <Button className="loginbtn" type="submit">
                      Save Profile Infomation
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        "Loading"
      )}

      <div className="space2"></div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-3 quick-box">
            <div className="quick-box1">
              <AiOutlineCopy className="acoount-icons" />

              <h3>
                {" "}
                Create and publish job openings to attract skilled
                professionals.
              </h3>
              <Link className="account-setting-btns" to="/postjob">
                Post A Job
              </Link>
            </div>
          </div>

          <div className="col-lg-3 quick-box">
            <div className="quick-box1">
              <FaSearchPlus className="acoount-icons" />
              <h3>
                {" "}
                Find the perfect fit for your project by refining your search
                criteria.
              </h3>
              <Link className="account-setting-btns"   to="/searchskill">Advanced Search</Link>
            </div>
          </div>

          <div className="col-lg-3 quick-box">
            <div className="quick-box1">
              <AiFillProfile className="acoount-icons" />
              <h3>
                {" "}
                Explore a diverse pool of talented individuals to best support
                your project goals.
              </h3>
              <Link className="account-setting-btns">Browse Profile</Link>
            </div>
          </div>

          <div className="col-lg-3 quick-box">
            <div className="quick-box1">
              <BiSupport className="acoount-icons" />
              <h3> Get quick and reliable assistance from our support team.</h3>
              <Link className="account-setting-btns"  to="/contactus">Contact For Support </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="space2"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="middle-box  updateaccountsetting">
              <h5>Ready to Discover Top Talent?</h5>
              <p>
                Post your first job on WOP now to connect with skilled
                professionals and propel your business forward with Work Online
                Pakistan!
              </p>

              <Link className="account-setting-btns" to="/contactus">
                {" "}
                Contact Us!{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="space2"></div>

      <Modal isOpen={isAlert} toggle={alertToggle}>
        <ModalHeader toggle={alertToggle} className="emp-box"></ModalHeader>
        <h3 className="emp-heading">Notification!</h3>
        <ModalBody>
          <p>
            {alertMsg}
          </p>
    
        </ModalBody>
        <ModalFooter>
        <Button  className="worker-btns" onClick={refreshPage} >Ok</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EmpManageProfile;

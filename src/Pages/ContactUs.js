import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { FaRocketchat } from "react-icons/fa";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "../styles/contactus.css";
import axios from 'axios'

const ContactUs = () => {
  const [state, setState] = useState({
    fullname:"",
    email:"",
    phone:"",
    subject:"",
    type:"",
    description:''
  });
  const [msg, setMsg] = useState('');
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
   setState({
    ...state,
    [e.target.name]:e.target.value
   })
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post(`https://api.zalimburgers.com/wop-api/admin/contactUs`, state)
      .then((result) => {
           setMsg(result.data.message)
           toggle()
      })
      .catch((err) => {
        console.log(err)
        setMsg(err.response.data.message)
        toggle()
     });
    }
 const reload=()=>{
  console.log('kkkkkkkk')
  window.location.reload()
 }
  return (
    <div>
      <section className="contact-us-main">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <div className="contactus">
                <h2> Contact Us </h2>
                <p>
                  At WOP, our customer support team is readily available to
                  provide you with the best possible assistance.Please contact
                  us. We are here to assist you! Whether you are looking for a
                  job or a company with job openings, we are devoted to provide
                  you with top-notch customer service and support. You can reach
                  out to us by phone, email, or by submitting the contact form
                  below, and we'll get back to you at our earliest.
                </p>
              </div>
            </div>
          </div>
          <div className="space-line"></div>

          <div className="row">
            <div className="col-lg-4">
              <div className="infoo-contactus">
                <div className="icons">
                  <FaEnvelope className="icono" />
                </div>
                <div className="icons-info">
                  <h5> Email</h5>
                  <a href="hello@workonlinepk.com "> hello@workonlinepk.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="infoo-contactus">
                <div className="icons">
                  <FaRocketchat className="icono" />
                </div>
                <div className="icons-info">
                  <h5> Our Location</h5>
                  <p>
                    🇵🇰 Daftarkhwan Vantage, Phase 7 Bahria Town, Rawalpindi,
                    Pakistan
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="infoo-contactus">
                <div className="icons">
                  <FaPhoneAlt className="icono" />
                </div>
                <div className="icons-info">
                  <h5> Contact </h5>
                  <p> + 92 236 068 5849</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-line"></div>
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="forms-box">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      required
                      className="shadow-none"
                      type="text"
                      placeholder="Enter Your Name"
                      name="fullname"
                      value={state.fullname}
                      onChange={(e)=>handleChange(e)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Enter E-Mail"
                      name="email"
                      className="shadow-none"
                      value={state.email}
                      onChange={(e)=>handleChange(e)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      required
                      className="shadow-none"
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      value={state.phone}
                      onChange={(e)=>handleChange(e)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      className="shadow-none"
                      required
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={state.subject}
                      onChange={(e)=>handleChange(e)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmpTypess">
                    <Form.Label>Type Of Employment</Form.Label>
                    <Form.Select
                      aria-readonly="true"
                      defaultValue="Pakistan"
                      className="shadow-none"
                      name="type"
                      value={state.type}
                      onChange={(e)=>handleChange(e)}
                      required
                    >
                      <option value="jobseeker">Job Seeker</option>
                      <option value="employer">Employer</option>
                      <option value="visitor">Website Visitor</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Job Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      required
                      placeholder="Describe the job to be done "
                      className="shadow-none"
                      name="description"
                      value={state.description}
                      onChange={(e)=>handleChange(e)}
                    />
                  </Form.Group>

                  <div className="text-center my-3">
                    <Button type="submit" className="loginbtn">
                      Send Message
                    </Button>
                  </div>
                  <div className="text-center my-3">{}</div>
                </Form>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="loc-box">
                <h6> Get In Touch</h6>
                <div className="s-ions">
                  <ul>
                    <li>
                      {" "}
                      <a
                        href="https://www.instagram.com/workonline.pakistan/"
                        target="_blank"
                        attribute
                      >
                        {" "}
                        <i class="fa fa-instagram" aria-hidden="true"></i>{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        href="https://www.facebook.com/people/Work-Online-Pakistan/100090713021635/"
                        target="_blank"
                        attribute
                      >
                        {" "}
                        <i class="fa fa-facebook" aria-hidden="true"></i>{" "}
                      </a>
                    </li>

                    <li>
                      {" "}
                      <a
                        href="https://www.youtube.com/@WorkOnlinePakistan"
                        target="_blank"
                        attribute
                      >
                        {" "}
                        <i
                          class="fa fa-youtube-play"
                          aria-hidden="true"
                        ></i>{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        href="https://www.linkedin.com/company/work-online-pakistan/about/"
                        target="_blank"
                        attribute
                      >
                        {" "}
                        <i
                          class="fa fa-linkedin-square"
                          aria-hidden="true"
                        ></i>{" "}
                      </a>
                    </li>
                  </ul>

                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="emp-box"></ModalHeader>
        <h3 className="emp-heading">Notification!</h3>
        <ModalBody>
          <p>
            {msg}
          </p>
        </ModalBody>
        <ModalFooter>
        <Button  className="worker-btns" onClick={reload} >Ok</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ContactUs;

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaRocketchat } from "react-icons/fa";
import { FaEnvelope ,FaPhoneAlt } from "react-icons/fa";
import "../styles/contactus.css";

const ContactUs = () => {
  return (
    <div>
      <section className="contact-us-main">
      <div className="container ">
        <div className="row">
          <div className="col-lg-12">
            <div className="contactus">
              <h2> Contact Us</h2>
               <p>    At WOP, our customer support team is readily available to
                provide you with the best possible assistance.Please contact us.
                We are here to assist you! Whether you are looking for a job or
                a company with job openings, we are devoted to provide you with
                top-notch customer service and support. You can reach out to us
                by phone, email, or by submitting the contact form below, and
                we'll get back to you at our earliest.</p>
            </div>
          </div>
        </div>
        <div className="space-line"></div>

        <div className="row">
        <div className="col-lg-4">
            
            <div className="infoo-contactus">
              <div className="icons">
                <FaEnvelope    className="icono" />
              </div>
              <div className="icons-info">
                <h5> Email</h5>
                <a  href="hello@workonlinepk.com "> hello@workonlinepk.com</a>
              </div>
            </div>
            </div>
          <div className="col-lg-4">
          <div className="infoo-contactus">
              <div className="icons">
                <FaRocketchat  className="icono" />
              </div>
              <div className="icons-info">
                <h5> Our Location</h5>
                <p>
                🇵🇰 Daftarkhwan Vantage, Phase 7 Bahria Town, Rawalpindi, Pakistan
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
          <div className="infoo-contactus">
              <div className="icons">
                <FaPhoneAlt   className="icono" />
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
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    required
                    className="shadow-none"
                    type="text"
                    placeholder="Enter Your Name"
                    name="fullname"
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
                  />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                  required
                  className="shadow-none"
                   type="tel" 
                    name="phone"
                    placeholder="Phone Number"
                   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                   
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                       className="shadow-none"
                    required
                    type="text"
                    placeholder="Subject"
                    name="Subject"
                  />
                </Form.Group>

                <Form.Group     className="mb-3"  controlId="formEmpTypess">
                      <Form.Label>Type Of Employment</Form.Label>
                      <Form.Select
                        aria-readonly="true"
                        defaultValue="Pakistan"
                        className="shadow-none"
                      >
                        <option>Job Seeker</option>
                        <option>Employer</option>
                        <option>Website Visitor</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Job Description</Form.Label>
                    <Form.Control as="textarea" rows={3}     placeholder="Describe the job to be done "className="shadow-none" />
                  </Form.Group>

                <div className="text-center my-3">
                  <Button variant="primary" type="submit" className="loginbtn">
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
               
                <li> <a href="https://www.instagram.com/workonline.pakistan/" target="_blank" attribute>  <i class="fa fa-instagram" aria-hidden="true"></i>  </a></li>
                <li> <a href="https://www.facebook.com/people/Work-Online-Pakistan/100090713021635/" target="_blank" attribute>              <i class="fa fa-facebook" aria-hidden="true"></i> </a></li>

                <li> <a href="https://www.youtube.com/@WorkOnlinePakistan" target="_blank" attribute>  <i class="fa fa-youtube-play" aria-hidden="true"></i> </a></li>
                <li> <a href="https://www.linkedin.com/company/work-online-pakistan/about/" target="_blank" attribute>            <i class="fa fa-linkedin-square" aria-hidden="true"></i> </a></li>
                </ul>

            
            
        
            <i class="fa fa-whatsapp" aria-hidden="true"></i>

            </div>
            </div>
          </div>
          </div>
      </div>
      </section>
    
    </div>
  );
};

export default ContactUs;

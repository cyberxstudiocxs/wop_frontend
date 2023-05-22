import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaRocketchat } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import "../styles/contactus.css";

const ContactUs = () => {
  return (
    <div>
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="contactus text-center">
              <h2> Contact Us</h2>
              <h3> Need Help? Have a question?</h3>
            </div>
          </div>
        </div>

        <div className="row p-5">
          <div className="col-lg-8">
            <div className="forms-box">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    required
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
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Subject"
                    name="Subject"
                  />
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
          <div className="col-lg-4">
            <div className="infoo-contactus">
              <div className="icons">
                <FaRocketchat />
              </div>
              <div className="icons-info">
                <h5> Headquarters :</h5>
                <p>
                  {" "}
                  DaftarKhwan Vantage , Phase 7 Baheria Town , Rawalpindi ,
                  Pakistan
                </p>
              </div>
            </div>

            <div className="infoo-contactus">
              <div className="icons">
                <FaEnvelope />
              </div>
              <div className="icons-info">
                <h5> Email :</h5>
                <p> hello@workonlinepk.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

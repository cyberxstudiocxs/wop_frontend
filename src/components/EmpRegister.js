import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "../styles/register.css";
import Validation from "./Validations";

const EmpRegister = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [users, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [errorsmeaasage, setErrormessage] = useState({});

  const [checks, setChecks] = useState(false);
  const [error, setError] = useState("");

  const onChangeValues = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };
  // const navigat = useNavigate();

  const UserRegistration = (e) => {
    e.preventDefault();
    setErrormessage(Validation(users));
    // if (false ){

    // }
    if (checks === false) {
      setError(" Please Select The Check box");
    } else {
      //https://975c-2a07-23c0-8-b000-00-bd1b.ngrok-free.app
      console.log(users);
      axios
        .post(
          "http://localhost:8080/wop-api/employers",
          users,
          {}
        )
        .then((result) => {
          console.log(result.data);
          alert(result.data.message);
          //   navigat("/login")
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response.data.message);
          alert(err.response.data.message);
        });
    }
  };

  return (
    <div>
      <section className="main-register-box">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-6">
              <div className="emp-outer-box">
                <h3>I’m an employer</h3>

                <p>looking for amazing hires</p>
                <Link className="emp-btns" onClick={handleShow}>
                  Start Hiring today
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="worker-outer-box">
                <h3>I’m a Job Seeker</h3>
                <p>Seeking Best Employment Opportunities</p>

                <Button className="worker-btns" onClick={handleShow}>
                  Create Account
                </Button>

                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                  className="emp-box-outer"
                >
                  <Modal.Header closeButton className="emp-box"></Modal.Header>
                  <h3 className="emp-heading">Create a Employer Account </h3>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Your Name"
                          name="fullname"
                          value={users
                          .fullname
                        }
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
                          value={users
                            .email
                          }
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
                          value={users
                            .password
                          }
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
                          onChange={() => setChecks(true)}
                          label="I agree to the Terms of Service and Privacy Policy"
                        />
                      </Form.Group>
                      <div className="text-center my-3">
                        {error && <p style={{ color: "red" }}>{error} </p>}
                        <Button
                          variant="primary"
                          type="submit"
                          className="loginbtn"
                          onClick={UserRegistration}
                        >
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
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container p-5">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="middle-box">
              <p>
                {" "}
                We’ re here to help! If you need any assistance with the
                registration process, please don't hesitate to reach out to us.
                Our team is able to provide guidance and support to ensure a
                smooth and hassle-free experience.
              </p>
              <Link className="worker-btns">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpRegister;

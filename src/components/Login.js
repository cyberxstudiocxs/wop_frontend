import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
const Login = () => {
 
    const [users, setUser] = useState({
        fullname: "",
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
    
    axios
      .post(
        "https://975c-2a07-23c0-8-b000-00-bd1b.ngrok-free.app/wop-api/employers/login",
        users,
      )
      .then((result) => {
        console.log(result.data);
        alert(result.data.message);
        localStorage.setItem("token", result.data.token);
        navigat("/empdashhboard");
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
    </div>
  );
};

export default Login;

import Container from "react-bootstrap/Container";
import Avatar from 'react-avatar';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import logo from "../assets/images/main-logo.png";
import "../styles/menu.css";

const Menu = () => {
  
  const navigat = useNavigate();
  const location = useLocation();
  const [login, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(0);
  const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.getItem("token") || location.state) {
      
      setLoggedIn(true);
    
      var decoded = jwt_decode(localStorage.getItem('token'));
       setUser(decoded.result)
 
      setUserId(localStorage.getItem("userId"))
    } else {
      setLoggedIn(false);
    }
  }, []);

  const removeToken = () => {
    setUserId(0)
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setUser('')
    setLoggedIn(false)
    navigat("/login");
    
  };

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">    
            <img
              src={logo}
              className="logo"
              alt="wop-logo"
              width={"100%"}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto my-2 my-lg-0" navbarScroll>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                How It Works
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item menuitem" href="#">
                Employer Work
                </Link>
                <Link class="dropdown-item menuitem" to="/jobseekerworks">
                 Job Seeker 
                 </Link>
                
              </div>
            </li>
            {userId==1 &&
            <Link className="postjob-btn" to="/jobs">
              JobBoard{" "}
            </Link>
            }
            <Link className="menuitem" to="/contactus">
              Contact Us
            </Link>
            {userId!=1 &&
            <Link className="postjob-btn" to="/postjob">
              Post A job
            </Link>
             }
            {!userId &&
            <Link className="findjob-btn" to="/jobseekersearchjob">
              Find jobs
            </Link>
            }
          </Nav>
          {login ? (
            <NavDropdown
              style={{ marginRight: "120px" }}
              id="nav-dropdown-dark-example"
               title={ 
                  <Avatar  
                   alt="AAAAA" 
                   size="50" 
                   name={user?user.full_name:'WOP'}
                   round={true}
                  />
              }  
         
              menuVariant="light"
            >
            
            {userId==1 &&
              <>
              <Link to="/jobseekerprofile">
                <NavDropdown.Item href="/jobseekerprofile">
                  Profile
                </NavDropdown.Item>
              </Link>
              <Link to="/jobseekerdashbaord">
                <NavDropdown.Item href="/jobseekerdashbaord">
                  JobSeeker
                </NavDropdown.Item>
              </Link>

              
               <Link to="/updateprofile">
                <NavDropdown.Item href="/updateprofile">
                  Update Profile
                </NavDropdown.Item>
              </Link> 
              </>
             }



              {userId==2 &&
              <>
              <Link to="/accountsetting">
                <NavDropdown.Item href="/userProfile/profile">
                  Account Setting
                </NavDropdown.Item>
              </Link>
              <Link to="/joblisting">
                <NavDropdown.Item href="/blisting">
                  Job Listing
                </NavDropdown.Item>
              </Link>
              <Link to="/manageprofile">
                <NavDropdown.Item href="/manageprofile">
                  Update Profile
                </NavDropdown.Item>
              </Link>
              </>
             }

              <NavDropdown.Divider />
              <NavDropdown.Item>
                <p onClick={() => removeToken()}>Logout</p>
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <>
              <Link to="/login" className="login-btn mx-3">
                Login{" "}
              </Link>
              <Link to="/signup" className="signup-btn">
                SignUp{" "}
              </Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
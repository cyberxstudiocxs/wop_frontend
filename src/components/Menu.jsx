
import { Avatar } from "@material-ui/core";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/images/main-logo.png'
import "../styles/menu.css";





const Menu = () => {
  const [login, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {

      setLoggedIn(true)
     }
     else{
      setLoggedIn(false)
     }

}, [] )
  return (



    <Navbar  expand="lg">
      <Container fluid>
        
        <Navbar.Brand >
        <Link to="/" >  <img src={logo} className="logo" alt="wop-logo" width={"100%"} /> </Link>
           </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"

            navbarScroll
          >
          
            <Link className="menuitem" to="/result">How Its Work</Link>

            <Link className="menuitem" to="/contactus">Contact Us</Link>
         
            <Link className="menuitem" to="/manageprofile">Manage Profile</Link>

            <Link className="postjob-btn"  >Post A job</Link>
            <Link className="findjob-btn"   to="/searchjob" >Find jobs</Link>
            


          </Nav>
           {login ? <Avatar
                  alt="ABC"
                  src="/static/images/avatar/1.jpg"
                />:<>
           <Link to="/login" className="login-btn mx-3">Login </Link>
           <Link to="/signup" className="signup-btn" >SignUp </Link>
           </>
 }



        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Menu
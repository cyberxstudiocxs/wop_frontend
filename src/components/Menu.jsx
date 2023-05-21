
import { Avatar } from "@material-ui/core";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/main-logo.png'
import "../styles/menu.css";


const Menu = () => {

  const navigat = useNavigate();
  const [login, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {

      setLoggedIn(true)
     }
     else{
      setLoggedIn(false)
     }

}, [] )

const removeToken=()=>{
  localStorage.removeItem('token')
  setTimeout(()=>{
    navigat("/")
  },2000)
  
}
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
         
         

            <Link className="postjob-btn"  >Post A job</Link>
            <Link className="findjob-btn"   to="/searchjob" >Find jobs</Link>
            


          </Nav>
           {login ? 
           <NavDropdown
          style={{marginRight:'120px'}}
           id="nav-dropdown-dark-example"
           title={
             <Avatar
               alt="AAAAA"
               src="/static/images/avatar/1.jpg"
             />
           }
           menuVariant="light"
         >
           <Link to="/accountsetting">
             <NavDropdown.Item href="/userProfile/profile"  >
               Account Setting
             </NavDropdown.Item>
           </Link>

           <NavDropdown.Divider />
           <NavDropdown.Item  >
             <p onClick={() => removeToken()}>Logout</p>
           </NavDropdown.Item>
         </NavDropdown>
         :
            <>
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
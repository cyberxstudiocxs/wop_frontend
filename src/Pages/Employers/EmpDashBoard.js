
import { useState,useEffect } from "react";
import {FaSearchPlus} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiOutlineCopy ,AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";



const EmpDashoBard = () => {
  
  const [name,setName]=useState()
  useEffect(() => {
  var decoded = jwt_decode(localStorage.getItem('token'));
  
   setName(decoded.result.full_name)
  },[])
  // const [users, setUsers] = useState([]);
  return (
    <div>

      <section className="emp-login-dashboard">
       
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="emp-namess">
            <h3> Hello , {name}</h3>
            </div>
        

           
          </div>
        </div>
      </div>
 

      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="middle-box">
              <h5>Ready to Attract Top Talent for Your Project with WOP?</h5>
              <p>
              
                Check out our comprehensive guide to WOP job postings and take
                the first step towards finding the perfect candidate for your
                job opening!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space2"></div>
      <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-3 quick-box">
              <div className="quick-box1">

              <   AiOutlineCopy   className="acoount-icons"  />
     
                <h3> Quick search for talented resumes</h3>
                <Link className="account-setting-btns">Post A Job</Link>
              </div>
            </div>

            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
              <AiOutlineSetting  className="acoount-icons" />
                <h3> Find the right worker through skill you need.</h3>
                <Link className="account-setting-btns">Advanced Search</Link>
              </div>
            </div>

            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
                <FaSearchPlus  className="acoount-icons" />
                <h3> Read case studies from our valued customers</h3>
                <Link className="account-setting-btns">Browse Profile</Link>
              </div>
            </div>

            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
              < BiSupport className="acoount-icons" />
                <h3> A quick Video on how to get started with onlinejobs.pk</h3>
                <Link className="account-setting-btns">Contact For Support </Link>
              </div>
            </div>
          </div>
        </div>
      
        <div className="space2"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="middle-box  em-dashboard-cta-two">
              <h5>Start Hiring Today!</h5>
              <p>
              Get started on your hiring journey by creating your job post now. Your next star employee is just a click away!

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space2"></div>
      </section>
    </div>
  );
};

export default EmpDashoBard;

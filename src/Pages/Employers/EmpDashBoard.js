import { useState, useEffect } from "react";
import { FaSearchPlus } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiOutlineCopy } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const EmpDashoBard = () => {
  const [name, setName] = useState();
  useEffect(() => {
 
    var decoded = jwt_decode(localStorage.getItem("token"));

    setName(decoded.result.full_name);
  }, []);
  // const [users, setUsers] = useState([]);
  return (
    <div>
      <section className="emp-login-dashboard">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="emp-namess">
                <h3> WellCome, {name}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="middle-box  emp-dashboard">
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
                <AiOutlineCopy className="acoount-icons" />

                <h3>
              
                  Create and publish job openings to attract skilled
                  professionals.
                </h3>
                <Link className="account-setting-btns"  to="/postjob">Post A Job</Link>
              </div>
            </div>

            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
              <FaSearchPlus className="acoount-icons" />
                <h3>Find the perfect fit for your project by refining your search criteria.</h3>
                <Link className="account-setting-btns">Advanced Search</Link>
              </div>
            </div>

            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
              <AiFillProfile  className="acoount-icons" />
                <h3>
               
                  Explore a diverse pool of talented individuals to best support
                  your project goals.
                </h3>
                <Link className="account-setting-btns">Browse Profile</Link>
              </div>
            </div>

            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
                <BiSupport className="acoount-icons" />
                <h3>
                  Get quick and reliable assistance from our support team.
                </h3>
                <Link className="account-setting-btns"  to="/contactus">
                  Contact For Support
                </Link>
              </div>
            </div>
          </div>
        </div>
     
        <div className="container">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="pricng-box">
              <h3>A Glimpse of Our Pricing Plans</h3>
              </div>
         
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 pricing-box-plan ">
              <div className="plan-box">
                <h5>Basic </h5>
                <ul>
                  <li>
                    <a> 3 Job Postings per Month</a>
                  </li>
                  <li>
                    <a> Up to 15 Resumes Per Month</a>
                  </li>
                  <li>
                    <a> Upgrade Needed to Hire a Professional</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 pricing-box-plan">
              <div className="plan-box">
                <h5>Pro</h5>
                <ul>
                  <li>
                    <a> Instant Job Approval</a>
                  </li>
                  <li>
                    <a>Contact and Communicate with Job Seekers Directly</a>
                  </li>
                  <li>
                    <a> Access and Read Reviews</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 pricing-box-plan">
              <div className="plan-box">
                <h5>Premium</h5>
                <ul>
                  <li>
                    <a> Thorough Background Checks</a>
                  </li>
                  <li>
                    <a> Exclusive Discounts on Recruitment Services</a>
                  </li>
                  <li>
                    <a>Added Support and Guidance for Job Seekers’ Coaching</a>
                  </li>
                </ul>
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
                  Get started on your hiring journey by creating your job post
                  now. Your next star employee is just a click away!
                </p>

                <Link className="account-setting-btns" to="/postjob">
                  Create a Free Job Post
                </Link>
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

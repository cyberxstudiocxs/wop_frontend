import { Link } from "react-router-dom";
import {FaSearchPlus} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiOutlineCopy ,AiOutlineSetting } from "react-icons/ai";

import "../../styles/accountsetting.css";

const EmpAccountSetting = () => {
  return (
    <div>
      <section className="Accontsettig-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="Talent-heading"> Account Setting </h3>
            </div>
          </div>
 
          <div className="space2"></div>
          <div className="row ">
            <div className="col-lg-12">
              <div className="outer-accout">
                <h6> Account Details & Billing</h6>

                <div className="account-outer-box">
                  <div className="parallel-box">
                    <h5> Profile Information </h5>
                    <Link className="account-setting-btns"> Change Email/Password</Link>
                  </div>

                  <div className="parallel-box">
                    <h5> Account Security </h5>
                    <Link className="account-setting-btns" to="/manageprofile">
                     
                      Manage Profile
                    </Link>
                  </div>

                  <div className="parallel-box">
                    <h5> Billing Information </h5>
                    <Link className="account-setting-btns">Biliing Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

       
        </div>
 
        <div className="space2"></div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-12">
              <h3 className="Talent-heading">Quick Links </h3>
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
              <div className="middle-box">
                <h5> We More Help ?</h5>
                <p>
              
                Check out our FAQs now to get answers to some common queries about our platform, and get back to focusing on what really matters – building your dream team!

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpAccountSetting;

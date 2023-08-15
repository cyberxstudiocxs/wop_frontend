import { Link } from "react-router-dom";
import { FaSearchPlus } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiOutlineCopy, AiFillProfile } from "react-icons/ai";

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
                    <Link className="account-setting-btns"  to="/changepassword"> Change Email/Password</Link>
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
     
                <h3>     Create and publish job openings to attract skilled
                  professionals.</h3>
                <Link className="account-setting-btns" to="/postjob">Post A Job</Link>
              </div>
            </div>

            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
              <FaSearchPlus  className="acoount-icons" />
          
              <h3>Find the perfect fit for your project by refining your search criteria.</h3>
                <Link className="account-setting-btns">Advanced Search</Link>
              </div>
            </div>

            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
              <AiFillProfile  className="acoount-icons" />
                <h3>   Explore a diverse pool of talented individuals to best support
                  your project goals.</h3>
                <Link className="account-setting-btns">Browse Profile</Link>
              </div>
            </div>

            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
              < BiSupport className="acoount-icons" />
                <h3> Get quick and reliable assistance from our support team.</h3>
                <Link className="account-setting-btns" to="/contactus">Contact For Support </Link>
              </div>
            </div>
          </div>
        </div>
 
        <div className="space2"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="middle-box  updateaccountsetting">
                <h5> Want More Help?</h5>
                <p>
              
                We have answered the most frequently asked question, but our expert team is available if you have any more queries. 

                </p>

                <Link className="account-setting-btns" to="/contactus">  Contact Us! </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpAccountSetting;

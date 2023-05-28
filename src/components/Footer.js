import { Link } from "react-router-dom";
import "../styles/footer.css";
import { FaEnvelope } from "react-icons/fa";
import logo from "../assets/images/main-logo.png";
import { BsFacebook, BsTwitter } from "react-icons/bs";


const Footer = () => {
  return (
    <div>
      <section className="footer-main-box">
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-lg-3">
              <div className="footer-links">
                <h3> EMPLOYERS</h3>
                <div className="common-link">
                  <ul>
                    <li>
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>

                      <Link className="f-links">How It Works</Link>{" "}
                    </li>
                    <li>
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>


                      <Link className="f-links"> Register </Link>{" "}
                    </li>
                    <li>
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>


                      <Link className="f-links">Post A JOb </Link>
                    </li>
                    <li>
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>


                      <Link className="f-links">Blogs </Link>{" "}
                    </li>
                    <li>
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>

                      <Link className="f-links">FAQ </Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-links">
                <h3> WORKERS</h3>
                <div className="common-link">
                  <ul>
                  <li>
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>

                      <Link className="f-links"> About Us </Link>{" "}
                    </li>
                    <li>
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>

                      <Link className="f-links"> How It Works</Link>{" "}
                    </li>
                    <li>
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>

                      <Link className="f-links"> Register </Link>{" "}
                    </li>
                    <li>
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>

                      <Link className="f-links">Job Search </Link>{" "}
                    </li>
                    <li>
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>

                      <Link className="f-links">Employer Search </Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footer-links">
                <h3> OTHERS</h3>
                <div className="common-link">
                  <ul>
                   
                    
                    <li>
                    <i class="fa fa-angle-double-right " aria-hidden="true"></i>

                      <Link className="f-links" to="/privacypolicy"> Privary Policy </Link>{" "}
                    </li>
                    <li>
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>

                      <Link className="f-links" to="/termsofuse">Terms of Use </Link>
                    </li>
                    <li>
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>

                      <Link className="f-links" to="/contactus">Get In Touch </Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="socials-links">
                <h3> SOCIALS LINKS </h3>
                <div className="common-link">
                  <ul>
                    <li>
                  
                      <Link className="f-links">
                        {" "}
                        <FaEnvelope className="iconsss" /> Info@gmail.com
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link className="f-links">
                        {" "}
                        <BsFacebook  className="iconsss" /> Facebook.com
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link className="f-links">
                        {" "}
                        <BsTwitter  className="iconsss" /> twitter.com
                      </Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid p-3">
          <div className="row d-flex  justify-content-center align-items-center">
            <div className="col-lg-3">
              <img src={logo} className="logo" alt="wop-logo" width={"100%"} />
            </div>
            <div className="col-lg-9">
              <p className="mb-0">Copyright @ 2023 Work Online PK. All Right Reserved </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import "../styles/footer.css";

import logo from "../assets/images/main-logo.png";
import { FaPhoneAlt } from "react-icons/fa";

import { FaEnvelope } from "react-icons/fa";

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
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                      <Link className="f-links">How It Works</Link>{" "}
                    </li>
                    <li>
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                      <Link className="f-links">Register </Link>{" "}
                    </li>
                    <li>
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>

                      <Link className="f-links" to="/postjob">
                        Post A JOb{" "}
                      </Link>
                    </li>

                    <li>
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                      <Link className="f-links">Search Employer </Link>{" "}
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
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                      <Link className="f-links"  to="/jobseekerworks">How It Works</Link>{" "}
                    </li>
                    <li>
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                      <Link className="f-links" to="/jobseekerprofile" >View Profile </Link>{" "}
                    </li>
                    <li>
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                      <Link className="f-links"  to="/jobseekersearchjob">Job Search </Link>{" "}
                    </li>
                    <li>
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                      <Link className="f-links">
                        Advance Search 
                      </Link>{" "}
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
                      <i
                        class="fa fa-angle-double-right "
                        aria-hidden="true"
                      ></i>
                      <Link className="f-links" to="/privacypolicy">
                        Privary Policy{" "}
                      </Link>{" "}
                    </li>
                    <li>
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>

                      <Link className="f-links" to="/termsofuse">
                        Terms of Use{" "}
                      </Link>
                    </li>
                    <li>
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                      <Link className="f-links" to="/contactus">
                        Get In Touch{" "}
                      </Link>{" "}
                    </li>
                    <li>
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                      ></i>
                      <Link className="f-links">Blogs </Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="socials-links">
                <h3> SOCIAL LINKS </h3>

                <div className="common-link-social">
                  <ul>
                    <li>
                      <a
                        href="https://www.instagram.com/workonline.pakistan/"
                        target="_blank"
                        attribute
                      >
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                       
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/people/Work-Online-Pakistan/100090713021635/"
                        target="_blank"
                        attribute
                      >
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                     
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.youtube.com/@WorkOnlinePakistan"
                        target="_blank"
                        attribute
                      >
                        <i class="fa fa-youtube-play" aria-hidden="true"></i>
                      
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/work-online-pakistan/about/"
                        target="_blank"
                        attribute
                      >
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                       
                      </a>
                    </li>
                  </ul>

                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
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
              <p className="mb-0">
                Copyright @ 2023 Work Online PK. All Right Reserved{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

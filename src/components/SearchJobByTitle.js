import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import logo from "../assets/images/main-logo.png";
import { Link } from "react-router-dom";
import "../styles/searchjobbytitle.css";

const SearchJobByTitle = () => {
  return (
    <div>
      <section className="find-job-outer-box">
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="job-search-box">
                <InputGroup className="jobsearchfield mb-3">
                  <div className="serach-icons">
                    <BsSearch />
                  </div>
                  <Form.Control
                    type="text"
                    placeholder="Search for a job title or comapany "
                    className="jobs-search-fields"
                    id="seaechsss"
                  />
                </InputGroup>
                <button type="button" className="talent-btnss jobsearchs">
                  Search
                </button>
              </div>
              
            </div>
          </div>
        </div>{" "}
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebar-box">
                <div className="box-shape"></div>
                <p> Still haven't found</p>
                <h6> "THE PROFECT JOB " ?</h6>
                <p> start receiving job alerts in your inbox daily !</p>

                <button type="button" className="subscribenow">
                  SUBSCRIBE NOW (IT'S FREE)
                </button>

                <p> 9331 jobs posted the past 30 days.</p>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="jobright-box">
                <div className="jobs-box">
                  <div className="image-box">
                    <img
                      src={logo}
                      className="logo"
                      alt="wop-logo"
                      width={"100%"}
                    />
                  </div>
                  <div className="job-info">
                    <h3>
                      {" "}
                      shopify ecommerce copy writer <span> full time</span>{" "}
                    </h3>
                    <p>
                      {" "}
                      menia malik . <span> posted on Apr 17,2023</span>
                    </p>
                    <p> $850.00 to $120.000/month</p>

                    <p className="mt-3">
                      {" "}
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter consequences that are
                      extremely painful.{" "}
                    </p>
                  </div>
                </div>

                <div className="jobs-box">
                  <div className="image-box"></div>
                  <div className="job-info">
                    <h3>
                      {" "}
                      shopify ecommerce copy writer <span> full time</span>{" "}
                    </h3>
                    <p>
                      {" "}
                      menia malik . <span> posted on Apr 17,2023</span>
                    </p>
                    <p> $850.00 to $120.000/month</p>

                    <p className="mt-3">
                      {" "}
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter consequences that are
                      extremely painful.{" "}
                    </p>
                  </div>
                </div>

                <div className="jobs-box">
                  <div className="image-box"></div>
                  <div className="job-info">
                    <h3>
                      {" "}
                      shopify ecommerce copy writer{" "}
                      <span className="anyy"> any</span>{" "}
                    </h3>
                    <p>
                      {" "}
                      ED <span> posted on Apr 17,2023</span>
                    </p>

                    <p className="mt-3">
                      {" "}
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter consequences that are
                      extremely painful.{" "}
                    </p>
                  </div>
                </div>

                <div className="jobs-box">
                  <div className="image-box">
                    <img
                      src={logo}
                      className="logo"
                      alt="wop-logo"
                      width={"100%"}
                    />
                  </div>
                  <div className="job-info">
                    <h3>
                      {" "}
                      shopify ecommerce copy writer <span> full time</span>{" "}
                    </h3>
                    <p>
                      {" "}
                      menia malik . <span> posted on Apr 17,2023</span>
                    </p>
                    <p> $850.00 to $120.000/month</p>

                    <p className="mt-3">
                      {" "}
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter consequences that are
                      extremely painful.{" "}
                    </p>
                  </div>
                </div>
                <div className="jobs-box">
                  <div className="image-box">
                    <img
                      src={logo}
                      className="logo"
                      alt="wop-logo"
                      width={"100%"}
                    />
                  </div>
                  <div className="job-info">
                    <h3>
                      {" "}
                      shopify ecommerce copy writer <span> full time</span>{" "}
                    </h3>
                    <p>
                      {" "}
                      menia malik . <span> posted on Apr 17,2023</span>
                    </p>
                    <p> $850.00 to $120.000/month</p>

                    <p className="mt-3">
                      {" "}
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter consequences that are
                      extremely painful.{" "}
                    </p>
                  </div>
                </div>
                <div className="jobs-box">
                  <div className="image-box"></div>
                  <div className="job-info">
                    <h3>
                      {" "}
                      shopify ecommerce copy writer{" "}
                      <span className="anyy"> any</span>{" "}
                    </h3>
                    <p>
                      {" "}
                      ED <span> posted on Apr 17,2023</span>
                    </p>

                    <p className="mt-3">
                      {" "}
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter consequences that are
                      extremely painful.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="middle-box">
                <p>
                  {" "}
                  We’ re here to help! If you need any assistance with the
                  registration process, please don't hesitate to reach out to
                  us. Our team is able to provide guidance and support to ensure
                  a smooth and hassle-free experience.
                </p>
                <Link className="worker-btns">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchJobByTitle;

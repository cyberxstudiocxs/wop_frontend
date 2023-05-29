import "../styles/home.css";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import imagess from "../assets/images/download.png";
import Form from "react-bootstrap/Form";

const Home = () => {
  return (
    <div>
        <section className="homebanner">
            
      <div className="container  ">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-box">
              <h1>
                Connecting Pakistani Talent to <br></br>
                International Businesses For Online Work
              </h1>
              <div className="banner-space"></div>
              <p>
                Welcome to Work Online Pakistan, the premier resource for
                finding remote employment and hiring top talent in Pakistan's
                online employment market! Our platform gives companies simple
                access to a talent pool from all around Pakistan while also
                connecting job seekers with the greatest remote employment
                opportunities.
              </p>
            </div>
          </div>
        </div>
        <div className="banner-space"></div>
        <div className="row">
          <div className="col-lg-6">
            <div className="talent-left-box">
              <p>
              
                Seeking Exceptional <span className="talent"> Talent ? </span>
              </p>
              <div className="Talent-search-box">
                <InputGroup className="outer-box-search mb-3">
                  <div className="serach-icons">
                  
                    <BsSearch />
                  </div>
                  <Form.Control
                    type="text"
                    placeholder="Search Worker Profiles"
                    className="box-search shadow-none"
                  />
                  <button type="button" className="talent-btnss">
                    Search
                  </button>
                </InputGroup>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <p className="talent">
             
              Job Hunting? Let's <span className="talent"> Connect !</span>
            </p>
            <div className="work-search-box">
              <InputGroup className="outer-box-search mb-3">
                <div className="serach-icons">
                 
                  <BsSearch />
                </div>
                <Form.Control
                  type="text"
                  placeholder="Search Jobs"
                  className="box-search shadow-none"
                />
                <button type="button" className="talent-btnss">
                  Search
                </button>
              </InputGroup>
            </div>
          </div>
        </div>
        </div>
        </section>

  

        <section className="homepopulartalent">
        <div className="container  ">
        <div className="row">
          <div className="col-lg-12">
            <div className="middleheading">

           
            <h3 className="Talent-heading"> Popular Talent Hunts</h3>
          </div>
          </div>
        </div>
     
        <div className="row ">
          <div className="col-lg-4">
            <div className="points-lists">
              <ul>
                <li>
                  <a> Website Development</a>
                </li>
                <li>
                  <a>Software Development</a>
                </li>
                <li>
                  <a>Graphics Designing</a>
                </li>
                <li>
                  <a> Mobile App Development</a>
                </li>
                <li>
                  <a>Search Engine Optimization</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="points-lists">
              <ul>
                <li>
                  <a> React Native/ Angular JS/ WordPress</a>
                </li>
                <li>
                  <a> Digital Marketing/Social Media Marketing</a>
                </li>
                <li>
                  <a>Animations/Video Creation</a>
                </li>
                <li>
                  <a>Creative Writer</a>
                </li>
                <li>
                  <a> Data Entry/Virtual Assistant</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="points-lists">
              <ul>
                <li>
                  <a> Virtual Assistant </a>
                </li>
                <li>
                  <a> Accounting & Bookkeeping</a>
                </li>
                <li>
                  <a>Project Management </a>
                </li>
                <li>
                  <a> Shopify Store Development</a>
                </li>
                <li>
                  <a> Customer Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-12">
            <div className="more-box">
              <Link className="more-skillss"> See More Skills </Link>
            </div>
          </div>
        </div>
        </div>
        </section>
        
       
        <div className="space2"></div>
      

        
      
     
      

     
        <section className="homeslider">
     
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <h3 className="em-heading "> What Our Employers Say </h3>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <div className="arrows-box">
                <a
                  className="leftarrow-btn  mr-1"
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fa fa-arrow-left"></i>
                </a>
                <a
                  className="leftarrow-btn  "
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="next"
                >
                  <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="slidersspacee"></div>
            <div className="col-12">
              <div
                id="carouselExampleIndicators2"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div className="roundd-box">
                            <p className="card-text">
                              “I couldn't be thankful and happier with my new
                              job, and I'm grateful to Work Online Pakistan for
                              making it all possible!"{" "}
                            </p>
                          </div>
                          <div class="card-body">
                            <img
                              className="person"
                              alt="100%x280"
                              src={imagess}
                            />
                            <h4 className="card-title">
                              Sana, Freelance Writer
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div className="roundd-box">
                            <p className="card-text">
                              "Work Online Pakistan has provided me with an
                              affordable and efficient solution to my talent
                              acquisition needs"
                            </p>
                          </div>
                          <div class="card-body">
                            <img
                              className="person"
                              alt="100%x280"
                              src={imagess}
                            />
                            <h4 className="card-title">Ali, CEO.</h4>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div className="roundd-box">
                            <p className="card-text">
                              “Thanks to WOP, finally now I have a job that
                              allows me to work from anywhere in Pakistan!"{" "}
                            </p>
                          </div>
                          <div class="card-body">
                            <img
                              className="person"
                              alt="100%x280"
                              src={imagess}
                            />
                            <h4 className="card-title">
                              Hassan, Web Developer.
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div className="roundd-box">
                            <p className="card-text">
                              “I couldn't be thankful and happier with my new
                              job, and I'm grateful to Work Online Pakistan for
                              making it all possible!"{" "}
                            </p>
                          </div>
                          <div class="card-body">
                            <img
                              className="person"
                              alt="100%x280"
                              src={imagess}
                            />
                            <h4 className="card-title">
                              Sana, Freelance Writer
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div className="roundd-box">
                            <p className="card-text">
                              ". Work Online Pakistan has provided me with an
                              affordable and efficient solution to my talent
                              acquisition needs"
                            </p>
                          </div>
                          <div class="card-body">
                            <img
                              className="person"
                              alt="100%x280"
                              src={imagess}
                            />
                            <h4 className="card-title">Ali, CEO.</h4>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 mb-3">
                        <div className="card">
                          <div className="roundd-box">
                            <p className="card-text">
                              “ Thanks to WOP, finally now I have a job that
                              allows me to work from anywhere in Pakistan!"{" "}
                            </p>
                          </div>
                          <div class="card-body">
                            <img
                              className="person"
                              alt="100%x280"
                              src={imagess}
                            />
                            <h4 className="card-title">
                              Hassan, Web Developer.
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        <div className="space2"></div>
    </div>
  );
};

export default Home;

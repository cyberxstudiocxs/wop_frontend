
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import imagess from "../../assets/images/download.png";
import "../../styles/jobsekeer.css";
import moment from "moment/moment";
import { useState, useEffect } from "react";
import axios from "axios";
const LatestJObPost = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState();

  useEffect(() => {
    axios
      .get(`https://api.zalimburgers.com/wop-api/joblistings/latestjobs`)
      .then((res) => {
        res.data.data.map((it) => {
          let jobDate = it.created_at.split("T");
          jobDate = jobDate[0];
          jobDate = jobDate.split("-");
          jobDate[1] = parseInt(jobDate[1]) - 1;
          var date = new Date(jobDate[0], jobDate[1].toString(), jobDate[2]);
          it.created_at = moment(date).format("dddd MMMM D Y");
        });
        setJobs(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const searchJob = () => {
    axios
      .post(`https://api.zalimburgers.com/wop-api/joblistings/title`, {
        title: title,
      })
      .then((result) => {
        setJobs(result.data.data);
        navigate("/jobseekersearchjob", {
          state: {
            jobs: result.data.data,
            title: title,
          },
        });
      })
      .catch((err) => console.log(err));
  };

  const goToDetailPage = (jobId) => {
    navigate("/detailjobpost", {
      state: {
        id: jobId,
      },
    });
  };

  return (
    <div>
      <section className="find-job-outer-box">
        <div className="space2"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="online-jobs-joobseeeker">
                <div className="jobss-infoo">
                  <h2>Job Hunting Made Easy: Find Your Next Career Move</h2>
                  <p>
                    Searching for a fulfilling job opportunity can be
                    overwhelming and exhausting. That's why we're here to make
                    job hunting easy for you. With our latest job listings and
                    user-friendly search filters, say goodbye to endless
                    scrolling and find the perfect job that matches your skills
                    and career goals. Let’s get started!
                  </p>
                </div>

                <InputGroup className="outer-box-search mb-3">
                  <div className="serach-icons">
                    <BsSearch />
                  </div>
                  <Form.Control
                    type="text"
                    placeholder="Search Worker Profiles"
                    className="box-search"
                    value={title}
                    onChange={(e) => handleChange(e)}
                  />
                  <button type="button" className="talent-btnss" onClick={() => searchJob()}>
                    Search
                  </button>
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
        <div className="space2"></div>
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <div className="latestpostss text-center">
                <h3 className="Talent-heading"> Latest Job Posts</h3>
                <p className="my-5">
                  We've got you covered with the newest and most exciting job
                  opportunities available. Browse through our selection and find
                  your dream job today.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {jobs.length != 0 ? (
              <>
                {jobs.map((job) => (
                  <div className="col-lg-4">
                    <div className="onlinejob-box">
                      <div className="onlinejob-info">
                        <h3>
                          {job.title} <span> Apply</span>{" "}
                        </h3>
                        <p className="job-time">{job.created_at}</p>
                        <p>
                          <span className="price"> Rs </span> {job.salary}
                        </p>
                        <div className="linee"></div>
                        <div className="job-desc">
                          <p className="short"> {job.description}</p>

                          <span
                            className="worker-btns"
                            onClick={() => goToDetailPage(job.job_id)}
                          >
                            Read More
                          </span>
                        </div>

                        <div className="inline-skills">
                          <p className="skills">
                            {job.primary_skill_description}
                          </p>
                          <p className="skills">
                            {job.secondary_skill1_description}
                          </p>
                          <p className="skills">
                            {job.secondary_skill2_description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              ""
            )}
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="middle-box-bnts">
                <Link className="worker-btns" to="/jobseekersearchjob">
                  Explore All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="find-online-jobs">
        <div className="container-fluid p-5">
          <div className="row">
            <div className="col-lg-8">
              <h3> Why Choose Work Online Pakistan</h3>
              <p>
                {" "}
                At Work Online Pakistan, we pride ourselves on connecting
                top-tier employers with the most qualified candidates, offering
                Pakistani workers a great opportunity to showcase their skills
                on a global platform. With our commitment to providing an
                unparalleled job search experience, employers can easily connect
                with a diverse range of exceptionally talented candidates, and
                job seekers can find the perfect job opportunity.
              </p>

              <h5>Diverse Pool of Talent </h5>
              <p>
                {" "}
                Our job portal offers ideal opportunities for Pakistani youth to
                access a vast array of employment opportunities with employers
                from all over the world.
              </p>

              <h5>Promote Local Talent Acquisition</h5>
              <p>
              Our mission extends beyond just offering a job portal. We are committed to empowering local professionals and providing competent people in Pakistan with employment opportunities.

              </p>

              <h5>Streamlined Recruitment</h5>
              <p>
              We have simplified the recruitment process, enabling you to identify the perfect candidate for your needs quickly and conveniently.

              </p>

              <h5>Tailored Solutions</h5>
              <p>
              Whether you're seeking a temporary project-based role or a permanent full-time job, we have a solution that caters to your preferences.

              </p>

              <h5>Remote Work Opportunities</h5>
              <p>
              We offer job opportunities that allow you to work from home, facilitating work-life balance.

              </p>
            </div>
            <div className="col-lg-4">
              <img className="person" alt="100%x280" src={imagess} />
            </div>
          </div>
        </div>
      </section>
      <div className="space2"></div>
      <section className="latestjob-cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="middle-box saved-job-cta">
                <p>
                  Want to get notified of job openings in your field? And never
                  miss out on an opportunity to yield!
                </p>
                <Link className="worker-btns">Sign Up for job Alerts</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="space2"></div>
    </div>
  );
};
export default LatestJObPost;

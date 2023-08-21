import { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import logo from "../../assets/images/main-logo.png";
import axios from "axios";
import moment from "moment/moment";
import "../../styles/searchjobbytitle.css";
import "../../styles/jobsekeer.css";

const JobSearching = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const [jobs_data, setJobsData] = useState([]);
  const [tValue, setTValue] = useState();
  const location = useLocation();

  useEffect(() => {
 
    let data = [];
    axios
      .get(`https://api.zalimburgers.com/wop-api/joblistings`)
      .then((result) => {
         result.data.data.map(it=>{
          if(it.created_at)
          {
            let jobDate = it.created_at.split("T");
            jobDate = jobDate[0];
            jobDate = jobDate.split("-");
            jobDate[1] = parseInt(jobDate[1]) - 1;
            var date = new Date(jobDate[0], jobDate[1].toString(), jobDate[2]);
            it.created_at = moment(date).format("dddd MMMM D Y");
          }
      
        })
        data = result.data.data;
        setJobsData(result.data.data);
      })
      .catch((err) => console.log(err));
   setTimeout(()=>{
    if (location.state) {
      console.log('location',location)
      if (location.state.jobs.length != 0) {
        setJobs(location.state.jobs);
        setTValue(location.state.title);
      } else {
        setTValue(location.state.title);
        setJobs([]);
      }
    } else {
      console.log('data',data)
      setJobs(data);
    }
   },2000)
  
  }, []);

const handleChange=(e)=>{

  console.log(e.target.value)
  setTValue(e.target.value)
  if(e.target.value==''){
    setJobs(jobs_data)
  }
}
  const searchJob=()=>{

    axios
    .post(`https://api.zalimburgers.com/wop-api/joblistings/title`,
       {title:tValue}
    )
    .then((result) => {
      console.log("results", result);
      setJobs(result.data.data);
  
    })
    .catch((err) => console.log(err));
};

const goToDetailPage=(jobId)=>{
   
  navigate("/detailjobpost", {
    state: {
      id: jobId,
    },
  });
  
}
   

  return (
    <div>
      <section className="find-job-outer-box">
      <div className="spacejobsearch"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="job-search-box">
                <InputGroup className="jobsearchfield mb-3">
                  <div className="serach-icons">
                    <BsSearch />
                  </div>
                  <input
                    type="text"
                    value={tValue}
                    onChange={e=>handleChange(e)}
                    placeholder="Search for a job title or comapany "
                    className="jobs-search-fields"
                    id="seaechsss"
                  />
                </InputGroup>
                <button type="button" onClick={searchJob} className="talent-btnss jobsearchs">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="spacejobsearch"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebar-box">
                <div className="box-shape"></div>
                <p> Still haven't found</p>
                <h6> "THE PERFECT JOB " ?</h6>
                <p> start receiving job alerts in your inbox daily !</p>

                <p> 9331 jobs posted the past 30 days.</p>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="jobright-box">
               
              {jobs.length!=0?
              <>
              {jobs.map((job) => (
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
                        {job.title}
                        <span> {job.job_type_description}</span>{" "}
                      </h3>
                      <p className="font-weight-bold text-capitalize">
                        {" "}
                        {job.contact_person} .{" "}
                        <span> posted on {job.created_at}</span>
                      </p>
                      <p className="font-weight-bold text-capitalize"> {job.salary}</p>

                      <p className="short"> {job.description} </p>
                      <span className="worker-btns" onClick={()=>goToDetailPage(job.job_id)} > 
                        Read More
                        </span>
                    </div>
                    </div>
                  ))}
                  </>
                  :<p>!No Job Found</p>}
               

          
              </div>
            </div>
          </div>
        </div>
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="middle-box jobsearchingbg">
                <p>
                  We’ re here to help! If you need any assistance with the
                  registration process, please don't hesitate to reach out to
                  us. Our team is able to provide guidance and support to ensure
                  a smooth and hassle-free experience.
                </p>
                <Link className="worker-btns"  to="/contactus">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobSearching;

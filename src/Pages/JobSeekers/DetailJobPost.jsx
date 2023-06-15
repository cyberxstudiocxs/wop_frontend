import "../../styles/jobsekeer.css";
import { useEffect,useState } from "react";
import { FaSuitcase } from "react-icons/fa";
import {useLocation} from 'react-router-dom';
import axios from "axios";
import moment from "moment/moment";

const DetailJobPost = () => {
  const location = useLocation();
  const [job, setJob] = useState();
 
  useEffect(() => {
    if(location.state){
      console.log("in details ",location.state.id)
      axios
      .get(`https://next.mazglobal.co.uk/wop-api/joblistings/${location.state.id}`)
      .then(res=>{
        let jobDate = res.data.data.created_at.split("T");
        jobDate = jobDate[0];
        jobDate = jobDate.split("-");
        jobDate[1] = parseInt(jobDate[1]) - 1;
        var date = new Date(jobDate[0], jobDate[1].toString(), jobDate[2]);
        res.data.data.created_at = moment(date).format("dddd MMMM D Y");
        setJob(res.data.data)
      }).catch(err=>console.log(err))
    }
  },[])

  return (
    <>
    {job &&
    <div>
      <section className="single-job-post-jobseeker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="jobseeker-post-banner">
                <h3> {job.title} </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row  aboceeee">
          <div className="sameee-boxx">
            <div className="col-lg-4">
              <div className="types-box">
                <div className="work-icons">
                  <FaSuitcase />
                </div>
                <div className="works-info">
                  <h5> Types of works</h5>
                  <p> {job.job_type_description} </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="types-box">
                <div className="work-icons">
                  <FaSuitcase />
                </div>
                <div className="works-info">
                  <h5> salary</h5>
                  <p> {job.salary} Rs</p>
                </div>
              </div>
            </div>

          

            <div className="col-lg-4">
              <div className="types-box">
                <div className="work-icons">
                  <FaSuitcase />
                </div>
                <div className="works-info">
                  <h5> Date Post </h5>
                  <p> {job.created_at}</p>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="onlinejob-box">
              <div className="onlinejob-info">
                <h3>Job Overview</h3>
                <p>
                  {" "}
                  {job.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
}
</>
  );
};

export default DetailJobPost;

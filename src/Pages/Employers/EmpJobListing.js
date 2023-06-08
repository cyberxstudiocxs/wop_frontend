import "../../styles/joblisting.css";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment/moment";
import { Link } from "react-router-dom";
const EmpJobListing = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.zalimburgers.com/wop-api/joblistings`)
      .then((res) => {
        res.data.data.map((it) => {
          if (it.created_at) {
            let jobDate = it.created_at.split("T");
            jobDate = jobDate[0];
            jobDate = jobDate.split("-");
            jobDate[1] = parseInt(jobDate[1]) - 1;
            console.log(jobDate);
            var date = new Date(jobDate[0], jobDate[1].toString(), jobDate[2]);
            it.created_at = moment(date).format("dddd MMMM D Y");
          }
        });
        setJobs(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <section className="Accontsettig-box">
        <div className="container ">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="successfully-box ">
                <h3> Jobs Posted </h3>
                <p>
                  The job post will stay up for as long as you have an active
                  account or untill you delete the job posting.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg p-3 col-md p-3 col-sm p-2"></div>
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="table-box-outer">
                <div className="head-tablesss">
                  <div className="post-heading">
                    <h5> JOB POSTS</h5>
                  </div>

                  <div className="actionss-box">
                    <Link type="button" className="postjob-btn"  to="/postjob">
                      Add New Post
                    </Link>
                    
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th> #</th>
                        <th>Job Title</th>
                        <th>Job Descripition </th>
                        <th>Applicants </th>
                      
                        <th> Status</th>
                        <th>Date Posted </th>
                        <th>Actions </th>
                      </tr>
                    </thead>
                    <tbody>
                      {jobs.map((job, i) => (
                        <tr>
                          <th>{++i}</th>
                          <td>{job.title}</td>
                          <td>{job.title}</td>
                          <td>@mdo</td>
                          
                          <td>Otto</td>
                          <td>{job.created_at}</td>
                          <th>
                            {" "}
                            <div className="actionss-box">
                              <Link className="editjobs" to="">
                                Edit
                              </Link>

                              <Link className="Deletejobs" to="">
                                Deleted
                              </Link>
                            </div>
                          </th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpJobListing;

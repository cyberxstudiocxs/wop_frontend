import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import imagess from "../../assets/images/download.png";
import { Link } from "react-router-dom";
import "../../styles/jobsekeer.css";


import {useState,useEffect} from 'react';
import axios from 'axios'
const LatestJObPost = () => {
const[jobs,setJobs]=useState([])

useEffect(() => {
  axios
  .get(`http://localhost:8080/wop-api/joblistings/latestjobs`)
  .then((res) => {
    setJobs(res.data.data);
  })
  .catch((err) => {
    console.log(err);
  });

},[])
  return (
    <div>
      <section className="find-job-outer-box">
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="online-jobs text-center">
                <h2> Find a Real , Online Job.</h2>
                <p>
                  {" "}
                  Thousands of jobs posted across all sectors who want to hire
                  pakistanis
                </p>
              </div>
              <div className="Talent-search-box">
                <InputGroup className="outer-box-search mb-3">
                  <div className="serach-icons">
                    {" "}
                    <BsSearch />
                  </div>
                  <Form.Control
                    type="text"
                    placeholder="Search Worker Profiles"
                    className="box-search"
                  />
                  <button type="button" className="talent-btnss">
                    Search
                  </button>
                </InputGroup>
              </div>
            </div>
          </div>
        </div>

        <div className="container p-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="latestpostss text-center">
              <h3 className="Talent-heading"> Latest Job Posts</h3>
              <p className="my-5"> From Companies Loooking To Outsource To Pakistan</p>
              </div>
             
            </div>
          </div>
          <div className="row">
            {jobs.length!=0?
            <>
            {jobs.map(job=>(
              <div className="col-lg-4">
          <div className="onlinejob-box">
                 
                  <div className="onlinejob-info">
                    <h3>
                     {job.title} <span> Apply</span>{" "}
                    </h3>
                    <p>
                     {job.created_at}
                    </p>
                    <p> <span className="price"> Rs  </span> {job.salary}</p>
              <div className="linee"></div>
                    <p className="mt-3">
                      {" "}
                      {job.description}
                    </p>
                    <div className="inline-skills">
                    <p className="skills">{job.primary_skill_description}</p> 
                     <p className="skills"> {job.secondary_skill1_description} </p>
                     <p className="skills"> {job.secondary_skill2_description}  </p>
                    </div>
                   
                  </div>
                </div>
            </div>
            ))
              
            }
            </>:""

            }
    
        </div>
        </div>
      </section>

      <section className="find-online-jobs">
      <div className="container-fluid p-5">
      <div className="row">
      <div className="col-lg-8">
        <h3> Why Find an Online Job with Us ?</h3>

        <ul>
          <li> Largest Database of Online Jobs for pakistanis - hindreds of active jobs every day!</li>
          <li> Largest Database of Online Jobs for pakistanis - hindreds of active jobs every day!</li>
          <li> Largest Database of Online Jobs for pakistanis - hindreds of active jobs every day!</li>
          <li> Largest Database of Online Jobs for pakistanis - hindreds of active jobs every day!</li>
          <li> Largest Database of Online Jobs for pakistanis - hindreds of active jobs every day!</li>

          
          

        </ul>


        </div>
        <div className="col-lg-4">
        <img className="person" alt="100%x280" src={imagess} />
          </div>

        </div>
        </div>

      </section>
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
                <Link className="worker-btns"  to="/contactus">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>


    </div>
  );
};
export default LatestJObPost;

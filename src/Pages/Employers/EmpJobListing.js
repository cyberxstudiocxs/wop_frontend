import "../../styles/joblisting.css";
import axios from "axios";
import React ,{ useState, useEffect } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader ,Button} from 'reactstrap';
import moment from "moment/moment";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete ,AiOutlineFolderView } from "react-icons/ai";  

const EmpJobListing = () => {

  const [confirmmodal, setConfirmModal] = React.useState(false);
  const confirmtoggle = () => setConfirmModal(!confirmmodal);
  const [errormodal, setErrorModal] = React.useState(false);
  const errortoggle = () => setErrorModal(!errormodal);
  const [user, setUser] = useState();
  const [jobs, setJobs] = useState([]);
  const [postId, setPostId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    var decoded = jwt_decode(localStorage.getItem('token'));
    setUser(decoded.result)
    //https://api.zalimburgers.com
    axios
      .get(`https://api.zalimburgers.com/wop-api/joblistings/employer/${decoded.result.id}`)
      .then((res) => {
        let list=[]
        res.data.data.map((it) => {
          if (it.created_at && it.status===1 ) {
            let jobDate = it.created_at.split("T");
            jobDate = jobDate[0];
            jobDate = jobDate.split("-");
            jobDate[1] = parseInt(jobDate[1]) - 1;
            console.log(jobDate);
            var date = new Date(jobDate[0], jobDate[1].toString(), jobDate[2]);
            it.created_at = moment(date).format("dddd MMMM D Y");
            list.push(it)
          }
        });
        setJobs(list);
        console.log(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const editJob=(jobId)=>{
   
    navigate("/postjob", {
      state: {
         id: jobId,
      },
    })
  }

  const confirmDialogue=(id)=>{
    setPostId(id)
    confirmtoggle()
  }

  const inActivePost=()=>{
   
    axios.put(`https://api.zalimburgers.com/wop-api/joblistings/changeStatus/${postId}`,{status:0})
    .then(res=>{
      console.log(res.data)
      let list=[]
      if(res.data.success==1)
      {
        jobs.map(jb=>{
          if(jb.job_id==postId)
          {
  
          }else{
            list.push(jb)
          }
        })
         setJobs(list)
         confirmtoggle()
      }
     
    }).catch(err=>{
      errortoggle()
      console.log(err)
    })
  }
 
const routeToPage=(job_id)=>{
  navigate("/viewapplicant", {
    state: {
      id: job_id,
   },
  });
}


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
                      
                        <th> New Applicants</th>
                        <th>Date Posted </th>
                        <th>Actions </th>
                      </tr>
                    </thead>
                    <tbody>
                      {jobs.map((job, i) => (
                        <tr>
                          <th>{++i}</th>
                          <td  className="text-capitalize">{job.title}</td>
                          <td>{job.description.split(/\s+/).slice(0, 7).join(" ")}.....</td>
                          <td>{job.applicants}</td>
                          
                          <td>{job.new_applicants}</td>
                          <td>{job.created_at}</td>
                          <th>
                            {" "}
                            <div className="actionss-box">
                              <span style={{cursor:'pointer',padding:'10px'}}
                               className="editjobs" onClick={()=>editJob(job.job_id)}>
                              <FaEdit   size={30}/>
                              </span>

                              <span style={{cursor:'pointer' }}
                                className="Deletejobs" onClick={()=>confirmDialogue(job.job_id)}>
                               <AiFillDelete   size={30} />
                              </span>

                              <span style={{cursor:'pointer', padding:'10px'}}
                             className="viewjobs" onClick={()=>routeToPage(job.job_id)}  >
                             <AiOutlineFolderView  size={30} />
                              </span>
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
      <Modal isOpen={confirmmodal} toggle={confirmtoggle}>
        <ModalHeader toggle={confirmtoggle}>Alert</ModalHeader>
        <ModalBody>
          <>Are You Sure You Want To In Active this Job Post?</>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=>inActivePost()}>
            Yes
          </Button>
          <Button color="primary" onClick={confirmtoggle}>
            No
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={errormodal} toggle={errortoggle}>
        <ModalHeader toggle={errortoggle}>Alert</ModalHeader>
        <ModalBody>
          <>!Error Deleting The Job</>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={errortoggle}>
            Ok
          </Button>
        
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EmpJobListing;
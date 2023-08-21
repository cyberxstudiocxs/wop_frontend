import "../../styles/joblisting.css";
import "../../styles/menu.css";
import axios from "axios";
import React ,{ useState, useEffect } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader ,Button} from 'reactstrap';
import moment from "moment/moment";
import jwt_decode from "jwt-decode";
import { Link, useNavigate,useLocation } from "react-router-dom";
import PDFViewer from 'pdf-viewer-reactjs'

const ApplicantView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [applicants,setApplicants]=useState([])
  useEffect(() => {
    //var decoded = jwt_decode(localStorage.getItem('token'));
    //setUser(decoded.result)
    //https://api.zalimburgers.com
    if (location.state) {
    axios
      .get(`https://api.zalimburgers.com/wop-api/joblistings/viewApplicants/${location.state.id}`)
      .then((res) => {
        res.data.data.map(it=>{
          it.attachment="https://api.zalimburgers.com/"+it.attachment
        })
         setApplicants(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, []);

  const routeToJobseeker=(j_id)=>{
    navigate("/jobseekerprofile", {
      state: {
        id: j_id,
     },
    });
  }


  return (
    <div>
      <section className="Accontsettig-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="table-box-outer">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Sr</th>
                      <th scope="col">Applicant Name</th>
                      <th scope="col">Applicant E-Mail</th>
                      <th scope="col">Applicant</th>
                      <th scope="col">Attachment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applicants &&
                    <>
                    {applicants.map((app,i)=>(
                      <tr>
                      <th scope="row">{i+1}</th>
                      <td className="text-capitalize">{app.fullname}</td>
                      <td>{app.fullname}</td>
                      <td >
                         <p style={{"cursor":'pointer'}}className="postjob-btn" onClick={()=>routeToJobseeker(app.jobseeker_id)}>
                            View Profile </p>

                     
                        </td>
                        {app.attachment &&
                        <td >
                         
                         <a className="accountcreate" href={app.attachment} target="_blank">
                          <p>
                           {app.attachment.substring(56,)}
                          </p>
                          </a>
                           </td>
                        }
                      </tr>
                      
                    ))

                    }
                    </>

                    }
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicantView;

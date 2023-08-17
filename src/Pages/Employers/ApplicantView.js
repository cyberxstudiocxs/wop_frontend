import "../../styles/joblisting.css";
import "../../styles/menu.css";
import { Link } from "react-router-dom";
const ApplicantView = () => {
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
                      <th scope="col">#</th>
                      <th scope="col">Applicant Name</th>
                      <th scope="col">Applicant E-Mail</th>
                      <th scope="col">Applicant</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        
                        <div className="actionss-box">
                         <Link className="postjob-btn" >  View Profile </Link>

                     
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">2</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>   <Link className="findjob-btn" >
                      View Resume
            </Link></td>
                    
                     
                    </tr>
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

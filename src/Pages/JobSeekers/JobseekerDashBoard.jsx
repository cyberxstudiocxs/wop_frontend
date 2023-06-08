import imagess from "../../assets/images/download.png";
import { Link } from "react-router-dom";
import "../../styles/jobseeekerdashboard.css";
const JobseekerDashBoard = () => {
  return (
    <div>
      <section  class="contact-us-main"> 
        <div className="container">
          <div className="row">
            {/* toggle testing  */}
            <div className="col-lg-6">
              
            </div>
            {/* toggle testing end here */}
            <div className="col-lg-6">
              
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="jobseekerdashboard">
                <div className="jobseeker-heads">
                  <div className="jobseeker-person">
                    <img className="person" alt="100%x280" src={imagess} />
                  </div>
                  <div className="jobseeker-jobtype">
                    <p className="jobseeekertitle"> full stack developer</p>
                  </div>
                </div>
              </div>

              <div className=" obseekerdashboard">
                <div className="jobseeker-body">
                  <div className="jobseeker-person">
                    <Link  className="editprofileee"> edit profile </Link>
                  </div>
                  <div className="jobseeker-jobtype">
                    <p className="salaryjobseeeker"> salary   </p>
                    <p className="typess"> Looking for Part time work </p>
                    <p className="Educationstatic"> Education</p>
                    <p className="education"> High school diploma </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobseekerDashBoard;

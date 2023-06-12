
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
const RateYourSkils = () => {
  return (
    <div>
      <section className="jobseeekr-steps">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="leftsdiebar-jobseeekr">
                <Link className="sidebar-btns" to="/createprofile">
                  Create Profile
                </Link>

                <Link className="sidebar-btns" to="/rateskill">
                  Rate Your Skills
                </Link>

                <Link className="sidebar-btns" to="/jobseekerdashbaord">
                  View Avilable Jobs
                </Link>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="right-sidebar-jobseeker">

                <div className="rate-info">
                <h3>Tell us about your skills </h3>
                <p>
                  Select, rate, and describe your experience for your top
                  skills. You can only select up to a maximum of 15 skills.
                </p>
                </div>

                <div className="job-search-box">
                <InputGroup className="jobsearchfield mb-3">
                  <div className="serach-icons">
                    <BsSearch />
                  </div>
                  <input
                    type="text"
                  
                   
                    placeholder="Type To Search For A Skill "
                    className="jobs-search-fields"
                    id="seaechsss"
                  />
                </InputGroup>
                 

             
              </div>

              <Link className="step-btns"  to="/">
                    Next
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RateYourSkils;

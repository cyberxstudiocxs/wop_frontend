import { FaSuitcase } from "react-icons/fa";
import imagess from "../../assets/images/download.png";

const JobseekerProfile = () => {
  return (
    <div>
      <section class="jobseeker-profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="jobseeekerprofile-banner">
                <div className="profile-person">
                  <img className="person" alt="100%x280" src={imagess} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="profiletype-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="jobseeker-profilejobtype">
                <p> full stack developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="graybg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ">
              <div
                className="
                profile-left-outer-box"
              >
                <div className="jobseekerleft-profile">
                  <h3> OverView</h3>

                  <div className="types-box">
                    <div className="work-icons">
                      <FaSuitcase />
                    </div>
                    <div className="works-info">
                      <h5> Types of works</h5>
                      <p> Part Time </p>
                    </div>
                  </div>

                  <div className="types-box">
                    <div className="work-icons">
                      <FaSuitcase />
                    </div>
                    <div className="works-info">
                      <h5> Degree</h5>
                      <p> Associates degree </p>
                    </div>
                  </div>
                </div>

               
              </div>
              <div className="m-3"></div>
              <div
                className="
                profile-left-outer-box"
              >
              <div className="profile-description">
                  <h3> Profile Description </h3>
                </div>
                </div>
            </div>
            <div className="col-lg-4">
              <div className="right-profile">
                <h3> Basic Information</h3>

                <p className="salaryjobseeeker"> Age </p>
                <p className="typess"> 25 </p>

                <p className="salaryjobseeeker"> Gender </p>
                <p className="typess"> Male </p>

                <p className="salaryjobseeeker"> Salary </p>
                <p className="typess">51472 </p>

                <p className="salaryjobseeeker"> Education </p>
                <p className="typess"> Bscs </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobseekerProfile;

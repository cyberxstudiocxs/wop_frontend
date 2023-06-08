import "../../styles/jobsekeer.css";
import { FaSuitcase } from "react-icons/fa";

const DetailJobPost = () => {
  return (
    <div>
      <section className="single-job-post-jobseeker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="jobseeker-post-banner">
                <h3> Virtual Assistant Property Manager </h3>
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
                  <p> Part Time </p>
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
                  <p> $3.5</p>
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
                  <p> jun 07, 2023</p>
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
                  To assist and handle with duties associated with the rental
                  properties What the job entails; -Has experience handling
                  rental properties -Has experience in handling tenant's
                  concerns. - Estimating "After Repair Value" on a property
                  -Identifying / Averaging "Comps" for a target property -Using
                  Propstream -Using Zoom -Onboarding new tenants into a property
                  -Interacting with "Section 8" departments -Scheduling
                  contractors -Obtaining contractor estimates for repair /
                  maintenance work on properties -Working with AirB&Bs -Using
                  Zillow -Using Redfin -Using Craigslist -Using Loopnet -Using
                  Cold calling to generate sales
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailJobPost;

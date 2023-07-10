import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import imagess from "../assets/images/download.png";
import "../styles/searchjobbytitle.css";
import "../styles/jobsekeer.css";

const SkillSearch = () => {
  return (
    <div>
      <section className="skillbox-search-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="job-search-box">
                <InputGroup className="jobsearchfield mb-3">
                  <div className="serach-icons">
                    <BsSearch />
                  </div>
                  <input
                    type="text"
                    placeholder="Search  "
                    className="jobs-search-fields"
                    id="seaechsss"
                  />
                </InputGroup>
                <button type="button" className="talent-btnss jobsearchs">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <div className="emp-typoee">
                <label for="inputState">Employment Type</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>full time</option>
                  <option>part time</option>
                </select>
              </div>
              <div className="salary-typoee">
              <div class="form-group">
                <label for="formControlRange">Salary Range input</label>

                <input
                  type="range"
                  class="form-control-range"
                  id="formControlRange"
                />
              </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="skilsearch-box">
                <div className="per-images-box">
                  <img className="person" alt="100%x280" src={imagess} />
                </div>
                <div className="skill-right-box">
                  <h3> Front end developer</h3>
                  <div className="same-box-skilss">
                    <h6> Salary</h6>

                    <h6> Education</h6>
                    <h6> Working Hour</h6>
                  </div>
                  <div className="same-box-skilss">
                    <p> 1254 </p>
                    <p> Bachelors degree </p>
                    <p> 2 hours </p>
                  </div>

                  <div className="profile-description">
                    <h6> profile description </h6>
                    <p>
                      Strong fundamentals of HTML, CSS and JavaScript, skilled
                      in ReactJS front-end framework, Typescript, Apollo, AntD
                      and other related JS library that would compliment the
                      tech stack with almost 5 years total experience as a Web
                      Developer, 3 years spent focusing Front-end Development.
                    </p>
                  </div>

                  <div className="top-skill">
                    <h6> Top Skills</h6>
                    <p> Javascript</p>
                    <p> HTML</p>
                  </div>
                </div>
              </div>

              <br></br>
              <div className="skilsearch-box">
                <div className="per-images-box">
                  <img className="person" alt="100%x280" src={imagess} />
                </div>
                <div className="skill-right-box">
                  <h3> Front end developer</h3>
                  <div className="same-box-skilss">
                    <h6> Salary</h6>

                    <h6> Education</h6>
                    <h6> Working Hour</h6>
                  </div>
                  <div className="same-box-skilss">
                    <p> 1254 </p>
                    <p> Bachelors degree </p>
                    <p> 2 hours </p>
                  </div>

                  <div className="profile-description">
                    <h6> profile description </h6>
                    <p>
                      Strong fundamentals of HTML, CSS and JavaScript, skilled
                      in ReactJS front-end framework, Typescript, Apollo, AntD
                      and other related JS library that would compliment the
                      tech stack with almost 5 years total experience as a Web
                      Developer, 3 years spent focusing Front-end Development.
                    </p>
                  </div>

                  <div className="top-skill">
                    <h6> Top Skills</h6>
                    <p> Javascript</p>
                    <p> HTML</p>
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

export default SkillSearch;

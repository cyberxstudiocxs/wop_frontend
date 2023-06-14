import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";


import Row from "react-bootstrap/Row";

const CreateProfileJobseeker = () => {

  
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

                <Link className="sidebar-btns" to="">
                  View Avilable Jobs
                </Link>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="right-sidebar-jobseeker">
                <h3> Tell us about you </h3>
                <p>
                  Take this opportunity to show off your skills. Write a
                  paragraph about your employment skills. Don’t just write a
                  list. Write something that will demonstrate to an employer how
                  knowledgeable you are/
                </p>

                <div className="right-formsss">
                  <Form>
                    <Row className="mb-3">
                      <Form.Group controlId="formJobTitle">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control
                          type="text"
                          name="title"
                          required
                          placeholder="E.G Digital Marketing Specialist."
                          className="shadow-none"
                        />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Profile Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Tell us summary about your skills and how you want to be known as a worker."
                          className="shadow-none"
                          required
                          name="description"
                        />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group controlId="formEmpTypess">
                        <Form.Label>Highest Educational Attainment</Form.Label>
                        <Form.Select
                          aria-readonly="true"
                          defaultValue="Select Degree"
                          className="shadow-none"
                          name="job_type"
                          required
                        >
                          <option>Select Degree</option>
                          <option>High School Diploma</option>
                          <option>Bachelor Degree</option>
                          <option>Associate Degree</option>
                        </Form.Select>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group controlId="formEmpTypess">
                        <Form.Label>Looking For</Form.Label>
                        <Form.Select
                          aria-readonly="true"
                          defaultValue="Full Time"
                          className="shadow-none"
                          name="job-types"
                          required
                        >
                          <option>Full Time</option>
                          <option>Part Time</option>
                          <option>Gig </option>
                        </Form.Select>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group controlId="formPersonname">
                        <Form.Label>Enter BirthDate</Form.Label>
                        <Form.Control
                          type="text"
                          name="jobseeker_BirthDate"
                          required
                          className="shadow-none"
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group controlId="kindOfStand">
                      <Form.Label>Gender</Form.Label>
                        <Form.Check
                          value="male"
                          type="radio"
                          aria-label="radio 1"
                          label="Male"
                        />
                        <Form.Check
                          value="female"
                          type="radio"
                          aria-label="radio 2"
                          label="Female"
                        />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Yes I’m willing to use"
                      />
                    </Form.Group>

                    <div className="text-center">

                    <Link className="step-btns"  to="/rateskill" >
                    Next
                </Link>
                    
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateProfileJobseeker;
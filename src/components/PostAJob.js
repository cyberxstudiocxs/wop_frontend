
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

const PostAJob = () => {
  return (
    <div>
      <section className="postjob-main">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-12">
              <h3 className="Talent-heading"> Post a Job</h3>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-lg-10 m-auto">
              <div className="postjob-outer-box">
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formJobTitle">
                      <Form.Label>Job Title</Form.Label>
                      <Form.Control type="text" name="jobtitle"      placeholder="What do you need ?"   className="shadow-none" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formEmpTypess">
                      <Form.Label>Type Of Employment</Form.Label>
                      <Form.Select
                        aria-readonly="true"
                        defaultValue="Pakistan"
                        className="shadow-none"
                      >
                        <option>FULL</option>
                        <option>ANY</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Job Description</Form.Label>
                    <Form.Control as="textarea" rows={3}     placeholder="Describe the job to be done "className="shadow-none" />
                  </Form.Group>
                  </Row>

                  <Row className="mb-3">
                   
                  <Form.Group  as={Col} controlId="formPersonEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          required
                          type="email"
                          placeholder="Enter E-Mail"
                          name="email"
                          className="shadow-none"
                        
                        />
                       
                      </Form.Group>
                    <Form.Group as={Col} controlId="formPersonname">
                      <Form.Label>Contact Person</Form.Label>
                      <Form.Control type="text" name="personname"    className="shadow-none" />
                    </Form.Group>

                   
                  </Row>
                  <Row className="mb-3">

                  <Form.Group as={Col} controlId="formSalary">
                      <Form.Label>Salary</Form.Label>
                      <Form.Control type="text" name="salary"    className="shadow-none" />
                    </Form.Group>


              
                      </Row>
                <h3> Job Skills</h3>
                <Row className="mb-3">
                      <Form.Group as={Col} controlId="formPrimarySkill">
                      <Form.Label>Primary Skill</Form.Label>
                      <Form.Select
                        aria-readonly="true"
                        defaultValue="Pakistan"
                        className="shadow-none"
                      >
                        <option>Select Primary Skill</option>
                        <option>ANY</option>
                        <option>FULL</option>
                      </Form.Select>
                    </Form.Group>

                    </Row>

                    <Row className="mb-3">

                    <Form.Group as={Col} controlId="formPrimarySkill">
                      <Form.Label>Secondary Skill 1</Form.Label>
                      <Form.Select
                        aria-readonly="true"
                        defaultValue="Pakistan"
                        className="shadow-none"
                      >
                        <option>Select Secondary Skill 1</option>
                        <option>ANY</option>
                        <option>FULL</option>
                      </Form.Select>
                    </Form.Group>
</Row>

<Row className="mb-3">
                    <Form.Group as={Col} controlId="formPrimarySkill2">
                      <Form.Label>Select Primary Skill 2</Form.Label>
                      <Form.Select
                        aria-readonly="true"
                        className="shadow-none"
                        defaultValue="Pakistan"
                      >
                        <option>Select Primary Skill 2</option>
                        <option>ANY</option>
                        <option>FULL</option>
                      </Form.Select>
                    </Form.Group>
</Row>
                 
                </Form>
              </div>

              <div className="text-center">
                <Link className="reviewss" type="submit" to="/succesfullypostsubmit"> Submit For Review   </Link>
           

              </div>
            </div>
          </div>

        </div>

        <div className="container pb-5">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="middle-box">
              <p>
                We {"’"} re here to help! If you need any assistance with the
                registration process, please don't hesitate to reach out to us.
                Our team is able to provide guidance and support to ensure a
                smooth and hassle-free experience.
              </p>
            
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default PostAJob;

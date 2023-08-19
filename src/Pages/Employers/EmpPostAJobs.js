import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const EmpPostAJobs = () => {
  const location = useLocation();
  const [jobtypes, setJobTypes] = useState([]);
  const [user, setUser] = useState();
  const [isEditJob, setIsEditJob] = useState(false);
  const [skills, setSkills] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [successMsg, setSuccessMsg] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);
  const [errorMsg, setErrorMsg] = React.useState(false);
  const [errormodal, setErrorModal] = React.useState(false);
  const errortoggle = () => setErrorModal(!errormodal);
  const navigat = useNavigate();
  const [editjob, setEditJob] = useState();
  const [job, setJob] = useState({
    title: "",
    job_type: null,
    description: "",
    salary: "",
    job_link:'',
    email: "",
    location: "Islamabad",
    contact_person: "",
    primary_skill: null,
    secondary_skill1: null,
    secondary_skill2: null,
    employer_id: null,
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      var decoded = jwt_decode(localStorage.getItem("token"));
      console.log(decoded.result);
      setUser(decoded.result);
    } else {
      setUser();
    }

    setJob({
      ...job,
      employer_id: decoded.result.id,
    });

    axios
      .get(`https://api.zalimburgers.com/wop-api/jobtypes`)
      .then((res) => {
        setJobTypes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`https://api.zalimburgers.com/wop-api/skills`)
      .then((res) => {
        setSkills(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    if (location.state) {
      setIsEditJob(true);
      setEditJob({
        ...editjob,
        ["location"]: "Islamabad",
      });
      setJob({
        ...job,
        ["location"]: "Islamabad",
      });
      //https://api.zalimburgers.com
      axios
        .get(
          `https://api.zalimburgers.com/wop-api/joblistings/${location.state.id}`
        )
        .then((res) => {
          res.data.data["job_type"] = res.data.data.job_type_id;
          res.data.data["primary_skill"] = res.data.data.primary_skill_id;
          res.data.data["secondary_skill1"] = res.data.data.secondary_skill1_id;
          res.data.data["secondary_skill2"] = res.data.data.secondary_skill2_id;
          setJob(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });

    if (isEditJob) {
      setEditJob({
        ...editjob,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSpinner(true);
    console.log("handle subbmit");
    let field_status = false;
    let fields = "";
    job.location = "Islamabad";
    Object.keys(job).map((key) => {
      if (!job[key] && key!="job_link") {
        fields = fields + " " + key.split("_");
        field_status = true;
      }
    });

    if (field_status) {
      console.log("fields", fields);
      console.log("job post data", job);
      setSpinner(false);
      setErrorMsg(`Please Add the ${fields} fields`);
      errortoggle();
    } else {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      //https://api.zalimburgers.com
      if (!isEditJob) {
        axios
          .post(`https://api.zalimburgers.com/wop-api/joblistings`, job, config)
          .then((res) => {
            if (res.data.success === 1) {
              setSpinner(false);
              setSuccessMsg(res.data.message);
              navigat("/succesfullypostsubmit");
              toggle();
            } else {
              setSpinner(false);
              setErrorMsg(res.data.message);
              errortoggle();
            }
          })
          .catch((err) => {
            setSpinner(false);
            setErrorMsg(err.response.data.message);
            errortoggle();
            console.log(err);
          });
      } else {
        handleEdit();
      }
    }
  };

  const handleEdit = () => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    //https://api.zalimburgers.com
    axios
      .put(
        `https://api.zalimburgers.com/wop-api/joblistings/${location.state.id}`,
        editjob,
        config
      )
      .then((res) => {
        if (res.data.success === 1) {
          setSpinner(false);
          setSuccessMsg(res.data.message);
          navigat("/succesfullypostsubmit");
          toggle();
        } else {
          setSpinner(false);
          setErrorMsg(res.data.message);
          errortoggle();
        }
      })
      .catch((err) => {
        setSpinner(false);
        setErrorMsg(err.response.data.message);
        errortoggle();
        console.log(err);
      });
  };

  return (
    <div>
      <section className="postjob-main">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <h3 className="Talent-heading"> Post a Job</h3>
            </div>
          </div>
          <div className="space2"></div>

          <div className="row ">
            <div className="col-lg-10 m-auto ">
              <div className="middle-jobpostt">
                <h5> Create a Free Job Post Now!</h5>
                <p>
                  {" "}
                  With our free account, you can easily manage and view job
                  applications, giving you the opportunity to gauge if the
                  applicants are suitable for your needs. Take advantage of this
                  amazing opportunity and post your job now to get the right
                  worker for your project.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="space2"></div>
          <div className="row ">
            <div className="col-lg-10 m-auto">
              <div className="postjob-outer-box">
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formJobTitle">
                      <Form.Label>Job Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="title"
                        required
                        placeholder="Enter the job title you are hiring for."
                        className="shadow-none"
                        onChange={(e) => handleChange(e)}
                        value={job.title}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formEmpTypess">
                      <Form.Label>Type Of Employment</Form.Label>
                      <Form.Select
                        aria-readonly="true"
                        defaultValue="Pakistan"
                        className="shadow-none"
                        name="job_type"
                        required
                        value={job.job_type}
                        onChange={(e) => handleChange(e)}
                      >
                        <option>Select</option>
                        {jobtypes.map((type) => (
                          <option value={type.id}>{type.description}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                     
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Job Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Provide a detailed description of the job responsibilities, requirements, and any other relevant information "
                        className="shadow-none"
                        required
                        name="description"
                        value={job.description}
                        onChange={(e) => handleChange(e)}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formSalary">
                      <Form.Label>Apply Job Link</Form.Label>
                      <Form.Control
                        type="text"
                        name="job_link"
                        className="shadow-none"
                        
                        value={job.job_link}
                        onChange={(e) => handleChange(e)}
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formPersonEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter E-Mail"
                        name="email"
                        className="shadow-none"
                        value={job.email}
                        onChange={(e) => handleChange(e)}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formPersonname">
                      <Form.Label>Contact Person</Form.Label>
                      <Form.Control
                        type="text"
                        name="contact_person"
                        required
                        value={job.contact_person}
                        className="shadow-none"
                        onChange={(e) => handleChange(e)}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formSalary">
                      <Form.Label>Wage/Salary</Form.Label>
                      <Form.Control
                        type="text"
                        name="salary"
                        className="shadow-none"
                        required
                        value={job.salary}
                        onChange={(e) => handleChange(e)}
                      />
                    </Form.Group>
                  </Row>
                  <h3> Job Skills Information</h3>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formPrimarySkill">
                      <Form.Label>Primary Skill</Form.Label>
                      <Form.Select
                        aria-readonly="true"
                        defaultValue="Pakistan"
                        className="shadow-none"
                        required
                        name="primary_skill"
                        value={job.primary_skill}
                        onChange={(e) => handleChange(e)}
                      >
                        <option>Select Primary Skill</option>
                        {skills.map((skill) => (
                          <option value={skill.id}>{skill.description}</option>
                        ))}
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
                        required
                        name="secondary_skill1"
                        value={job.secondary_skill1}
                        onChange={(e) => handleChange(e)}
                      >
                        <option>Select Secondary Skill 1</option>
                        {skills.map((skill) => (
                          <option value={skill.id}>{skill.description}</option>
                        ))}
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
                        name="secondary_skill2"
                        required
                        value={job.secondary_skill2}
                        onChange={(e) => handleChange(e)}
                      >
                        <option>Select Primary Skill 2</option>
                        {skills.map((skill) => (
                          <option value={skill.id}>{skill.description}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Row>

                  <div className="text-center">
                    <Button className="loginbtn" type="submit">
                      {spinner && (
                        <span
                          class="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      )}
                      Submit For Review
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>

        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="middle-box  postajob">
                <h3> Find Solutions to Your Hiring Challenges!</h3>
                <p>
                  Team Work Online Pakistan is here to assist you with your
                  queries and concerns. Connect with our staff to get the
                  support you need to simplify your hiring with WOP!
                </p>

                <Link className="account-setting-btns" to="/contactus">
                  Contact Support Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Success</ModalHeader>
        <ModalBody>
          <>!{successMsg}</>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            OK
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={errormodal} toggle={errortoggle}>
        <ModalHeader toggle={errortoggle}>Error</ModalHeader>
        <ModalBody>
          <>!{errorMsg}</>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={errortoggle}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EmpPostAJobs;

import { Link, Router } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch, BsFillArrowRightCircleFill } from "react-icons/bs";
import Select from "react-select";
import { useState, useEffect } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import ReactStars from "react-rating-stars-component";
import jwt_decode from "jwt-decode";
import axios from "axios";

const RateYourSkils = () => {
  const [skills, setSkills] = useState([]);
  const [jobseekerSkills, setJobSeekerSkills] = useState([]);
  const [user, setUser] = useState();
  const [msg, setMsg] = useState("");
  const [newSkill, setNewSkill] = useState({
    jobseeker_id: null,
    skill_id: null,
    skill_period: "Less than 6 month",
    proficiency: "",
    experience: "",
  });
  const [options, setOptions] = useState([]);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const handleChange = (choice) => {
    setNewSkill({
      ...newSkill,
      ["skill_id"]: choice.value,
    });
    toggle();
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      var decoded = jwt_decode(localStorage.getItem("token"));
      setUser(decoded.result);
      console.log("dec", decoded.result);
      setNewSkill({
        ...newSkill,
        ["jobseeker_id"]: decoded.result.id,
      });
    }

    axios
      .get(`https://api.zalimburgers.com/wop-api/skills`)
      .then((res) => {
        setSkills(res.data.data);
        let list = [];
        res.data.data.map((it) => {
          list.push({ value: it.id, label: it.description });
        });
        setOptions(list);
      })
      .catch((err) => console.log(err));

      axios
      .get(`https://api.zalimburgers.com/wop-api/jobseekers/skills/${decoded.result.id}`)
      .then((res) => {
        setJobSeekerSkills(res.data.data);
      })
      .catch((err) => console.log(err));
      
  }, []);

  // rating stars
  const ratingChanged = (newRating) => {
    console.log(newRating);
    setMsg("");
    setNewSkill({
      ...newSkill,
      ["proficiency"]: newRating + " " + "star",
      ["jobseeker_id"]: user.id,
    });
  };

  const handleSkillChange = (e) => {
    setNewSkill({
      ...newSkill,
      [e.target.name]: e.target.value,
    });
  };

  const addSkill = (e) => {
    if (!newSkill.proficiency) {
      setMsg("Please rate your skill");
      e.preventDefault();
    } else {
      axios
        .post(
          `https://api.zalimburgers.com/wop-api/jobseekers/addSkill`,
          newSkill
        )
        .then((res) => {
          toggle();
          window.location.reload()
        })
        .catch((err) => console.log(err));
    }
  };
  //
  return (
    <div>
      <section className="jobseeekr-steps">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="leftsdiebar-jobseeekr">
                <Link className="sidebar-btns" to="/jobseekercreateprofile">
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

                    <Select
                      options={options}
                      placeholder="Search Skill"
                      onChange={(choice) => handleChange(choice)}
                    />
                  </InputGroup>
                </div>
                {jobseekerSkills && (
                  <>
                    {jobseekerSkills.map((skill) => (
                      <div className="SkilssShow-box">
                        <BsFillArrowRightCircleFill />
                        <p>{skill.description}</p>
                      </div>
                    ))}
                  </>
                )}
                {jobseekerSkills.length > 0 && (
                  <Link className="step-btns" to="/jobseekerdashbaord">
                    Next
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="emp-box"></ModalHeader>
        <h3 className="emp-heading"> Add SKill</h3>
        <ModalBody>
          <Form>
            <Row className="mb-3">
              <Form.Group controlId="formSkillTypes">
                <Form.Label>EXPERIENCE LEVEL FOR THIS SKILL </Form.Label>
                <Form.Select
                  aria-readonly="true"
                  defaultValue="Select Time Period"
                  className="shadow-none"
                  name="skill_period"
                  required
                  onChange={(e) => handleSkillChange(e)}
                >
                  <option value="Less than 6 month" selected>
                    Less than 6 month{" "}
                  </option>
                  <option value="One Year">One Year</option>
                  <option value="Two Year">Two Year</option>
                  <option value="Three Year">Three Year</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <div className="ratingstar">
              <label> RATE SKILL PROFICIENCY </label>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
              {msg && <p style={{ color: "red" }}>{msg}</p>}
            </div>

            <Row className="mb-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextareatwo"
              >
                <Form.Label>DESCRIBE YOUR EXPERIENCE (OPTIONAL)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Tell us summary about your skills and how you want to be known as a worker."
                  className="shadow-none"
                  onChange={(e) => handleSkillChange(e)}
                  name="experience"
                />
              </Form.Group>
            </Row>

            <div className="text-center">
              <Button className="step-btns" onClick={addSkill}>
                Save
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default RateYourSkils;

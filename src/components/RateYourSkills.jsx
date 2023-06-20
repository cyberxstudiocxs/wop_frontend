import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";
import Select from "react-select";
import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import ReactStars from "react-rating-stars-component";

const RateYourSkils = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "Mangoo", label: "Mangoo" },
    { value: "Apple", label: "Apple" },
  ];

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const handleChange = () => {
    toggle();
  };

  // rating stars
  const ratingChanged = (newRating) => {
    console.log(newRating);
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
                      onChange={() => handleChange()}
                    />
                  </InputGroup>
                </div>

                <Link className="step-btns" to="/">
                  Next
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="emp-box"></ModalHeader>
        <h3 className="emp-heading"> 3D Animation</h3>
        <ModalBody>
          <Form>
            <Row className="mb-3">
              <Form.Group controlId="formSkillTypes">
                <Form.Label>EXPERIENCE LEVEL FOR THIS SKILL </Form.Label>
                <Form.Select
                  aria-readonly="true"
                  defaultValue="Select Degree"
                  className="shadow-none"
                  name="job_type"
                  required
                >
                  <option selected>Less than 6 month </option>
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
                  required
                  name="descriptionskill"
                />
              </Form.Group>
            </Row>

            <div className="text-center">
              <Link className="step-btns">Save</Link>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default RateYourSkils;

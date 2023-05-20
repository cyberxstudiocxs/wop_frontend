
import "../styles/manageprofile.css";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from 'react';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const ManageProfile = () => {
  const [empprfile, setState] = useState({
    id: null,
    business_name: "",
    email: "",
    fullname: "",
    address: "",
    city: "",
    country: "",
    phone: "",
    profile_photo: "",
    website: "",
  });

  const [updateEmp, updatEemps] = useState();
  const [user, setUser] = useState();
  const [config, setConfig] = useState();

//   const { business_name, fullname, city, address, country, phone, website } =
//     empprfile;

    useEffect(() => {
       if (localStorage.getItem("token")) {

            var decoded = jwt_decode(localStorage.getItem("token"));
            setUser(decoded.result);
            const confii={
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                  },
            }
          setConfig(confii)
         
        axios
        .get(
          `http://localhost:8080/wop-api/employers/getUserProfile/${decoded.result.id}`,confii
        )
        .then((result) => {
            console.log(result.data,config)
            setState(result.data.data)
        }).catch(err=>console.log(err))
    }else{

    }
     
    }, []) 
  const handleInputChange = (e) => {
    setState({ ...empprfile, [e.target.name]: e.target.value });
    updatEemps({ ...updateEmp, [e.target.name]: e.target.value });
  };

  const handleSubmit=(e)=>{
     e.preventDefault();
     axios
     .put(
       `http://localhost:8080/wop-api/employers/updateProfile/${user.id}`,
       updateEmp,config
     )
     .then((result) => {
         alert(result.data.message)
     }).catch(err=>{
        alert(err.response.data.message)
        console.log(err)
     })
  }
  // const [fileName, setFileName] = useState("");
  return (
    <div>
      {user ?
      <section className="main-outer-profile-">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="profile-box">
                <h3> Profile Information</h3>
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridBusinessName">
                      <Form.Label>Business Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={empprfile.business_name?empprfile.business_name:""}
                        name="business_name"
                        onChange={handleInputChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCname">
                      <Form.Label>Contact Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={empprfile.fullname?empprfile.fullname:""}
                        name="fullname"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      placeholder="1234 Main St"
                      value={empprfile.address?empprfile.address:""}
                      name="address"
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        value={empprfile.city?empprfile.city:""}
                        name="city"
                        onChange={handleInputChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCountry">
                      <Form.Label>Country</Form.Label>
                      <Form.Select
                        aria-readonly="true"
                        disabled="true"
                        defaultValue="Pakistan"
                      >
                        <option>PAKISTAN</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPhone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        value={empprfile.phone?empprfile.phone:""}
                        name="phone"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridWebsite">
                      <Form.Label>Website</Form.Label>
                      <Form.Control
                        type="text"
                        value={empprfile.website?empprfile.website:""}
                        name="website"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Row>

                  <Button variant="primary" type="submit">
                    Save Profile Infomation
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>:"Loading"
}
    </div>
  );
};

export default ManageProfile;

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from 'reactstrap';
const JobseekerAccountSetting =()=>{
    return(
        <div>
 <section>
<div className="container">
      <div className="row ">
        <div className="col-lg-6 m-auto inner-box-one">
          <div className="outer-box ">
            <div className="inner-box ">
            <h3 className="emp-heading">UPDATE LOGIN INFO </h3>
           
              <Form>
                <Form.Group className="mb-3" controlId="jobseeekremail">
                  <Form.Label>Email address</Form.Label>
                <InputGroup className="outer-inputss mb-3">
               
                 
                  <Form.Control
                    type="email"
                    
                    name="email"
                    className="shadow-none"
                 
                  />
                 
                </InputGroup>
                 
                </Form.Group>

                <Form.Group className="mb-3" controlId="jobseekercurrentPassword">
                  <Form.Label> Cuurent Password</Form.Label>

                  <InputGroup className="outer-inputss  mb-3">
               
                 
                  <Form.Control
                    type="password"
                    name="currentpassword"
                    className="shadow-none"
                  
                  />
                  
                </InputGroup>
                 
                     
                </Form.Group>


                <Form.Group className="mb-3" controlId="jobseekerPassword">
                  <Form.Label> Password</Form.Label>

                  <InputGroup className="outer-inputss  mb-3">
               
                 
                  <Form.Control
                    type="password"
                    name="password"
                    className="shadow-none"
                  
                  />
                  
                </InputGroup>
                 
                     
                </Form.Group>
                <div className="text-center my-3">
                  <Button
                    variant="primary"
                    type="submit"
                    className="loginbtn"
                  
                  >
               
                    
                    Update
                  </Button>
                </div>
               
              </Form>
            </div>
          </div>
        </div>
      </div>

     

   
    </div>
    </section>
        </div>
    )
}


export default JobseekerAccountSetting
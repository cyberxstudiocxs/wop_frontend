import { FaBuffer ,FaFileCsv,FaRecycle} from "react-icons/fa";
import { useState,useEffect } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const EmpDashoBard = () => {
  
  const [name,setName]=useState()
  useEffect(() => {
  var decoded = jwt_decode(localStorage.getItem('token'));
  
   setName(decoded.result.full_name)
  },[])
  // const [users, setUsers] = useState([]);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="row">
            <h3> Hello , {name}</h3>

            {/* {users.map((user) => (
                
                 
                 {user.fullname}
                 
                
              ))} */}
          </div>
        </div>
      </div>

      <div className="container-fluid">
          <div className="row pt-5">
            <div className="col-lg-3 quick-box">
              <div className="quick-box1">

              <   FaFileCsv   size='2.5rem' />
     
                <h3> Quick search for talented resumes</h3>
                <Link className="more-skillss">Post A Job</Link>
              </div>
            </div>

            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
              <     FaBuffer  size='2.5rem'/>
                <h3> Find the right worker through skill you need.</h3>
                <Link className="more-skillss">Advanced Search</Link>
              </div>
            </div>

            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
                <FaRecycle size='2.5rem' />
                <h3> Read case studies from our valued customers</h3>
                <Link className="more-skillss">Browse Profile</Link>
              </div>
            </div>

            <div className="col-lg-3 quick-box">
              <div className="quick-box1">
              <  BsFillCameraFill size='2.5rem' />
                <h3> A quick Video on how to get started with onlinejobs.pk</h3>
                <Link className="more-skillss">Contact For Support </Link>
              </div>
            </div>
          </div>
        </div>

      <div className="container p-5">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="middle-box">
              <h5>Ready to Attract Top Talent for Your Project with WOP?</h5>
              <p>
                {" "}
                Check out our comprehensive guide to WOP job postings and take
                the first step towards finding the perfect candidate for your
                job opening!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpDashoBard;

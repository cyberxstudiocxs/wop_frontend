import { Link } from "react-router-dom";
import { FaBuffer ,FaFileCsv,FaRecycle} from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import "../../styles/accountsetting.css";

const EmpAccountSetting = () => {
  return (
    <div>
      <section className="Accontsettig-box">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="Talent-heading"> Account Setting </h3>
            </div>
          </div>

          <div className="row p-5">
            <div className="col-lg-12">
              <div className="outer-accout">
                <h6> Account Details & Billing</h6>

                <div className="account-outer-box">
                  <div className="parallel-box">
                    <h5> Profile Information </h5>
                    <Link className="more-skillss"> Change Email/Password</Link>
                  </div>

                  <div className="parallel-box">
                    <h5> Account Security </h5>
                    <Link className="more-skillss" to="/manageprofile">
                      {" "}
                      Manage Profile
                    </Link>
                  </div>

                  <div className="parallel-box">
                    <h5> Billing Information </h5>
                    <Link className="more-skillss">Biliing Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

       
        </div>

        <div className="container-fluid">
          <div className="row pb-5">
            <div className="col-lg-12">
              <h3 className="Talent-heading">Quick Links </h3>
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
                <h5> We More Help ?</h5>
                <p>
              
                Check out our FAQs now to get answers to some common queries about our platform, and get back to focusing on what really matters – building your dream team!

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpAccountSetting;

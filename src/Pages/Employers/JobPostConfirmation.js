import { useNavigate } from "react-router-dom";

const JobPostConfirmation =() =>{
  const navigat = useNavigate();
  
  const postjob=()=>{
   navigat('/postjob')
  }
  
  const dashboard=()=>{
    navigat('/empdashhboard')
  }

    return(
        <div >
<section className="contact-us-main">
      <div className="container ">
        <div className="row">
          <div className="col-lg-12">
            <div className="contactus">
            <i class="fa fa-check-square fa-5x mb-5" aria-hidden="true"  ></i>
              <h2> Awesome , you have successfully <br></br> submitted a job request !</h2>
               {/* <p>    Your job post will be MODERATED within 48 hours.</p>
               <p>  Note:You can create 1 more job posts for this month.</p> */}

               <div className="actionss-box pt-3">
                  <button type="button" className="talent-btnss" onClick={()=>postjob()}>
                    post a new job
                  </button>
                  <button type="button" className="Delete-btnss" onClick={()=>dashboard()}>
                    Back to dashboard
                  </button>
                </div>
            </div>
          </div>
        </div>
        </div>
        </section>
        </div>
    )
}

export default JobPostConfirmation
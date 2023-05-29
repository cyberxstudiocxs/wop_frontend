import "../../styles/joblisting.css"


const EmpJobListing = () => {
  return (
    <div>
      <section className="Accontsettig-box">
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="successfully-box ">
                <h3> Jobs Posted </h3>
                <p>
                
                  The job post will stay up for as long as you have an active
                  account or untill you delete the job posting.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg p-3 col-md p-3 col-sm p-2"></div>
          <div className="row">
            <div className="col-lg-10 m-auto">
                <div className="table-box-outer" >
              <div className="head-tablesss">
                <div className="post-heading">
                  <h5> JOB POSTS</h5>
                </div>

                <div className="actionss-box">
                  <button type="button" className="talent-btnss">
                    Add New Post
                  </button>
                  <button type="button" className="Delete-btnss">
                    Deleted Posts
                  </button>
                </div>
              </div>
              <div className="table-responsive">  
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th> #</th>
                    <th>Job Title</th>
                    <th>Job Descripition </th>
                    <th >Applicants </th>
                    <th>Hits </th>
                    <th > Ststus</th>
                    <th>Date Posted </th>
                    <th >Actions </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th >1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>Otto</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpJobListing;

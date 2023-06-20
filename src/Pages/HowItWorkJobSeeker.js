import "../styles/aboutus.css";
import { Link } from "react-router-dom";
const HowItWorkJobSeeker = () => {
  return (
    <div>
      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-inner">
                <h3> Frequently Asked Questions - Job Seekers WOP</h3>

                <p>
                  This extensive list of FAQs to make sure that using our
                  platform is seamless for you. Please get in touch with us if
                  you can't find the solution to your query here; we will be
                  pleased to help.
                </p>

                <p>Before we get started, Please read the FAQ's below.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="aboutfaq-inner">
                <div class="container">
                  <div id="accordion" class="accordion">
                    <div class="card mb-0">
                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        href="#collapseOne"
                      >
                        <a class="card-title">
                          How Can I Verify My Job Seeker Account?
                        </a>
                      </div>
                      <div
                        id="collapseOne"
                        class="card-body collapse"
                        data-parent="#accordion"
                      >
                        <p>
                          To verify your job seeker account, you will need to
                          submit the required documents for verification.
                          Verification through valid CNIC, and proof of address
                          is mandatory, whereas phone number verification is
                          mandatory. Once we receive and verify these documents,
                          your account will be verified.
                        </p>
                      </div>
                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                      >
                        <a class="card-title">
                          Is There Any Registration Fee or Additional Commission
                          Charged by Job Seekers on WOP?
                        </a>
                      </div>
                      <div
                        id="collapseTwo"
                        class="card-body collapse"
                        data-parent="#accordion"
                      >
                        <p>
                          No, WOP does not charge any registration fees or
                          additional commission from job seekers for using its
                          platform. It is completely free for job seekers to
                          create a profile, search for jobs, and apply to job
                          postings.
                        </p>
                      </div>
                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseThree"
                      >
                        <a class="card-title">
                          What Happens If I Deactivate My Account?
                        </a>
                      </div>
                      <div
                        id="collapseThree"
                        class="collapse"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          If you deactivate your account, your profile will no
                          longer be visible on our platform, and you will no
                          longer receive any job recommendations or updates.
                          Additionally, you will not be able to apply for any
                          new jobs or receive any payments from employers.
                        </div>
                      </div>

                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFour"
                      >
                        <a class="card-title">
                          What Happens If I Provide Fake Information?
                        </a>
                      </div>
                      <div
                        id="collapseFour"
                        class="collapse"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Your account may be terminated if you supply false
                          information, and you risk losing any available
                          employment prospects. For the recruiting process to go
                          smoothly and successfully, it is crucial to submit
                          accurate and true information.
                        </div>
                      </div>

                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFive"
                      >
                        <a class="card-title">
                          How Can I Secure an Employment on WOP?
                        </a>
                      </div>
                      <div
                        id="collapseFive"
                        class="collapse"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          To secure employment on WOP, we recommend creating a
                          complete and impressive profile that showcases your
                          job-related skills, work experience, and educational
                          background. Once your profile is complete, you can
                          start searching for suitable job openings and apply
                          for them. The recruiters will assess your application
                          to determine if you are the perfect fit for the job
                          role. To improve your chances of success, make sure
                          your profile appropriately depicts your qualifications
                          and expertise.
                        </div>
                      </div>

                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseSix"
                      >
                        <a class="card-title">
                          How to Know If a Job Posting or Employer is
                          Legitimate?
                        </a>
                      </div>
                      <div
                        id="collapseSix"
                        class="collapse"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          In order to keep our platform free of scams, WOP
                          rigorously evaluates and analyses companies and job
                          advertisements to assure their validity. You may,
                          however, conduct your own investigation and examine
                          the employer's information, including their website,
                          social media profiles, and reviews.
                        </div>
                      </div>

                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseSeven"
                      >
                        <a class="card-title">
                          How Do I Know If I Qualify for a Job or Not?
                        </a>
                      </div>
                      <div
                        id="collapseSeven"
                        class="collapse"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Employers have their specific qualifications and
                          requirements for each job opening. You can check the
                          job description to see if you meet the qualifications
                          and apply accordingly.
                        </div>
                      </div>

                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseEight"
                      >
                        <a class="card-title">Do I Need to Take Tests?</a>
                      </div>
                      <div
                        id="collapseEight"
                        class="collapse"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Not all job postings require tests, and it depends on
                          the employer's requirements. However, some employers
                          may require you to take tests to assess your skills
                          and qualifications. Take your time to read the job
                          description to learn more about any required tests.
                        </div>
                      </div>

                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseNine"
                      >
                        <a class="card-title">
                          Why Are Some Jobs Not Showing Up in Job Searches?
                        </a>
                      </div>
                      <div
                        id="collapseNine"
                        class="collapse"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          There could be a few reasons why a job is not
                          appearing in search results or saved jobs. There is a
                          possibility that the job has already been filled, and
                          the employer has hired another applicant for the
                          position. In some cases, the employer may have decided
                          to remove the job posting entirely. Please don't
                          hesitate to contact our support staff for more help if
                          you have any worries or inquiries regarding a job that
                          you can't find..
                        </div>
                      </div>

                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTen"
                      >
                        <a class="card-title">Is WOP a Business Opportunity?</a>
                      </div>
                      <div
                        id="collapseTen"
                        class="collapse"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          No, WOP serves purely as a platform for virtual
                          employment possibilities by bringing together
                          companies and job seekers. It serves as a venue for
                          both job searchers and companies to collaborate for
                          several job positions. WOP does not provide its users
                          with any franchises or business possibilities.
                        </div>
                      </div>
                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse4Last"
                      >
                        <a class="card-title">
                        How Long Do I Have to Wait After Applying for a Job?


</a>
                      </div>
                      <div
                        id="collapse4Last"
                        class="collapse"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                        The waiting time after applying for a job posting on WOP varies depending on the employer's hiring process. Some employers may contact you immediately after applying, while others may take a few weeks or even months to review applications and schedule interviews. It's best to stay patient and continue to apply for other job postings in the meantime.




                        </div>
                      </div>

                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse3Last"
                      >
                        <a class="card-title">Is There Any Job Interview Prior to the Finalization of the Agreement?

</a>
                      </div>
                      <div
                        id="collapse3Last"
                        class="collapse"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                        Yes, some employers on WOP may conduct a job interview to assess the suitability of the candidate for the job role before finalizing the agreement.



                        </div>
                      </div>


                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapse2Last"
                      >
                        <a class="card-title">Can I Apply for a Job If I am an Overseas Pakistani?
</a>
                      </div>
                      <div
                        id="collapse2Last"
                        class="collapse"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                        Yes, you can apply for jobs listed on WOP as an overseas Pakistani. However, you must ensure that you meet the requirements specified by the employer, such as language proficiency and a work permit.


                        </div>
                      </div>

                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseLast"
                      >
                        <a class="card-title">Do You Allow Workers from Other Countries?
</a>
                      </div>
                      <div
                        id="collapseLast"
                        class="collapse"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                        No, WOP is specifically designed for Pakistani workers to find employment opportunities. However, international businesses can post jobs and projects on the platform, providing Pakistani workers with access to global job opportunities.

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space2"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="middle-box  updateaccountsetting">
                <h5> Still Having Queries?</h5>
                <p>
                  Let us help you out! Contact our support team for personalised
                  assistance and get the answers you need to start your journey
                  with WOP today.
                </p>

                <Link className="account-setting-btns"  to="/contactus">
                Contact Us

                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorkJobSeeker;

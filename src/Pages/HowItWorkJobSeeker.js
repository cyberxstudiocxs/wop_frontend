import "../styles/aboutus.css";

const HowItWorkJobSeeker = () => {
  return (
    <div>
      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-inner">
                <h3> How It Works - Jobseeker</h3>

                <p>
                  With today's technology, it is super easy to be hired by
                  companies abroad and then do the job from the comfort of your
                  own home with your family. At OnlineJobs.ph we'll help you
                  explore online job opportunities and earn a living.
                </p>
                <p>
                  {" "}
                  All jobs will be salaried, full-time or part-time, work from
                  home jobs. NONE of the jobs are commission based!
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
                        <a class="card-title">How do I get paid?</a>
                      </div>
                      <div
                        id="collapseOne"
                        class="card-body collapse"
                        data-parent="#accordion"
                      >
                        <p>
                          It really depends on what you and your employer have
                          agreed upon. Normally you will get paid either every 2
                          weeks or once a month. However, we do recommend that
                          workers ask to be paid weekly when they are first
                          hired to limit their risk of working with a new
                          employer
                        </p>
                      </div>
                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                      >
                        <a class="card-title">Are you sure I qualify?</a>
                      </div>
                      <div
                        id="collapseTwo"
                        class="card-body collapse"
                        data-parent="#accordion"
                      >
                        <p>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </p>
                      </div>
                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseThree"
                      >
                        <a class="card-title">How do I know this is legit?</a>
                      </div>
                      <div
                        id="collapseThree"
                        class="collapse"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Well...you probably won't, until you try it. We've
                          helped thousands of Filipinos get jobs with Foreign
                          companies, and helped them work from home.
                          OnlineJobs.ph is the largest Philippine job posting
                          board, and it wouldn’t have been possible to grow to
                          #1 by not being legit.
                        </div>
                      </div>

                      <div
                        class="card-header collapsed"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFour"
                      >
                        <a class="card-title">How do I know this is legit?</a>
                      </div>
                      <div
                        id="collapseFour"
                        class="collapse"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Well...you probably won't, until you try it. We've
                          helped thousands of Filipinos get jobs with Foreign
                          companies, and helped them work from home.
                          OnlineJobs.ph is the largest Philippine job posting
                          board, and it wouldn’t have been possible to grow to
                          #1 by not being legit.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorkJobSeeker;

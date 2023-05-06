import { Link, useNavigate } from "react-router-dom";

const AccountSetting = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className='Talent-heading'> Account Setting </h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <h5> Account Details & Billing</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="account-outer-box">
                            <div className="parallel-box">
                                <h5>  Profile Information </h5>
                                <Link className="more-skillss"> Change Email/Password</Link>
                            </div>

                            <div className="parallel-box">
                                <h5>  Account Security </h5>
                                <Link className="more-skillss"> Manage Profile</Link>
                            </div>

                            <div className="parallel-box">
                                <h5>  Billing Information </h5>
                                <Link className="more-skillss">Biliing Details</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className='Talent-heading'>Quick Links </h3>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="quick-box">
                            <h3> Quick search for talented resumes</h3>
                            <Link className="more-skillss">Search Talent</Link>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="quick-box">
                            <h3> Find  the right worker through skill you need.</h3>
                            <Link className="more-skillss">See More Skills</Link>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="quick-box">
                            <h3> Read case studies from our valued customers</h3>
                            <Link className="more-skillss">Read More</Link>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="quick-box">
                            <h3> A quick Video on how to get started with onlinejobs.pk</h3>
                            <Link className="more-skillss">Watch Video</Link>
                        </div>
                    </div>
                </div>
            </div>
             

            <div className="container p-5">
                <div className="row">
                    <div className="col-lg-12 m-auto">
                        <div className="middle-box">


                            <p> We’ re here to help! If you need any assistance with the registration process, please don't hesitate to  reach out to us. Our team is able to provide guidance and support to ensure a smooth and hassle-free experience.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default AccountSetting
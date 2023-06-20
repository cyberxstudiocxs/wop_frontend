import { Link } from "react-router-dom";
const TermOfUse = () => {
  return (
    <div>
      <section className="contact-us-main">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <div className="termsofuses">
                <h3>Terms of Use - Work Online Pakistan </h3>
                <p>
                  {" "}
                  WOP is committed to bridging the gap between Pakistani job
                  seekers and global clients and businesses. Our platform serves
                  as a virtual marketplace where businesses can connect with top
                  talent in Pakistan for their virtual work needs. Our “Terms of
                  Use” outlines the terms and conditions that govern your use of
                  our website and services. By accessing and using our platform,
                  you agree to comply with these terms. Please read these terms
                  carefully before using our services.
                </p>

                <h5> Our Services</h5>
                <p>
                  Our offerings include software-assisted recruiting processes,
                  job searches, and job applications. For successful
                  communication and collaboration between employers and workers,
                  we also provide a virtual workspace. Please be aware that
                  while we only offer our services to people from Pakistan,
                  foreign clients and companies are free to use our platform to
                  hire Pakistani workers.
                </p>

                <h5> Our Registration Terms</h5>
                <p>
                  You must create an account on our platform in order to enjoy
                  our services. By signing up, you certify that the data you
                  supply is true and correct and that your account information
                  is kept secure. To create an account, you must be at least 18
                  years old. If WOP suspects any fraudulent behaviour or abuse
                  of our platform, we retain the right to suspend or delete your
                  account.
                </p>

                <h5> Privacy Statement</h5>
                <p>
                  WOP is committed to protecting your privacy. We collect
                  personal information from you to provide our services and
                  improve our platform's user experience. We will not disclose
                  or share your personal information with any third party unless
                  required by law or authorised by you. Please read our{" "}
                  <Link to="/privacypolicy "  style={{ color: '#000', fontWeight:'500', }}>Privacy  Policy </Link>
                   for more information on how we collect, use, and
                  protect your personal information.
                </p>

                <h5>Account Information and Security</h5>
                <p>
                  You are responsible for maintaining the confidentiality and
                  security of your account information, including your username
                  and password. You agree to notify WOP immediately of any
                  unauthorized use of your account or any other breach of
                  security.
                </p>

                <h5>Payment and Billing</h5>
                <p>
                  WOP does not charge job seekers for using our platform.
                  However, we do charge businesses that choose to acquire top
                  talent from Pakistan through our platform. Our payment and
                  billing details are outlined in our pricing. If you are an
                  employer, contact us if you need more information regarding
                  our recruitment services.
                </p>

                <h5>Refund Policy</h5>
                <p>
                  Businesses may be eligible for reimbursements from WOP in
                  certain situations. A company may ask for a refund if it is
                  dissatisfied with the calibre of the work completed by a job
                  seeker within a given time limit. Refunds will only be given
                  at WOP's discretion. Businesses won't be given refunds for any
                  other cause. Contact our customer care team if you have any
                  queries or worries regarding your payment.
                </p>

                <h5>User Intellectual Property Ownership</h5>
                <p>
                  You own the intellectual property rights to any content you
                  submit to our platform, such as your resume or job
                  application. By submitting content to our platform, you grant
                  WOP a non-exclusive, worldwide, royalty-free, perpetual,
                  irrevocable, and sub-licensable license to use, reproduce,
                  modify, adapt, publish, translate, create derivative works,
                  distribute, perform, and display such content.
                </p>
                <h5>Termination</h5>
                <p>
                  For any reason, including but not limited to a violation of
                  our terms of usage, WOP retains the right to suspend or cancel
                  your account or access to our platform at any time and without
                  prior warning or responsibility. Additionally, you can
                  terminate your account at any moment by getting in touch with
                  us. All assets and content you published to our site will be
                  removed when your account is terminated.
                </p>

                <h5>Dispute Resolution</h5>
                <p>
                  Any disputes arising from the use of our platform will be
                  resolved through binding arbitration in accordance with the
                  rules of the Pakistan International Arbitration Centre. The
                  arbitration will take place in Pakistan and will be conducted
                  in English. Each party will bear their own costs and expenses
                  of the arbitration, and the parties will share equally the
                  fees charged by the arbitration provider.
                </p>

                <h5>Indemnification</h5>
                <p>
                  You agree to indemnify and hold harmless WOP, its affiliates,
                  and their respective officers, directors, employees, and
                  agents from any claims, damages, liabilities, costs, and
                  expenses arising from your use of our platform or any content
                  you submit to our platform.
                </p>

                <h5>Limitation of Liability</h5>
                <p>
                  If you use our platform or violate any of these terms of use,
                  WOP, its officers, directors, employees, or agents are not
                  responsible for any direct, indirect, incidental, special, or
                  consequential damages. The utmost extent permissible by law
                  shall be complied with by this restriction of liability.
                </p>

                <h5>Disclaimer</h5>
                <p>
                  WOP provides our platform "as is" and makes no warranties,
                  express or implied, regarding the accuracy, reliability, or
                  completeness of the information provided. We do not guarantee
                  that our platform will be error-free or uninterrupted. WOP
                  shall not be liable for any direct, indirect, incidental,
                  special, or consequential damages arising out of or in
                  connection with your use of our platform.
                </p>

                <h5>Notices</h5>
                <p>
                  Any notices or communications related to these terms of use
                  should be made in writing and delivered to      <a href="mailto: support@workonlinepk.com.">  support@workonlinepk.com.</a> 
                  Notices sent to this email address
                  will be considered received when the email delivery
                  confirmation is received. If you do not agree to these terms,
                  please do not use our platform. We reserve the right to modify
                  these terms at any time, and it is your responsibility to
                  review them periodically. If you have any questions or
                  concerns, please do not hesitate to contact us at
                  <a href="mailto: hello@workonlinepk.com."> hello@workonlinepk.com.</a>   
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermOfUse;

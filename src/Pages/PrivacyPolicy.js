import { Link } from "react-router-dom";
const PrivacyPolicay = () => {
  return (
    <div>
      <section className="contact-us-main">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <div className="termsofuses">
                <h3>Privacy Policy - Work Online Pakistan</h3>
                <p>
                  At WOP, we understand the importance of privacy and are
                  committed to protecting your information. This Privacy Policy
                  envisages the types of information we collect, how we utilise
                  it, and the measures we take to keep it secure. By using our
                  platform, you consent to agree to the terms stated in this
                  policy.
                </p>

                <h5>Personal Information</h5>
                <p>
                  When you register with WOP, we collect your personal
                  information, including your name, contact information, and
                  work preferences. We use this information to match with
                  appropriate employment opportunities and to get in touch with
                  you about your account and pertinent job openings. In order to
                  confirm your identity, we may also gather other data, such as
                  identification papers.
                </p>

                <h5> Email</h5>
                <p>
                  Your email address is an important communication channel
                  between WOP and you. We seek your approval to use your email
                  address to send you job alerts, promotional messages, and
                  updates regarding your account. If you prefer not to get these
                  alerts, you can easily unsubscribe at any moment.
                </p>

                <h5> Non-personal Information</h5>
                <p>
                  When you interact with our virtual work platform, we may
                  automatically collect non-personal information such as device
                  type and browser version etc. The information gathered is
                  utilised to enhance our platform's functionality and user
                  experience. You may relax knowing that your personal
                  information is not connected to this information.IP Address To
                  ensure the security of your account and prevent unauthorised
                  access, we collect your IP address, which is solely used for
                  security purposes and is not linked to your personal
                  information. .
                </p>

                <h5>Cookies Policy</h5>
                <p>
                  Our platform uses cookies to improve your experience on our
                  platform, and they are stored on your device and allow us to
                  collect non-personal information about your device and
                  browsing behaviour. You may disable cookies for our platform
                  by configuring your browser settings, but this may impact
                  certain features of our platform.
                </p>

                <h5>Activity Monitoring and Legal Requests</h5>
                <p>
                  In order to maintain compliance with our{" "}
                  <Link
                    to="/termsofuse "
                    style={{ color: "#000", fontWeight: "500" }}
                  >
                   Terms of Use{" "}
                  </Link>{" "}
                   and prevent fraudulent activity, we may monitor
                  your activity on our platform. We may also disclose your data
                  to valid legal requests, such as subpoenas or court orders.
                </p>

                <h5>Third-party Access</h5>
                <p>
                  We maintain the security and confidentiality of your data and
                  do not disclose or sell it to any third parties except when it
                  is necessary to deliver our services or as required by law. On
                  certain occasions, we may share your information with our
                  trusted partners, such as payment processors and background
                  check providers, solely to facilitate the smooth provision of
                  our services.
                </p>

                <h5>Unauthorised Usage</h5>
                <p>
                  We take reasonable measures to prevent unauthorised access to
                  your account and personal information. However, no method of
                  online data transmission or storage is completely secure. In
                  the event of a data breach, we will promptly notify you and
                  take appropriate steps to mitigate any potential risks.
                </p>
                <h5>Contact Information</h5>
                <p>
                  If you have any questions, concerns, or requests regarding our
                  Privacy Policy or your personal information, please reach out
                  to us at   <a href="mailto:hello@workonlinepk.com">  hello@workonlinepk.com</a>   This Privacy Policy is
                  subject to periodic updates in accordance with changes in our
                  practices, technological advancements, and legal obligations.
                  We recommend reviewing this Privacy Policy periodically to
                  stay informed about our privacy practices and any updates that
                  may impact you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicay;

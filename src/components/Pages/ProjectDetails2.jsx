import React from "react";
import { Link } from "react-router-dom";
import AltNavigation from "../Navigation/AltNavigation";
import projectImg2 from "../../assets/images/project-details2.png";
import Footer from "../Common/Footer";

class ProjectDetails extends React.Component {
  render() {
    return (
      <>
        <AltNavigation />

        {/* <!-- Start Page Title Area --> */}
        <section className="page-title-area uk-page-title">
          <div className="uk-container">
            <h1>Project Details</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Project Details</li>
            </ul>
          </div>
        </section>
        {/* <!-- End Page Title Area --> */}

        {/* <!-- Start Project Details Area --> */}
        <section className="project-details-area uk-project-details uk-section">
          <div className="uk-container">
            <div className="uk-grid uk-flex project-details">
              <div className="project-details-img uk-width-expand">
                <img src={projectImg2} alt="project" />
              </div>

              <div className="item uk-width-1-5">
                <div className="project-details-info">
                  <ul>
                    <li>
                      <span>Customer Name:</span> Veraspec
                    </li>
                    <li>
                      <span>Category:</span> Linkedn Social Media Management
                    </li>
                    <li>
                      <span>Date:</span> Since 2023
                    </li>
                    <li>
                      <span>Status:</span> Ongoing
                    </li>
                    <li>
                      <span>Social Media Link:</span>{" "}
                      <Link to="https://www.linkedin.com/company/veraspec/">
                        Veraspec
                      </Link>
                    </li>
                    <li>
                      <span>Tags:</span> <Link to="#">Art</Link>,{" "}
                      <Link to="#">Social Media Management</Link>
                    </li>
                    <li>
                      <span>Share:</span>

                      <ul>
                        <li>
                          <Link to="https://www.facebook.com/veraspec.global">
                            <i className="flaticon-logo"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="https://www.instagram.com/veraspec_global/?fbclid=IwAR0b4eyi0iObdMUvMSvmxFULW7JOGc0zEWXOxx4ne9TRxFvzGx1CH79DT9o">
                            <i className="flaticon-logo-1"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="https://www.linkedin.com/company/veraspec/">
                            <i className="flaticon-linkedin"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-details-desc">
              <h3>SMM Package</h3>
              <p>
                At Veraspec, we specialize in the artistry of glass and façade
                solutions, redefining architectural possibilities with our
                unwavering commitment to excellence. With a fusion of innovation
                and precision, we transform spaces into breathtaking showcases
                of modern design. Step into a world where clarity meets
                creativity, as our team of experts meticulously craft bespoke
                solutions tailored to your unique vision. From stunning glass
                installations that capture the essence of sophistication to
                cutting-edge façade designs that seamlessly blend form and
                function, our craftsmanship knows no bounds. With a keen eye for
                detail and a dedication to quality, we deliver more than just
                structures; we create experiences. Our passion for perfection
                drives us to push the boundaries of possibility, ensuring that
                every project exceeds expectations and leaves a lasting
                impression. Whether you're seeking to elevate the aesthetic
                appeal of your commercial space or enhance the functionality of
                your residential property, Veraspec is your trusted partner in
                realizing your architectural dreams. Let us bring your vision to
                life with precision, professionalism, and unparalleled
                expertise.
              </p>

              <blockquote className="blockquote">
                <p>
                  Transform your online presence with our comprehensive Social
                  Media Management package. Tailored to suit your brand's unique
                  needs, our services include strategic content creation,
                  community engagement, analytics tracking, and monthly
                  performance reports. Let us amplify your digital presence and
                  drive meaningful connections with your audience. Get in touch
                  today for a personalized quote and take your social media game
                  to the next level.
                </p>
              </blockquote>

              <p>
                Unlock the full potential of your brand's online presence with
                our expert Social Media Management service. From crafting
                engaging content to strategic audience engagement, we'll elevate
                your social media game, boost brand awareness, and drive
                meaningful interactions. Let us handle the digital front while
                you focus on what you do best. Elevate your social media
                presence with us today
              </p>
            </div>

            <div className="project-next-and-prev">
              <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
                <div className="item">
                  <Link to="/project-details" className="uk-button uk-button-default">
                    Prev Project
                  </Link>
                </div>

                {/* <div className="item uk-text-right">
                  <Link to="#" className="uk-button uk-button-default">
                    Next Project
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default ProjectDetails;

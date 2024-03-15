import React from "react";
import { Link } from "react-router-dom";
import AltNavigation from "../Navigation/AltNavigation";
import projectImg3 from "../../assets/images/project-details3.PNG";
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
                <img src={projectImg3} alt="project" />
              </div>

              <div className="item uk-width-1-5">
                <div className="project-details-info">
                  <ul>
                    <li>
                      <span>Customer Name:</span> i-Gadgets
                    </li>
                    <li>
                      <span>Category:</span> Website Development
                    </li>
                    <li>
                      <span>Date:</span> 01/24/2024
                    </li>
                    <li>
                      <span>Status:</span> Finished
                    </li>
                    <li>
                      <span>Social Media Link:</span>{" "}
                      <Link to="https://i-gadgets.ph/">i-Gadgets</Link>
                    </li>
                    <li>
                      <span>Tags:</span> <Link to="#">Development</Link>,{" "}
                      <Link to="#">Web</Link>
                    </li>
                    <li>
                      <span>Share:</span>

                      <ul>
                        <li>
                          <Link to="https://www.facebook.com/ph.igadgets">
                            <i className="flaticon-logo"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-details-desc">
              <h3>Web Development</h3>
              <p>
                Step into the world of iGadgets, where innovation meets style
                and technology intertwines seamlessly with your lifestyle.
                Nestled in the heart of the city, iGadgets is your go-to
                destination for the latest and most coveted iPhone accessories
                and gadgets. Explore our curated selection of premium products,
                meticulously handpicked to complement and enhance your iPhone
                experience. From sleek cases that provide both protection and
                style to cutting-edge gadgets that push the boundaries of what
                your iPhone can do, iGadgets offers a diverse range of options
                to suit every need and taste. At iGadgets, we pride ourselves on
                providing more than just products; we offer an unparalleled
                shopping experience. Our knowledgeable and passionate staff are
                here to assist you every step of the way, offering expert advice
                and personalized recommendations to help you find the perfect
                accessory or gadget for your iPhone. Whether you're looking to
                amp up your productivity, express your individuality, or simply
                stay ahead of the curve, iGadgets has you covered. Discover the
                perfect blend of form, function, and flair at iGadgets, and take
                your iPhone to new heights of style and functionality.
              </p>

              <blockquote className="blockquote">
                <p>
                  "Empower your digital presence with our tailored web
                  development services. From sleek and responsive designs to
                  robust backend functionality, we craft websites that
                  captivate, engage, and convert. Whether you're launching a
                  brand-new site or revamping an existing one, our team of
                  experts is here to bring your vision to life. Let's build
                  something extraordinary together. Request a quote today."
                </p>
              </blockquote>

              <p>
                Transform your online presence with our expert web development
                services. We specialize in crafting visually stunning,
                user-friendly websites that drive results. From concept to
                launch, we'll bring your digital vision to life, ensuring it
                stands out in today's competitive landscape. Elevate your brand
                with our web solutions. Let's build your success story, together
              </p>
            </div>

            <div className="project-next-and-prev">
              <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
                <div className="item">
                  <Link
                    to="/project-details"
                    className="uk-button uk-button-default"
                  >
                    Prev Project
                  </Link>
                </div>

                <div className="item uk-text-right">
                  <Link to="/project-details" className="uk-button uk-button-default">
                    Next Project
                  </Link>
                </div>
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

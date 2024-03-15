import React from "react";
import { Link } from "react-router-dom";
import AltNavigation from "../Navigation/AltNavigation";
import projectImg from "../../assets/images/project-details.png";
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
                <img src={projectImg} alt="project" />
              </div>

              <div className="item uk-width-1-5">
                <div className="project-details-info">
                  <ul>
                    <li>
                      <span>Customer Name:</span> Skytrax Superclub
                    </li>
                    <li>
                      <span>Category:</span> Social Media Management
                    </li>
                    <li>
                      <span>Date:</span> since 2022
                    </li>
                    <li>
                      <span>Status:</span> In Progress
                    </li>
                    <li>
                      <span>Social Media Link:</span>{" "}
                      <Link to="https://www.facebook.com/SkytraxSuperclub">
                        Skytrax Superclub
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
                          <Link to="https://www.facebook.com/SkytraxSuperclub">
                            <i className="flaticon-logo"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="flaticon-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="flaticon-logo-1"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
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
                Step into a realm of unparalleled extravagance and immerse
                yourself in the pulsating heart of nightlife luxury at Skytrax.
                Nestled in the heart of the city, Skytrax is more than just a
                club; it's an experience that transcends the ordinary and
                elevates the nocturnal adventure to celestial heights. As you
                approach the sleek, futuristic exterior, the anticipation
                builds, hinting at the wonders that await within. Step through
                the doors and be greeted by a mesmerizing fusion of cutting-edge
                design and opulent decor, where every detail is meticulously
                crafted to transport you to a realm of unparalleled
                sophistication. The atmosphere crackles with energy as the
                state-of-the-art sound system pumps out an electrifying mix of
                beats, setting the stage for an unforgettable night of revelry.
                Lose yourself on the expansive dance floor, where a sea of
                glamorous party-goers moves in perfect harmony under a canopy of
                shimmering lights. For those seeking a more intimate experience,
                plush VIP booths beckon, offering exclusive access to the
                ultimate in luxury and privacy. Sip on handcrafted cocktails
                expertly crafted by master mixologists, each sip a tantalizing
                journey for the senses. But Skytrax is more than just a
                nightclub; it's a destination for the discerning connoisseur of
                nightlife. From extravagant themed events featuring
                world-renowned DJs and performers to immersive multimedia
                experiences that blur the lines between reality and fantasy,
                every night at Skytrax is a spectacle to behold. Join us at
                Skytrax, where the night meets the stars, and indulge in an
                experience that transcends the ordinary and embraces the
                extraordinary.
              </p>

              <blockquote className="blockquote">
                <p>
                  "Unlock the potential of your brand's story with our tailored
                  social media management solutions. Let's make every post a
                  conversation starter and every interaction a meaningful
                  connection. Elevate your online presence with us today.
                  #SocialMediaMagic #ConnectEngageGrow"
                </p>
              </blockquote>

              <p>
                Empower your brand's online presence with our expert social
                media management service. From captivating content creation to
                strategic engagement, we'll elevate your brand's digital
                footprint and spark meaningful connections with your audience.
                Let's tell your story, together.
              </p>
            </div>

            <div className="project-next-and-prev">
              <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
                <div className="item">
                  <Link to="/project-details-3" className="uk-button uk-button-default">
                    Prev Project
                  </Link>
                </div>

                <div className="item uk-text-right">
                  <Link to="/project-details-2" className="uk-button uk-button-default">
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

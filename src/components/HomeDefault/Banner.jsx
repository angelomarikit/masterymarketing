import React from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

class Banner extends React.Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };
  render() {
    return (
      <>
        <div id="home" className="uk-banner uk-dark main-banner item-bg2">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="uk-container">
                <div className="main-banner-content">
                  <h1>
                  Marketing Solutions for <br /> Success
                  </h1>
                  <p>
                    We trust on innovation and that help us to succeed in
                    future! Our team is innovative and interested to learn your
                    project to offer the best solutions from out of the box!
                  </p>
                  <a href="#contact" className="uk-button uk-button-default">
                    Get Started
                  </a>

                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      this.openModal();
                    }}
                    to="#"
                    className="video-btn popup-youtube"
                  >
                    <span uk-icon="play"></span> Watch Video
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="ldbXhDEc9y4"
          onClose={() => this.setState({ isOpen: false })}
        />
      </>
    );
  }
}

export default Banner;

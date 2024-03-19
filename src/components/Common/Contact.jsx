import React from "react";
import { Link } from "react-router-dom";
import "isomorphic-fetch";
import mapImg from "../../assets/images/map2.png";
import emailjs from '@emailjs/browser';
import "react-toastify/dist/ReactToastify.css";

class Contact extends React.Component {
  state = {
    submitting: false,
    submitted: true,
    buttonState: "",
    formFields: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      text: "",
    },
  };

  onSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_lb0xxdb', 'template_3nf9wn3', e.target, '-ReblTzuj1DI3oIxL');
  };

  nameChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.name = e.target.value;
    this.setState({ formFields });
  };

  emailChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.email = e.target.value;
    this.setState({ formFields });
  };

  phoneChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.phone = e.target.value;
    this.setState({ formFields });
  };

  subjectChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.subject = e.target.value;
    this.setState({ formFields });
  };

  textChangeHandler = (e) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.text = e.target.value;
    this.setState({ formFields });
  };

  onHideSuccess = () => {
    this.setState({ submitted: false });
  };

  successMessage = () => {
    if (this.state.submitted) {
      return (
        <div className="alert-success" uk-alert-success>
          <Link
            to="#"
            onClick={this.onHideSuccess}
            className="uk-alert-close"
            uk-close="true"
          ></Link>
          <h3>Thank you</h3>
          <p>We will connect you soon.</p>
        </div>
      );
    }
  };

  render() {
    return (
      <>
        <section
          id="contact"
          className="contact-area uk-dark uk-contact uk-section"
        >
          <div className="uk-container">
            <div className="uk-section-title section-title">
              <span>Let's Talk</span>
              <h2>Get in Touch</h2>
            </div>

            <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
              <div className="item">
                <div className="map-img">
                  <img src={mapImg} alt="map" />

                  <div className="location uk-location1">
                    <Link to="#" className="active">
                      <div className="location-info">
                        <h5>New York</h5>
                        <span>198 Collective Street</span>
                      </div>
                    </Link>
                  </div>

                  <div className="location uk-location2">
                    <Link to="#">
                      <div className="location-info">
                        <h5>London</h5>
                        <span>357/71 Collective Street</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="item">
                <form id="contactForm" onSubmit={this.onSubmit}>
                  <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                    <div className="item uk-margin">
                      <input
                        type="text"
                        className="uk-input"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={this.state.formFields.name}
                        onChange={this.nameChangeHandler}
                        required={true}
                      />
                    </div>

                    <div className="item uk-margin">
                      <input
                        type="email"
                        className="uk-input"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={this.state.formFields.email}
                        onChange={this.emailChangeHandler}
                        required={true}
                      />
                    </div>

                    <div className="item uk-margin">
                      <input
                        type="text"
                        className="uk-input"
                        id='Phone'
                        placeholder="Phone"
                        value={this.state.formFields.phone}
                        onChange={this.phoneChangeHandler}
                        required={true}
                      />
                    </div>

                    <div className="item uk-margin">
                      <input
                        type="text"
                        className="uk-input"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        value={this.state.formFields.subject}
                        onChange={this.subjectChangeHandler}
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="item">
                    <textarea
                      name="message"
                      className="uk-textarea"
                      id="message"
                      cols="30"
                      rows="4"
                      placeholder="Your Message"
                      value={this.state.formFields.text}
                      onChange={this.textChangeHandler}
                      required={true}
                    />
                  </div>

                  <button type="submit" className="uk-button uk-button-default">
                    Submit Message
                  </button>
                  {this.successMessage()}
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;

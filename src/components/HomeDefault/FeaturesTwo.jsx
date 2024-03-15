import React from 'react';
 
class FeaturesTwo extends React.Component {
    render(){
        return (
            <section className="uk-features uk-dark features-area uk-section uk-padding-remove-top">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m">
                        <div className="uk-item">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="flaticon-mail"></i>
                                </div>
                                <h3>Email Marketing</h3>
                                <div className="bar"></div>
                                <p>Seamlessly connect with your audience through personalized messages and compelling content. From captivating subject lines to optimized send times, we empower you to connect with your audience like never before. Maximize engagement, nurture leads, and build enduring connections effortlessly.</p>

                                <div className="dot-img">
                                    <img src={require("../../assets/images/dot.png")} alt="dot" className="color-dot" />
                                    <img src={require("../../assets/images/white-dot.png")} alt="dot" className="white-dot" />
                                </div>

                                {/* <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                </div> */}
                            </div>
                        </div>

                        <div className="uk-item">
                            <div className="single-features-box active">
                                <div className="icon">
                                    <i className="flaticon-targeting"></i>
                                </div>
                                <h3>Market Analysis</h3>
                                <div className="bar"></div>
                                <p>Delve into market trends, consumer behavior, and competitor strategies to inform your business decisions. From identifying untapped opportunities to mitigating risks, our comprehensive analysis equips you with the knowledge to make informed choices and drive growth. Unlock the power of data-driven decision-making to grow your business forward.</p>

                                <div className="dot-img">
                                    <img src={require("../../assets/images/dot.png")} alt="dot" className="color-dot" />
                                    <img src={require("../../assets/images/white-dot.png")} alt="dot" className="white-dot" />
                                </div>

                                {/* <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                </div> */}
                            </div>
                        </div>

                        <div className="uk-item">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="flaticon-magnifying-glass"></i>
                                </div>
                                <h3>Keyword Research</h3>
                                <div className="bar"></div>
                                <p>Refine your online strategy with our Keyword Research segment. Utilize strategic keyword analysis to boost your search engine visibility and attract targeted traffic. Our thorough research ensures you stay ahead in your industry, reaching your audience effectively. Gain valuable insights to enhance your online performance and achieve your business objectives.</p>

                                <div className="dot-img">
                                    <img src={require("../../assets/images/dot.png")} alt="dot" className="color-dot" />
                                    <img src={require("../../assets/images/white-dot.png")} alt="dot" className="white-dot" />
                                </div>

                                {/* <div className="animation-img">
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape2.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape1.svg")} alt="shape" />
                                    <img src={require("../../assets/images/shape3.svg")} alt="shape" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default FeaturesTwo;
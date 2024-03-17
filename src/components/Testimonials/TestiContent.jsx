import React from 'react';
 
class TestiContent extends React.Component {
    render(){
        return (
            <section className="testimonials-area uk-testimonials uk-section bg-gray">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                        <div className="testimonials-item">
                            <div className="testimonials-single-item">
                                <p>Working with the Marketing Mastery Agency has been a game-changer for our business. Their strategic insights and proactive approach have significantly boosted our online presence. As the CEO of a growing tech startup, I highly recommend their services.</p>
                            </div>

                            <div className="quotation-profile">
                                <img src={require("../../assets/images/client1.png")} alt="testimonial" />

                                <div className="profile-info">
                                    <h3>John Randall</h3>
                                    <span>CEO of Tech Innovations Inc</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonials-item">
                            <div className="testimonials-single-item">
                                <p>Marketing Mastery Agency has exceeded our expectations at every turn. Their comprehensive approach to digital marketing, coupled with their commitment to delivering measurable results, sets them apart from the rest. We're grateful for their partnership and look forward to achieving even greater success together!</p>
                            </div>

                            <div className="quotation-profile">
                                <img src={require("../../assets/images/client2.png")} alt="testimonial" />

                                <div className="profile-info">
                                    <h3>Mark</h3>
                                    <span>Marketing Director of Retail Brand</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonials-item">
                            <div className="testimonials-single-item">
                                <p>I've been amazed by the results achieved through Marketing Mastery Agency’s campaigns. Their attention to detail and dedication to our brand's success have been instrumental in driving our online sales. As the Marketing Director of a leading e-commerce company, I confidently endorse their services.</p>
                            </div>

                            <div className="quotation-profile">
                                <img src={require("../../assets/images/client3.png")} alt="testimonial" />

                                <div className="profile-info">
                                    <h3>Sarah Johnson</h3>
                                    <span>Marketing Director of ShopSmart Inc.</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonials-item">
                            <div className="testimonials-single-item">
                                <p>The team at Marketing Mastery Agency has been a trusted partner in our journey to enhance our online visibility. Their expertise in SEO and digital advertising has helped us achieve top rankings and increase our website traffic. We highly recommend their services to any business looking to amplify their online presence!</p>
                            </div>

                            <div className="quotation-profile">
                                <img src={require("../../assets/images/client4.png")} alt="testimonial" />

                                <div className="profile-info">
                                    <h3>Jessica</h3>
                                    <span>CEO of Healthcare Startup</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonials-item">
                            <div className="testimonials-single-item">
                                <p>Working with Marketing Mastery Agency has been a game-changer for our small business. Their personalized strategies and hands-on approach have helped us connect with our target audience in meaningful ways. We've seen a significant improvement in our online presence and couldn't be happier with the results!</p>
                            </div>

                            <div className="quotation-profile">
                                <img src={require("../../assets/images/client5.png")} alt="testimonial" />

                                <div className="profile-info">
                                    <h3>Amanda</h3>
                                    <span>Owner of Local Bakery</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonials-item">
                            <div className="testimonials-single-item">
                                <p>Marketing Mastery Agency has been instrumental in helping us navigate the complexities of digital marketing. Their tailored solutions and proactive approach have led to a noticeable increase in leads and conversions. We're grateful for their expertise and commitment to our success!</p>
                            </div>

                            <div className="quotation-profile">
                                <img src={require("../../assets/images/client6.png")} alt="testimonial" />

                                <div className="profile-info">
                                    <h3>Michael</h3>
                                    <span>Co-founder of SaaS Company</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default TestiContent;
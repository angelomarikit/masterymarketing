import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import ModalVideo from 'react-modal-video';

import woman from '../../assets/images/women.jpg';
import shapeImg from '../../assets/images/1.png';

const options = {
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-right'></i>"
    ],
}
 
class Testimonials extends React.Component {

    state = {
        isOpen: false
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render(){
        return (
            <section id="clients" className="feedback-area uk-dark uk-section uk-feedback">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                        <div className="item">
                            <div className="feedback-img">
                                <img src={woman} alt="Testimonials" />

                                <img src={shapeImg} className="shape-img" alt="Testimonials" />

                                <Link 
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                    to="#" 
                                    className="video-btn popup-youtube">
                                        <i className="flaticon-multimedia"></i> Watch Video
                                </Link>
                            </div>
                        </div>

                        <ModalVideo 
                            channel='youtube' 
                            isOpen={this.state.isOpen} 
                            videoId='ldbXhDEc9y4' 
                            onClose={() => this.setState({isOpen: false})} 
                        />

                        <div className="item">
                            <div className="feedback-inner">
                                <div className="uk-section-title section-title">
                                    <span>What Client Says About US</span>
                                    <h2>Our Testimonials</h2>
                                    <div className="bar"></div>
                                </div>

                                <OwlCarousel 
                                    className="feedback-slides owl-carousel owl-theme"
                                    {...options}
                                >
                                    <div className="single-feedback">
                                        <i className="flaticon-quote"></i>
                                        <p>Working with the Marketing Mastery Agency has been a game-changer for our business. Their strategic insights and proactive approach have significantly boosted our online presence. As the CEO of a growing tech startup, I highly recommend their services.</p>

                                        <div className="client">
                                            <h3>John Randall</h3>
                                            <span>CEO of Tech Innovations Inc</span>
                                        </div>
                                    </div>

                                    <div className="single-feedback">
                                        <i className="flaticon-quote"></i>
                                        <p>I've been amazed by the results achieved through Marketing Mastery Agency’s campaigns. Their attention to detail and dedication to our brand's success have been instrumental in driving our online sales. As the Marketing Director of a leading e-commerce company, I confidently endorse their services.</p>

                                        <div className="client">
                                            <h3>Sarah Johnson</h3>
                                            <span>Marketing Director of ShopSmart Inc</span>
                                        </div>
                                    </div>

                                    <div className="single-feedback">
                                        <i className="flaticon-quote"></i>
                                        <p>Partnering with Marketing Mastery Agency has been invaluable for our digital marketing efforts. Their expertise in SEO and social media management has helped us reach new heights in customer engagement and brand visibility. As the CMO of a global hospitality chain, I can attest to the impact they've had on our business.</p>

                                        <div className="client">
                                            <h3>David Lee</h3>
                                            <span>CMO of StayWise Hotels</span>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Testimonials;
import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import teamOne from '../../assets/images/team1.jpg';
import teamTwo from '../../assets/images/team2.jpg';
import teamThree from '../../assets/images/team3.jpg';
import teamFour from '../../assets/images/team10.png';
import teamFive from '../../assets/images/team11.png';

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 15,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        786: {
            items: 2
        },
        1200: {
            items: 5
        }
    }
}
 
class Team extends React.Component {
    render(){
        return (
            <>
                <section id="team" className="team-area uk-dark uk-team uk-section">
                    <div className="uk-container">
                        <div className="uk-section-title section-title">
                            <span>Meet Our Experts</span>
                            <h2>Our Team</h2>
                            <div className="bar"></div>

                            <Link to="/team" className="uk-button uk-button-default">View All</Link>
                        </div>
                    </div>

                    <OwlCarousel 
                        className="team-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-team">
                            {/* <ul className="team-social">
                                <li><a href="#" target="_blank"><i className="flaticon-logo"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-linkedin"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-logo-1"></i></a></li>
                            </ul> */}

                            <img src={teamOne} alt="team" />

                            <div className="team-content">
                                <h3>Maria Matarelli</h3>
                                <span>Co-Founder</span>
                            </div>
                        </div>

                        <div className="single-team">
                            {/* <ul className="team-social">
                                <li><a href="#" target="_blank"><i className="flaticon-logo"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-linkedin"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-logo-1"></i></a></li>
                            </ul> */}

                            <img src={teamTwo} alt="team" />

                            <div className="team-content">
                                <h3>Darby Beenken</h3>
                                <span>Co-Founder</span>
                            </div>
                        </div>

                        <div className="single-team">
                            {/* <ul className="team-social">
                                <li><a href="#" target="_blank"><i className="flaticon-logo"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-linkedin"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-logo-1"></i></a></li>
                            </ul> */}

                            <img src={teamThree} alt="team" />

                            <div className="team-content">
                                <h3>Carousel Teves</h3>
                                <span>HR Manager</span>
                            </div>
                        </div>

                        <div className="single-team">
                            {/* <ul className="team-social">
                                <li><a href="#" target="_blank"><i className="flaticon-logo"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-linkedin"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-logo-1"></i></a></li>
                            </ul> */}

                            <img src={teamFour} alt="team" />

                            <div className="team-content">
                                <h3>Angelo Marikit</h3>
                                <span>Executive Assistant</span>
                            </div>
                        </div>

                        <div className="single-team">
                            {/* <ul className="team-social">
                                <li><a href="#" target="_blank"><i className="flaticon-logo"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-linkedin"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-logo-1"></i></a></li>
                            </ul> */}

                            <img src={teamFive} alt="team" />

                            <div className="team-content">
                                <h3>John Philip Hernandez</h3>
                                <span>Digital Sales</span>
                            </div>
                        </div>

                        {/* <div className="single-team">
                            <ul className="team-social">
                                <li><a href="#" target="_blank"><i className="flaticon-logo"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-linkedin"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-logo-1"></i></a></li>
                            </ul>

                            <img src={teamOne} alt="team" />

                            <div className="team-content">
                                <h3>Josh Buttler</h3>
                                <span>Content Writter</span>
                            </div>
                        </div> */}
                    </OwlCarousel>
                </section>
            </>
        );
    }
}
 
export default Team;
import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import project1 from '../../assets/images/project1.jpg';
import project2 from '../../assets/images/project2.jpg';
import project3 from '../../assets/images/project3.jpg';
import project4 from '../../assets/images/project4.jpg';
import project5 from '../../assets/images/project5.jpg';
const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 30,
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
            items: 4
        }
    }
}
 
class Project extends React.Component {
    render(){
        return (
            <>
                <section id="project" className="project-area uk-dark uk-project uk-section">
                    <div className="uk-container">
                        <div className="uk-section-title section-title">
                            <span>Our Completed Projects</span>
                            <h2>Recent Projects</h2>
                            <div className="bar"></div>

                            <Link to="/project-details" className="uk-button uk-button-default">All Projects</Link>
                        </div>
                    </div>

                    <OwlCarousel 
                        className="project-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-project">
                            <Link to="/project-details" className="project-img">
                                <img src={project1} alt="Project" />
                            </Link>

                            <div className="project-content">
                                <h3><Link to="/project-details">Development</Link></h3>
                                <ul>
                                    <li><Link to="#">Web</Link></li>
                                    <li><Link to="#">Mobile</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="single-project">
                            <Link to="/project-details" className="project-img">
                                <img src={project4} alt="Project" />
                            </Link>

                            <div className="project-content">
                                <h3><Link to="/project-details">Email Marketing</Link></h3>
                                <ul>
                                    <li><Link to="#">Campaign</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="single-project">
                            <Link to="/project-details" className="project-img">
                                <img src={project3} alt="Project" />
                            </Link>

                            <div className="project-content">
                                <h3><Link to="/project-details">UX/UI Design</Link></h3>
                                <ul>
                                    <li><Link to="#">Web</Link></li>
                                    <li><Link to="#">Mobile</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="single-project">
                            <Link to="/project-details" className="project-img">
                                <img src={project5} alt="project" />
                            </Link>

                            <div className="project-content">
                                <h3><Link to="/project-details">Keyword Research</Link></h3>
                                <ul>
                                    <li><Link to="#">SEO</Link></li>
                                    <li><Link to="#">Performance</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="single-project">
                            <Link to="/project-details" className="project-img">
                                <img src={project2} alt="project" />
                            </Link>

                            <div className="project-content">
                                <h3><Link to="/project-details">Social Media Management</Link></h3>
                                <ul>
                                    <li><Link to="#">Instagram</Link></li>
                                    <li><Link to="#">Facebook</Link></li>
                                    <li><Link to="#">Tiktok</Link></li>
                                </ul>
                            </div>
                        </div>
                    </OwlCarousel>
                </section>
            </>
        );
    }
}
 
export default Project;
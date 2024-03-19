import React from 'react';
import { Link } from 'react-router-dom';
 
class AltNavigation extends React.Component {
    render(){
        let pathName = window.location.pathname;
        return (
            <>
                {/* Mobile Navbar */}
                <div id="offcanvas-flip" className="mobile-navbar uk-mobile-navbar" uk-offcanvas="flip: true; overlay: true">
                    <div className="uk-offcanvas-bar">
                
                        <button className="uk-offcanvas-close" type="button" uk-close="true"></button>

                        <nav className="uk-navbar-container">
                            <ul className="uk-navbar-nav">
                                <li 
                                    className={pathName === '/' ? 'uk-active' : ''}
                                >
                                    <Link to="#">Home</Link>
                                    <div uk-dropdown="mode: click">
                                        <ul className="uk-nav uk-dropdown-nav">
                                            <li className={pathName === '/' ? 'uk-active' : ''}>
                                                <Link 
                                                    to="/"
                                                >
                                                </Link>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/service-details">Services</Link></li>
                                <li><Link to="/project-details">Projects</Link>
                                </li>
                                <li><Link to="/testimonials">Testimonials</Link></li>
                                <li><Link to="/team">Team</Link></li>
                                <li><Link to="/blog-details">Blog</Link>
                                </li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* End Mobile Navbar */}

                {/* Start Navbar Area */}
                <header className="header-area uk-dark" data-uk-sticky="top: 0; animation: uk-animation-slide-top;">
                    <div className="uk-container">
                        <div className="uk-navbar">
                            <div className="logo uk-navbar-left">
                                <a href="/">
                                    <img src={require("../../assets/images/logo2.png")} alt="logo" />
                                </a>
                            </div>

                            <div className="uk-navbar-toggle" id="navbar-toggle" uk-toggle="target: #offcanvas-flip">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="navbar uk-navbar-right">
                                <nav className="uk-navbar-container">
                                    <ul className="uk-navbar-nav">
                                        <li className={pathName === '/' ? 'uk-active' : ''}>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className={pathName === '/about' ? 'uk-active' : ''}>
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li
                                            className={pathName === '/services' || pathName === '/services-two' || pathName === '/service-details' ? 'uk-active' : ''}
                                        >
                                            <Link to="service-details">Services</Link>
                                           
                                        </li>
                                        <li className={pathName === '/projects' || pathName === '/project-details' ? 'uk-active' : ''}>
                                            <Link to="/project-details">Project</Link>
                                            
                                        </li>
                                        <li className={pathName === '/testimonials' ? 'uk-active' : ''}>
                                            <Link to="/testimonials">Testimonials</Link>
                                        </li>
                                        <li className={pathName === '/team' ? 'uk-active' : ''}>
                                            <Link to="/team">Team</Link>
                                        </li>
                                        <li className={pathName === '/blog' || pathName === '/blog-details' ? 'uk-active' : ''}>
                                            <Link to="/blog-details">Blog</Link>
                                            
                                        </li>
                                        <li className={pathName === '/contact' ? 'uk-active' : ''}>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>

                                {/* <div className="lang">
                                    <form>
                                        <div>
                                            <select>
                                                <option value="eng">En</option>
                                                <option value="ge">Ge</option>
                                            </select>
                                        </div>
                                    </form>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}
 
export default AltNavigation;
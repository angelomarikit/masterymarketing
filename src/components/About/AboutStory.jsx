import React from 'react'
 
class AboutContent extends React.Component {
    render(){
        return (
            <section className="uk-about about-area uk-section">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                        <div className="item">
                            <div className="about-content">
                                <div className="uk-section-title section-title">
                                    <span>About Us</span>
                                    <h2>Mastering the Digital Landscape: Unveiling the Essence of Marketing Mastery Agency</h2>
                                    <div className="bar"></div>
                                </div>

                                <div className="about-text">
                                    
                                    <h3>Marketing Mastery Agency</h3>
                                    <p>At the intersection of innovation and success lies our dynamic team, led by Maria Matarelli and Darby Beenken, visionaries in the realm of digital marketing. Maria, a seasoned entrepreneur and bestselling author, alongside her Agile Marketing Academy co-founder, has spearheaded transformative ventures for Fortune 100 companies. Their agile methodologies have propelled startups to staggering valuations and streamlined operations for billion-dollar organizations, unlocking unprecedented growth.

                                    <p>Complementing Maria's expertise, Darby Beenken's entrepreneurial journey boasts numerous multimillion-dollar ventures and the creation of automated systems for hundreds of employees. From Dubai to Bali, Darby's ventures have redefined the landscape of digital entrepreneurship, turning concepts into thriving realities with unparalleled efficiency.</p>

                                    <p>Together, our team embodies the wonders of digital marketing, leveraging innovation and automation to transcend boundaries and redefine success for businesses worldwide.</p>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="about-img">
                                <img src={require("../../assets/images/about1.jpg")} className="about-img1" alt="about-img" />
                                <img src={require("../../assets/images/team2.jpg")} className="about-img2" alt="about-img" />
                                <img src={require("../../assets/images/team1.jpg")} className="shape-img" alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default AboutContent;
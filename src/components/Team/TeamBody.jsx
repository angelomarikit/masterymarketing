import React from 'react';
 
class TeamBody extends React.Component {
    render(){
        return (
            <section className="team-area uk-team uk-section">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
                        <div className="single-team">
                            {/* <ul className="team-social">
                                <li><a href="#" target="_blank"><i className="flaticon-logo"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-linkedin"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-logo-1"></i></a></li>
                            </ul> */}

                            <img src={require("../../assets/images/team1.jpg")} alt="team" />

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

                            <img src={require("../../assets/images/team2.jpg")} alt="team" />

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

                            <img src={require("../../assets/images/team3.jpg")} alt="team" />

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

                            <img src={require("../../assets/images/team4.PNG")} alt="team" />

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

                            <img src={require("../../assets/images/team5.jpg")} alt="team" />

                            <div className="team-content">
                                <h3>John Philip Hernandez</h3>
                                <span>Sales Representative</span>
                            </div>
                        </div>

                        {/* <div className="single-team">
                            <ul className="team-social">
                                <li><a href="#" target="_blank"><i className="flaticon-logo"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-linkedin"></i></a></li>
                                <li><a href="#" target="_blank"><i className="flaticon-logo-1"></i></a></li>
                            </ul>

                            <img src={require("../../assets/images/team1.jpg")} alt="team" />

                            <div className="team-content">
                                <h3>Josh Buttler</h3>
                                <span>Content Writer</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}
 
export default TeamBody;
import React from 'react';
import { Link } from 'react-router-dom';
import AltNavigation from '../Navigation/AltNavigation';
import EmailMarketing from '../ServiceDetailsContent/EmailMarketing';
import MarketAnalysis from '../ServiceDetailsContent/MarketAnalysis';
import KeywordResearch from '../ServiceDetailsContent/KeywordResearch';
import DigitalBranding from '../ServiceDetailsContent/DigitalBranding';
import CreativeSolutions from '../ServiceDetailsContent/CreativeSolutions';
import MarketingSolutions from '../ServiceDetailsContent/MarketingSolutions';
import SocialMediaManagement from '../ServiceDetailsContent/SocialMediaManagement';
import Uxui from '../ServiceDetailsContent/Uxui';
import Footer from '../Common/Footer';

// const options = {
//     items: 1,
//     loop: true,
//     nav: false,
//     dots: true,
//     smartSpeed: 2000,
//     margin: 30,
//     autoplayHoverPause: true,
//     autoplay: true
// }
 
class ServiceDetails extends React.Component {
    constructor(props){  
        super(props);  
        this.state = {  
             activeContent: "EmailMarketing"
          }  
        this.handleEvent = this.handleEvent.bind(this);  
      }  
      handleEvent(id){  
        this.state.activeContent = id;
        console.log(this.props);  
      }  
    render(){
        return (
            <>
                <AltNavigation />
                
                <section className="page-title-area uk-page-title">
                    <div className="uk-container">
                        <h1>Services Details</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Services Details</li>
                        </ul>
                    </div>
                </section>
                {/* End Page Title Area */}

                {/* Start Services Details Area  */}
                <section className="services-details-area uk-services-details uk-section">
                    <div className="uk-container">
                        <article className="uk-article services-details">
                            <div className="uk-grid uk-flex">
                                <div className="inner uk-width-expand">
                                    {
                                        this.state.activeContent === 'EmailMarketing' && <EmailMarketing/>
                                    }
                                    {
                                        this.state.activeContent === 'MarketAnalysis' && <MarketAnalysis/>
                                    }
                                    {
                                        this.state.activeContent === 'KeywordResearch' && <KeywordResearch/>
                                    }
                                    {
                                        this.state.activeContent === 'DigitalBranding' && <DigitalBranding/>
                                    }
                                    {
                                        this.state.activeContent === 'CreativeSolutions' && <CreativeSolutions/>
                                    }
                                    {
                                        this.state.activeContent === 'MarketingSolutions' && <MarketingSolutions/>
                                    }
                                    {
                                        this.state.activeContent === 'SocialMediaManagement' && <SocialMediaManagement/>
                                    }
                                    {
                                        this.state.activeContent === 'Uxui' && <Uxui/>
                                    }
                                </div>

                                <div className="uk-sidebar uk-width-1-5 uk-flex-first@l uk-first-column">
                                    <div className="widget widget_search">
                                        <form>
                                            <input type="text" className="uk-input" placeholder="Search here..." />
                                            <button type="submit"><i className="flaticon-search"></i></button>
                                        </form>
                                    </div>

                                    <div className="widget service_list">
                                        <ul>
                                            <li><Link to="#" className={this.state.activeContent === "EmailMarketing" && "active"} id="EmailMarketing" onClick={(e) => this.handleEvent(e.target.id)}>Email Marketing <i className="flaticon-right"></i></Link></li>
                                            <li><Link to="#" className={this.state.activeContent === "MarketAnalysis" && "active"} id="MarketAnalysis" onClick={(e) => this.handleEvent(e.target.id)}>Market Analysis <i className="flaticon-right"></i></Link></li>
                                            <li><Link to="#" className={this.state.activeContent === "KeywordResearch" && "active"} id="KeywordResearch" onClick={(e) => this.handleEvent(e.target.id)}>Keyword Research <i className="flaticon-right"></i></Link></li>
                                            <li><Link to="#" className={this.state.activeContent === "DigitalBranding" && "active"} id="DigitalBranding" onClick={(e) => this.handleEvent(e.target.id)}>Digital Branding <i className="flaticon-right"></i></Link></li>
                                            <li><Link to="#" className={this.state.activeContent === "CreativeSolutions" && "active"} id="CreativeSolutions" onClick={(e) => this.handleEvent(e.target.id)}>Creative Solutions <i className="flaticon-right"></i></Link></li>
                                            <li><Link to="#" className={this.state.activeContent === "MarketingSolutions" && "active"} id="MarketingSolutions" onClick={(e) => this.handleEvent(e.target.id)}>Marketing Solutions <i className="flaticon-right"></i></Link></li>

                                            <li><Link to="#" className={this.state.activeContent === "SocialMediaManagement" && "active"} id="SocialMediaManagement" onClick={(e) => this.handleEvent(e.target.id)}>Social Media Management<i className="flaticon-right"></i></Link></li>

                                            <li><Link to="#" className={this.state.activeContent === "Uxui" && "active"} id="Uxui" onClick={(e) => this.handleEvent(e.target.id)}>UX & UI Design <i className="flaticon-right"></i></Link></li>
                                        </ul>
                                    </div>

                                    <div className="widget widget_download">
                                        <h3 className="widget-title">Download</h3>
                                        <div className="bar"></div>
                                        
                                        <ul>
                                            <li><a href='https://drive.google.com/uc?export=download&id=1Jvh6ClsH2MgJdQYl9ncJ8qGS5qbv6v88' target="_blank" rel="noopener noreferrer">Portfolio PDF <i className="flaticon-edit"></i></a></li>
                                            <li><a href='https://drive.google.com/file/d/1RwY7qlEZjIFjFUeSk6wjVt8aQFit-bl7/view?usp=drive_link' target="_blank" rel="noopener noreferrer">Company Profile PDF <i className="flaticon-edit"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>  

                <Footer />
            </>
        );
    }
}
 
export default ServiceDetails;
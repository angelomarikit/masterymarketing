import React from 'react';
import { Link } from 'react-router-dom';
import AltNavigation from '../Navigation/AltNavigation';
import Footer from '../Common/Footer';
import blogImg from '../../assets/images/blog-details.jpg';
import clientOne from '../../assets/images/client1.png';
import clientTwo from '../../assets/images/client2.png';
import clientThree from '../../assets/images/client3.png';
import blogOne from '../../assets/images/blog1.jpg';
import blogTwo from '../../assets/images/blog2.jpg';
import blogThree from '../../assets/images/blog3.jpg';
 
class BlogDetails extends React.Component {

    onFormSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        return (
            <>
                <AltNavigation />
                
                {/*  Start Page Title Area */}
                <section className="page-title-area uk-page-title">
                    <div className="uk-container">
                        <h1>Blog Details</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </section>
                {/* End Page Title Area */}

                {/*  Start Blog Details Area */}
                <section className="blog-details-area uk-blog-details uk-section">
                    <div className="uk-container">
                        <article className="uk-article blog-details">
                            <div className="uk-grid uk-flex">
                                <div className="inner uk-width-expand">
                                    <div className="article-img">
                                        <img src={blogImg} alt="blog-details" />
                                        <div className="date">20 <br /> Mar</div>
                                    </div>

                                    <div className="article-content">
                                        <ul className="category">
                                            <li><Link to="#">IT</Link></li>
                                            <li><Link to="#">Mobile</Link></li>
                                            <li><Link to="#">Marketing</Link></li>
                                            <li><Link to="#">Design</Link></li>
                                            <li><Link to="#">Development</Link></li>
                                        </ul>
                                            
                                        <h3>The 13 Best Time Tracking Apps of 2024</h3>
                                        
                                        <p>
                                        In today's fast-paced world, managing your time efficiently is essential for productivity and success. With the plethora of time tracking apps available, finding the right one for your needs can be overwhelming. To help you streamline your search, we've compiled a list of the 13 best time tracking apps of 2024:

                                        <p>1. Clockify: A versatile time tracking app suitable for individuals and teams, offering robust features and integrations.</p>
                                        <p>2. Toggl Track: Known for its simplicity and user-friendly interface, Toggl Track helps you stay organized and focused on your tasks.</p>
                                        <p>3. Harvest: Ideal for freelancers and small businesses, Harvest offers powerful time tracking and invoicing capabilities.</p>
                                        <p>4. Timely: Utilizing AI technology, Timely automatically tracks your time spent on various tasks, providing valuable insights.</p>
                                        <p>5. RescueTime: Designed to help you understand and improve your digital habits, RescueTime offers detailed analytics and productivity reports.</p>
                                        <p>6. Timeular: With its unique physical tracker device, Timeular makes time tracking effortless and intuitive.</p>
                                        <p>7. Everhour: Integrated with popular project management tools, Everhour simplifies time tracking for teams and agencies.</p>
                                        <p>8. Hubstaff: Offering advanced features like GPS tracking and activity monitoring, Hubstaff is perfect for remote teams and freelancers.</p>
                                        <p>9. ClickUp: Combining time tracking with task management, ClickUp provides a comprehensive solution for productivity.</p>
                                        <p>10. ClockShark: Tailored for construction and field service industries, ClockShark offers robust time tracking and scheduling tools.</p>
                                        <p>11. TimeCamp: Suitable for businesses of all sizes, TimeCamp provides detailed insights into time usage and project profitability.</p>
                                        <p>12. DeskTime: Offering real-time tracking and productivity analysis, DeskTime helps you stay focused and accountable.</p>
                                        <p>13. My Hours: Simple yet powerful, My Hours is a time tracking app perfect for freelancers and small businesses on a budget.</p>
                                        <p>14. With the right time tracking app, you can take control of your schedule, optimize your workflow, and achieve your goals more efficiently than ever before. Try out one of these top-rated apps today and take the first step towards mastering your time management skills in 2024.</p>
                                        </p>
                                        
                                      
                                        
                                        <blockquote className="blockquote">
                                            <p>
"Time is a non-renewable resource. Invest it wisely."</p>
                                        </blockquote>
                                        
                                        <p>Remember, time is your most valuable asset. By implementing these strategies for improved time efficiency, you're not just managing your time better - you're investing in your success and well-being. Here's to making every moment count!</p>
                                    </div>

                                    <div className="post-controls-buttons uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
                                        <div className="item">
                                            <Link to="#" className="uk-button uk-button-default">Prev Post</Link>
                                        </div>

                                        <div className="item uk-text-right">
                                            <Link to="#" className="uk-button uk-button-default">Next Post</Link>
                                        </div>
                                    </div>

                                    <div id="comments" className="comments-area">
                                        <h2 className="comments-title">3 Comments</h2>

                                        <ol className="comment-list">
                                            <li className="comment">
                                                <article className="comment-body">
                                                    <footer className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={clientOne} alt="client" className="avatar" />
                                                            <b className="fn">DJ</b>
                                                            <span className="says">says:</span>
                                                        </div>

                                                        <div className="comment-metadata">
                                                            <Link to="#">
                                                                January 10, 2024 at 10:16 am
                                                            </Link>
                                                        </div>
                                                    </footer>

                                                    <div className="comment-content">
                                                        <p>Such an insightful blog on time efficiency! From practical strategies to inspiring insights, this blog offers a wealth of information to help us optimize our time and accomplish more. A must-read for anyone striving to make the most of every minute in their day!</p>
                                                    </div>

                                                    <div className="reply">
                                                        <Link to="#" rel="nofollow" className="comment-reply-link">Reply</Link>
                                                    </div>
                                                </article>

                                                <ol className="children">
                                                    <li className="comment">
                                                        <article className="comment-body">
                                                            <footer className="comment-meta">
                                                                <div className="comment-author vcard">
                                                                    <img src={clientTwo} alt="client" className="avatar" />
                                                                    <b className="fn">Kath</b>
                                                                    <span className="says">says:</span>
                                                                </div>

                                                                <div className="comment-metadata">
                                                                    <Link to="#">
                                                                        january 5, 2024 at 7:16 am
                                                                    </Link>
                                                                </div>
                                                            </footer>

                                                            <div className="comment-content">
                                                                <p>This blog on time efficiency is a game-changer! It's packed with practical tips and insights to help you maximize every minute of your day. From prioritizing tasks to minimizing distractions, it offers actionable advice that anyone can implement to boost productivity. A must-read for anyone looking to make the most of their time!</p>
                                                            </div>

                                                            <div className="reply">
                                                                <Link to="#" rel="nofollow" className="comment-reply-link">Reply</Link>
                                                            </div>
                                                        </article>
                                                    </li>
                                                </ol>
                                            </li>

                                            <li className="comment">
                                                <article className="comment-body">
                                                    <footer className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={clientThree} alt="client" className="avatar" />
                                                            <b className="fn">Airon</b>
                                                            <span className="says">says:</span>
                                                        </div>

                                                        <div className="comment-metadata">
                                                            <Link to="#">
                                                                Feb 3, 2024 at 2:16 pm
                                                            </Link>
                                                        </div>
                                                    </footer>

                                                    <div className="comment-content">
                                                        <p>Absolutely love this blog on time efficiency! It's a treasure trove of valuable tips and strategies to help us become masters of our time. From prioritizing tasks to overcoming procrastination, the insights shared here are truly transformative. A definite must-read for anyone looking to boost productivity and reclaim control over their schedule</p>
                                                    </div>

                                                    <div className="reply">
                                                        <Link to="#" rel="nofollow" className="comment-reply-link">Reply</Link>
                                                    </div>
                                                </article>
                                            </li>
                                        </ol>

                                        <div id="respond" className="comment-respond">
                                            <h3 className="comment-reply-title">Leave Link Reply</h3>

                                            <form id="commentform" className="comment-form" onSubmit={this.onFormSubmit}>
                                                <p className="comment-notes">Your email address will not be published.</p>
                                                
                                                <p className="comment-form-comment">
                                                    <textarea id="comment" placeholder="Comment" cols="45" rows="5" />
                                                </p>
                                                <p className="comment-form-author">
                                                    <input id="author" placeholder="Name" type="text" />
                                                </p>
                                                <p className="comment-form-email">
                                                    <input id="email" placeholder="Email"  type="text" />
                                                </p>
                                                <p className="comment-form-url">
                                                    <input id="url" placeholder="Website" type="text" />
                                                </p>
                                                <p className="form-submit">
                                                    <input name="submit" type="submit" id="submit" className="submit" value="Post Comment" />
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="uk-sidebar uk-width-1-5">
                                    <div className="widget widget_search">
                                        <form>
                                            <input type="text" className="uk-input" placeholder="Search here..." />
                                            <button type="submit"><i className="flaticon-search"></i></button>
                                        </form>
                                    </div>
                                    
                                    <div className="widget widget_categories">
                                        <h3 className="widget-title">Categories</h3>
                                        <div className="bar"></div>

                                        <ul>
                                            <li><Link to="#">AJAX</Link></li>
                                            <li><Link to="#">Apache</Link></li>
                                            <li><Link to="#">CSS</Link></li>
                                            <li><Link to="#">PHP</Link></li>
                                            <li><Link to="#">Django</Link></li>
                                            <li><Link to="#">Error</Link></li>
                                            <li><Link to="#">IIS</Link></li>
                                            <li><Link to="#">JavaScript</Link></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="widget widget_recent_entries">
                                        <h3 className="widget-title">Recent Posts</h3>
                                        <div className="bar"></div>

                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <img src={blogOne} alt="blog" />
                                                </Link>

                                                <h5><Link to="#">The Most Popular New top Business Apps</Link></h5>
                                                <p className="date">21 October, 2023</p>
                                            </li>

                                            <li>
                                                <Link to="#">
                                                    <img src={blogTwo} alt="blog" />
                                                </Link>

                                                <h5><Link to="#">3 WooCommerce Plugins to Boost Sales</Link></h5>
                                                <p className="date">19 June, 2023</p>
                                            </li>

                                            <li>
                                                <Link to="#">
                                                    <img src={blogThree} alt="blog" />
                                                </Link>

                                                <h5><Link to="#">The Best Marketing top Management Tools</Link></h5>
                                                <p className="date">8 September, 2023</p>
                                            </li>

                                            <li>
                                                <Link to="#">
                                                    <img src={blogOne} alt="blog" />
                                                </Link>

                                                <h5><Link to="#">How to Build Link Business Dashboard</Link></h5>
                                                <p className="date">17 April, 2023</p>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div className="widget widget_tag_cloud">
                                        <h3 className="widget-title">Tags</h3>
                                        <div className="bar"></div>

                                        <div className="tagcloud">
                                            <Link to="#">Error</Link>
                                            <Link to="#">Cake Bake</Link>
                                            <Link to="#">Dromzone</Link>
                                            <Link to="#">File</Link>
                                            <Link to="#">Yii</Link>
                                            <Link to="#">Yii2</Link>
                                            <Link to="#">UUID</Link>
                                            <Link to="#">Setup</Link>
                                            <Link to="#">Error</Link>
                                            <Link to="#">Cake Bake</Link>
                                            <Link to="#">Dromzone</Link>
                                            <Link to="#">File</Link>
                                            <Link to="#">Yii</Link>
                                            <Link to="#">Yii2</Link>
                                            <Link to="#">UUID</Link>
                                            <Link to="#">Setup</Link>
                                        </div>
                                    </div>
                                    
                                    <div className="widget widget_archive">
                                        <h3 className="widget-title">Archives</h3>
                                        <div className="bar"></div>

                                        <ul>
                                            <li><Link to="#">December 2018</Link></li>
                                            <li><Link to="#">January 2019</Link></li>
                                            <li><Link to="#">February 2019</Link></li>
                                            <li><Link to="#">March 2019</Link></li>
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
 
export default BlogDetails;
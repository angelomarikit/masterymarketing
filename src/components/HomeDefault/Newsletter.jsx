import React from 'react';
import footerShape from '../../assets/images/footer-shape1.png';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


class Newsletter extends React.Component {



    state = {
        term: ''
    };

    onFormSubmit = (e) => {
        e.preventDefault();
    }
    
    successMessage = () => {
        const notify = () => toast.success("Thank you for subscribing");
        notify()
    }
    render(){
        return (
            <section className="subscribe-area uk-section uk-dark uk-subscribe bg-gray">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
                        <div className="item">
                            <h3>Subscribe to our newsletter</h3>
                        </div>
                        

                        <div className="item">
                            <form 
                                className="newsletter-form"
                                onSubmit={this.onFormSubmit}
                            >
                                <input 
                                    type="email" 
                                    className="uk-input" 
                                    placeholder="name@gmail.com" 
                                    value={this.state.term}
                                    onChange={v => this.setState({ term: v.target.value })}
                                />

                                <button 
                                    onClick={this.successMessage}
                                    type="submit" 
                                    className="uk-button uk-button-default"
                                >
                                    Subscribe Now
                                </button>
                                <ToastContainer/>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="shape">
                    <img src={footerShape} alt="shape" />
                </div>
            </section>
        );
    }
}
 
export default Newsletter;
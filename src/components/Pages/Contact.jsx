import React from 'react';
import AltNavigation from '../Navigation/AltNavigation';
import Footer from '../Common/Footer';
import Banner from '../Contact/Banner';
import Contact from '../Common/Contact';
 
class ContactUs extends React.Component {
    render(){
        return (
            <>
                <AltNavigation />

                <Banner />

                <Contact />
                
                <Footer />
            </>
        );
    }
}
 
export default ContactUs;
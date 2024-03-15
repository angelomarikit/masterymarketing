import React from 'react';
import Footer from '../Common/Footer';
import Banner from '../About/Banner';
import AboutStory from '../About/AboutStory';
import AltNavigation from '../Navigation/AltNavigation';
 
class About extends React.Component {
    render(){
        return (
            <>

                <AltNavigation />

                <Banner />

                <AboutStory />

                <Footer />
            </>
        );
    }
}
 
export default About;
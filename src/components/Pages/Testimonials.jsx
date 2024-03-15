import React from 'react';
import AltNavigation from '../Navigation/AltNavigation';
import Footer from '../Common/Footer';
import Banner from '../Testimonials/Banner';
import TestiContent from '../Testimonials/TestiContent';
 
class Testimonials extends React.Component {
    render(){
        return (
            <>
                <AltNavigation />

                <Banner />

                <TestiContent />
                
                <Footer />
            </>
        );
    }
}
 
export default Testimonials;
import React from 'react';
import AltNavigation from '../Navigation/AltNavigation';
import Footer from '../Common/Footer';
import Banner from '../Services/Banner';
import ServiceOneContent from '../Services/ServiceOneContent';
 
class Services extends React.Component {
    render(){
        return (
            <>
                <AltNavigation />

                <Banner />

                <ServiceOneContent />
                
                <Footer />
            </>
        );
    }
}
 
export default Services;
import React from 'react';
import AltNavigation from '../Navigation/AltNavigation';
import Footer from '../Common/Footer';
import Banner from '../Services/Banner';
import ServiceTwoContent from '../Services/ServiceTwoContent';
 
class ServicesTwo extends React.Component {
    render(){
        return (
            <>
                <AltNavigation />

                <Banner />

                <ServiceTwoContent />
                
                <Footer />
            </>
        );
    }
}
 
export default ServicesTwo;
import React from 'react';
import AltNavigation from '../Navigation/AltNavigation';
import Footer from '../Common/Footer';
import Banner from '../Team/Banner';
import TeamBody from '../Team/TeamBody';
 
class Team extends React.Component {
    render(){
        return (
            <>
                <AltNavigation />

                <Banner />

                <TeamBody />
                
                <Footer />
            </>
        );
    }
}
 
export default Team;
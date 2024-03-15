import React from 'react';
import AltNavigation from '../Navigation/AltNavigation';
import Footer from '../Common/Footer';
import Banner from '../Projects/Banner';
import ProjectContent from '../Projects/ProjectContent';
 
class Projects extends React.Component {
    render(){
        return (
            <>
                <AltNavigation />

                <Banner />

                <ProjectContent />
                
                <Footer />
            </>
        );
    }
}
 
export default Projects;
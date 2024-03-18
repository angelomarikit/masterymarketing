import React from 'react'
import AltNavigation from '../Navigation/AltNavigation';
import Footer from '../Common/Footer';

class PrivacyPolicy extends React.Component {
    render(){
        return (
            <>
                <AltNavigation />
                
                <div className="uk-text-content main-text-content uk-section">
                    <div className="uk-container">
                        <h2>Marketing Mastery Agency Privacy Policy</h2>
                        <p>This Privacy Policy ("Policy") outlines how Marketing Mastery Agency ("Agency," "we," "us," or "our") collects, uses, discloses, and protects the personal information of individuals ("you" or "your") who engage with our website and services.</p>

                        <h2>1. Information We Collect:</h2>
                        <p>a. Personal Information: We may collect personal information such as name, email address, and company name when you voluntarily provide it to us, such as when filling out a contact form or subscribing to our newsletter.</p>
                        <p>b. Usage Data: We may collect non-personal information about your interactions with our website, such as IP address, browser type, pages visited, and referral sources, through the use of cookies and similar technologies.</p>
                        <h2>2. How We Use Your Information:</h2>
                        <p>a. We may use the personal information you provide to respond to your inquiries, provide requested services, and communicate with you about our products and promotions.</p>
                        <p>b. We may use usage data to analyze trends, improve our website, and personalize your experience.</p>
                        <h2>3. Disclosure of Information:</h2>
                        <p>a. We may share personal information with third-party service providers who assist us in operating our website or conducting our business, provided that they agree to keep such information confidential.</p>
                        <p>b. We may also disclose personal information if required by law or to protect our rights or the safety of others.</p>
                        <h2>4. Data Security:</h2>
                        <p>a. We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</p>
                        <p>b. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                        <h2>5. Third-Party Links:</h2>
                        <p>a. Our website may contain links to third-party websites. Please note that we are not responsible for the privacy practices or content of such websites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
                        <h2>6. Children's Privacy:</h2>
                        <p>a. Our website and services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take appropriate steps to remove such information from our records.</p>
                        <h2>7. Changes to this Policy:</h2>
                        <p>a. We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised Policy will indicate the date it was last updated. We encourage you to review this Policy periodically for any changes.</p>
                        <h2>8. Contact Us:</h2>
                        <p>a. If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at mmastery.agency@gmail.com.</p>
                       
                       <p>By using our website or engaging with our services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.</p>
                       <p>Last updated: March 2024</p>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}
 
export default PrivacyPolicy;
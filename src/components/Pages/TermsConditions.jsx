import React from 'react'
import AltNavigation from '../Navigation/AltNavigation';
import Footer from '../Common/Footer';

class TermsConditions extends React.Component {
    render(){
        return (
            <>
                <AltNavigation />
                
                <div className="uk-text-content main-text-content uk-section">
                    <div className="uk-container">
                         
                        <h2>Marketing Mastery Agency Terms and Conditions</h2>
                        <p>These Terms and Conditions ("Terms") govern the use of services provided by Marketing Mastery Agency ("Agency"). By engaging with our services, you agree to abide by these Terms.</p>

                        <h2>1. Services Offered:</h2>
                        <p>a. Marketing Mastery Agency offers a range of digital marketing services including but not limited to: social media management, search engine optimization (SEO), pay-per-click (PPC) advertising, content creation, email marketing, and website development.</p>
                        <p>b. The specific services provided to the client will be outlined in a separate agreement or proposal.</p>
                       
                       <h2>2. Client Obligations:</h2>
                        <p>a. The client must provide accurate and timely information necessary for the delivery of services.</p>
                        <p>b. The client is responsible for obtaining any necessary permissions, licenses, or rights for content provided to Marketing Mastery Agency for use in marketing campaigns.</p>
                        <p>c. The client must adhere to all relevant laws and regulations governing their industry and the use of marketing services.</p>
                       
                       <h2>3. Payment Terms:</h2>
                       <p>a. The client agrees to pay Marketing Mastery Agency for services rendered according to the terms outlined in the agreement or proposal.</p>
                        <p>b. Payment terms, including billing cycles and methods of payment, will be specified in the agreement or proposal.</p>
                        <p>c. Late payments may incur penalties or suspension of services at the discretion of Marketing Mastery Agency.</p>

                        <h2>4. Intellectual Property:</h2>
                       <p>a. Marketing Mastery Agency retains ownership of all intellectual property, including but not limited to: marketing strategies, campaign materials, and website designs, created or used in the provision of services.</p>
                        <p>b. The client may use deliverables provided by Marketing Mastery Agency solely for the purpose outlined in the agreement or proposal.</p>
                        
                        <h2>5. Confidentiality:</h2>
                       <p>a. Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of the engagement.</p>
                        <p>b. Confidential information includes, but is not limited to: business strategies, customer data, and trade secrets.</p>

                        <h2>6. Termination:</h2>
                       <p>a. Either party may terminate the engagement upon written notice if the other party breaches these Terms.</p>
                        <p>b. Marketing Mastery Agency reserves the right to terminate services if the client fails to make timely payments or breaches the agreement in any other way.</p>
                        
                        <h2>7. Limitation of Liability:</h2>
                       <p>a. Marketing Mastery Agency shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the provision of services.</p>
                        <p>b. In no event shall Marketing Mastery Agency's total liability exceed the fees paid by the client for the services provided.</p>

                        <h2>8. Governing Law:</h2>
                       <p>a. These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.</p>
                        
                       <h2>9. Modification of Terms:</h2>
                       <p>a. Marketing Mastery Agency reserves the right to modify these Terms at any time. Any changes will be communicated to the client in writing.</p>

                       <h2>10. Entire Agreement:</h2>
                       <p>a. These Terms constitute the entire agreement between the client and Marketing Mastery Agency regarding the provision of services and supersede any prior agreements or understandings, whether written or oral.</p>

                       <p>By engaging with Marketing Mastery Agency's services, you acknowledge that you have read, understood, and agree to these Terms and Conditions. If you have any questions or concerns, please contact us at mmastery.agency@gmail.com.</p>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}
 
export default TermsConditions;
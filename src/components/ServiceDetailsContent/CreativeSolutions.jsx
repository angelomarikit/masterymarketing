import React from "react";
import OwlCarousel from "react-owl-carousel3";
import serviceImage1 from "../../assets/images/serviceImage1.png";
import serviceImage2 from "../../assets/images/serviceImage2.png";
import serviceImage3 from "../../assets/images/serviceImage3.png";

const options = {
  items: 1,
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 2000,
  margin: 30,
  autoplayHoverPause: true,
  autoplay: true
}

class CreativeSolutions extends React.Component {
  render() {
    return (
      <div className="services-details-desc">
        <h3>Creative Solutions</h3>
        <p>
        Our seasoned team of digital experts crafts compelling campaigns tailored to your unique goals and audience. From captivating visuals to engaging content, we deliver creative solutions that drive meaningful results. Let us transform your vision into reality and propel your brand to new heights in the digital landscape.
        </p>

        <OwlCarousel
          className="services-image-slides owl-carousel owl-theme"
          {...options}
        >
          <div className="item">
            <img src={serviceImage1} alt="img" />
          </div>

          <div className="item">
            <img src={serviceImage2} alt="img" />
          </div>

          <div className="item">
            <img src={serviceImage3} alt="img" />
          </div>
        </OwlCarousel>

        <h3>Why Choose This Service</h3>
        <p>
        Choose our service to transform your digital vision into reality and propel your brand to new heights.
        </p>

        <ul className="services-features-list">
          <li>
            <i className="flaticon-tick"></i>Captivating Visuals
          </li>
          <li>
            <i className="flaticon-tick"></i>Engaging Content
          </li>
          <li>
            <i className="flaticon-tick"></i>Strategic Creativity
          </li>
          <li>
            <i className="flaticon-tick"></i> Lasting Impressions
          </li>
          <li>
            <i className="flaticon-tick"></i> Meaningful Results
          </li>
          <li>
            <i className="flaticon-tick"></i> Dedicated Partnership
          </li>
        </ul>

        <blockquote className="blockquote">
          <p>
          
          "Mastery Marketing Agency's Creative Solutions Service is a game-changer! Their team's innovative approach and out-of-the-box thinking have transformed our brand's digital presence. From captivating designs to ingenious strategies, they consistently deliver creative solutions that exceed our expectations. With their expertise, we've been able to differentiate ourselves in a crowded market and stand out among competitors. Highly recommend their Creative Solutions Service to any business looking to ignite their brand with creativity and innovation."
          </p>
        </blockquote>

        <h3>Our Work Benefits</h3>
        <p>
        
Choosing Mastery Marketing Agency's Creative Solutions Service offers numerous benefits for your business. Our innovative approach and out-of-the-box thinking consistently deliver fresh and captivating solutions tailored to your unique needs. With our creative expertise, we enhance your brand's image and perception, setting it apart from competitors and leaving a lasting impression on your audience. By differentiating your brand in the marketplace, our solutions increase market share and foster customer loyalty. Additionally, our creative content drives higher engagement rates and interactions, building deeper connections with your audience. Our flexible and adaptable approach ensures that our solutions align with your specific goals and objectives, driving tangible results for your business. With comprehensive support throughout the creative process, from ideation to execution, we provide seamless delivery and exceptional outcomes. Overall, partnering with Mastery Marketing Agency for Creative Solutions empowers your brand with impactful, results-driven creativity that drives growth and success in today's competitive landscape.
        </p>

        {/* <div className="our-work-benefits">
          <Collapsible trigger="Which material types can you work with">
            <p>
              This is the collapsible content. It can be any element or React
              component you like. It can even be another Collapsible component.
              Check out the next section!
            </p>
          </Collapsible>

          <Collapsible trigger="Is Smart Lock required for instant apps?">
            <p>
              This is the collapsible content. It can be any element or React
              component you like. It can even be another Collapsible component.
              Check out the next section!
            </p>
          </Collapsible>
        </div> */}
      </div>
    );
  }
}

export default CreativeSolutions;

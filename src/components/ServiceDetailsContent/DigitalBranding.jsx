import React from "react";
import OwlCarousel from "react-owl-carousel3";
import serviceImage4 from "../../assets/images/serviceImage4.png";
import serviceImage5 from "../../assets/images/serviceImage5.png";
import serviceImage6 from "../../assets/images/serviceImage6.png";

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

class DigitalBranding extends React.Component {
  render() {
    return (
      <div className="services-details-desc">
        <h3>Digital Branding</h3>
        <p>
        We specialize in crafting compelling narratives, visually captivating designs, and engaging content to establish a strong and memorable brand identity in the digital sphere. From logo design to brand strategy, our team employs cutting-edge techniques to ensure your brand resonates with your target audience across all digital channels. Let us help you stand out in the crowded digital landscape and leave a lasting impression on your customers.
        </p>

        <OwlCarousel
          className="services-image-slides owl-carousel owl-theme"
          {...options}
        >
          <div className="item">
            <img src={serviceImage4} alt="img" />
          </div>

          <div className="item">
            <img src={serviceImage5} alt="img" />
          </div>

          <div className="item">
            <img src={serviceImage6} alt="img" />
          </div>
        </OwlCarousel>

        <h3>Why Choose This Service</h3>
        <p>
        Invest in more than aesthetics; forge powerful connections with your audience in the digital realm.
        </p>

        <ul className="services-features-list">
          <li>
            <i className="flaticon-tick"></i>Compelling narratives
          </li>
          <li>
            <i className="flaticon-tick"></i>Visually striking designs
          </li>
          <li>
            <i className="flaticon-tick"></i>Engaging content
          </li>
          <li>
            <i className="flaticon-tick"></i> Expertise in brand strategy
          </li>
          <li>
            <i className="flaticon-tick"></i> Cutting-edge techniques
          </li>
          <li>
            <i className="flaticon-tick"></i> Memorable brand presence amid digital noise
          </li>
        </ul>

        <blockquote className="blockquote">
          <p>
          
"Marketing Mastery Agency's digital branding service is unmatched in its ability to elevate brands to new heights. Their expertise in crafting compelling brand narratives and visually captivating designs ensures that every aspect of your brand identity resonates with your audience. With their strategic approach and attention to detail, they go above and beyond to create authentic connections and leave a lasting impression. Highly recommend their digital branding service to any business looking to make a lasting impact in the digital world."
          </p>
        </blockquote>

        <h3>Our Work Benefits</h3>
        <p>
        Partnering with our agency for digital branding offers a host of benefits for your business. Our strategic approach begins with a thorough analysis of your brand identity and market landscape, allowing us to craft a unique positioning strategy that resonates with your target audience. Through consistent brand identity across all digital channels, including websites, social media, and digital advertisements, we enhance brand recognition and trust among your audience. Our creative expertise ensures that your brand comes to life through visually stunning graphics, engaging content, and compelling storytelling, leaving a lasting impression on your audience. By optimizing your digital presence and increasing brand visibility across online platforms, we attract more potential customers and expand your reach to new audiences. Moreover, our efforts drive active engagement and interaction from your audience, fostering deeper connections, loyalty, and advocacy. With a well-defined digital brand, you gain a competitive edge in the marketplace, positioning your brand as the preferred choice among consumers and driving market share and revenue growth. Our data-driven approach allows us to track and measure the impact of our strategies, providing valuable insights for continuous improvement and optimization over time. Overall, partnering with our agency for digital branding ensures that your brand is strategically positioned, creatively executed, and effectively communicated in the digital realm, driving tangible results and long-term success for your business.
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

export default DigitalBranding;

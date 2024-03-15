import React from "react";
import OwlCarousel from "react-owl-carousel3";
import serviceImage13 from "../../assets/images/serviceImage13.png";
import serviceImage14 from "../../assets/images/serviceImage14.png";
import serviceImage15 from "../../assets/images/serviceImage15.png";

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

class MarketAnalysis extends React.Component {
  render() {
    return (
      <div className="services-details-desc">
        <h3>MarketAnalysis</h3>
        <p>
        A comprehensive analysis delves into market trends, consumer behavior, and competitor strategies to provide valuable insights for informed decision-making. From identifying untapped opportunities to mitigating risks, our tailored approach equips you with the knowledge to drive growth and achieve your business goals. Partner with us to leverage data-driven strategies and stay ahead in today's dynamic market landscape.
        </p>

        <OwlCarousel
          className="services-image-slides owl-carousel owl-theme"
          {...options}
        >
          <div className="item">
            <img src={serviceImage13} alt="img" />
          </div>

          <div className="item">
            <img src={serviceImage14} alt="img" />
          </div>

          <div className="item">
            <img src={serviceImage15} alt="img" />
          </div>
        </OwlCarousel>

        <h3>Why Choose This Service</h3>
        <p>
        Gain a competitive edge through meticulous analysis, tailored approaches, and data-driven strategies.
        </p>

        <ul className="services-features-list">
          <li>
            <i className="flaticon-tick"></i>Meticulous analysis
          </li>
          <li>
            <i className="flaticon-tick"></i>Tailored approach
          </li>
          <li>
            <i className="flaticon-tick"></i>Data-driven strategies
          </li>
          <li>
            <i className="flaticon-tick"></i> 24/7 Support
          </li>
        </ul>

        <blockquote className="blockquote">
          <p>
          "Mastering the market landscape has never been easier, thanks to Mastery Marketing Agency's exceptional market analysis services. Their insightful analysis helped us uncover hidden opportunities and refine our strategies for maximum impact. With their expert guidance, we've gained a deeper understanding of our target audience and competitors, leading to significant growth and success. Highly recommend their market analysis services to any business looking to thrive in today's competitive landscape."
          </p>
        </blockquote>

        <h3>Our Work Benefits</h3>
        <p>
        Our market analysis services provide businesses with valuable insights, empowering informed decision-making, competitive advantage, and targeted marketing strategies. By identifying market trends, customer preferences, and emerging competitors, we help businesses optimize ROI, mitigate risks, and drive sustainable growth.
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

export default MarketAnalysis;

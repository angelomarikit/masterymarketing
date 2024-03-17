import React from "react";
import OwlCarousel from "react-owl-carousel3";
import serviceImage10 from "../../assets/images/serviceImage10.png";
import serviceImage11 from "../../assets/images/serviceImage11.png";
import serviceImage12 from "../../assets/images/serviceImage12.png";


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

class KeywordResearch extends React.Component {
  render() {
    return (
      <div className="services-details-desc">
        <h3>Keyword Research</h3>
        <p>
        Our expert analysis identifies high-performing keywords tailored to your industry and target audience. By strategically selecting keywords, we enhance your search engine rankings, driving relevant traffic to your website. Stay ahead of competitors and attract qualified leads with our comprehensive keyword insights. Let us optimize your digital presence and propel your business to new heights.
        </p>

        <OwlCarousel
          className="services-image-slides owl-carousel owl-theme"
          {...options}
        >
          <div className="item">
            <img src={serviceImage10} alt="img" />
          </div>

          <div className="item">
            <img src={serviceImage11} alt="img" />
          </div>

          <div className="item">
            <img src={serviceImage12} alt="img" />
          </div>
        </OwlCarousel>

        <h3>Why Choose This Service</h3>
        <p>
        Gain a competitive edge with our Keyword Research service, strategically targeting high-performing keywords to enhance your online visibility and attract qualified leads.
        </p>

        <ul className="services-features-list">
          <li>
            <i className="flaticon-tick"></i>Strategic keyword analysis
          </li>
          <li>
            <i className="flaticon-tick"></i>High-performing keywords identified
          </li>
          <li>
            <i className="flaticon-tick"></i>Improved search engine rankings
          </li>
          <li>
            <i className="flaticon-tick"></i> Qualified lead generation
          </li>
          <li>
            <i className="flaticon-tick"></i> Enhanced online visibility
          </li>
        </ul>

        <blockquote className="blockquote">
          <p>
          "Mastering the market landscape has never been easier, thanks to Marketing Mastery Agency's exceptional market analysis services. Their insightful analysis helped us uncover hidden opportunities and refine our strategies for maximum impact. With their expert guidance, we've gained a deeper understanding of our target audience and competitors, leading to significant growth and success. Highly recommend their market analysis services to any business looking to thrive in today's competitive landscape."
          </p>
        </blockquote>

        <h3>Our Work Benefits</h3>
        <p>
        Our agency's keyword research provides strategic insights into your target audience's search behavior, optimizing your content for higher visibility and engagement. By targeting relevant keywords and analyzing competitors' strategies, we give you a competitive edge. Our continuous monitoring ensures long-term growth, backed by data-driven decision-making. Choose us for effective keyword research that drives results in the digital landscape.
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

export default KeywordResearch;

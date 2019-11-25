import React, { Component } from "react";

class OurServices extends Component {
  render() {
    return (
      <div id="services-wrap">
        <section id="services">
          <div className="service-list column3-wrap">
            <div className="service-item column">
              <div className="circle medium gradient"></div>
              <div className="circle white-cover"></div>
              <div className="circle dark">
                <span className="icon-present"></span>
              </div>
              <h3>Buy &amp; Sell Easily</h3>
              <p>
                Search thousands of birds ads on one of the TN's leading Pigeons
                classified sites
              </p>
            </div>
            {/* <div className="service-item column">
              <div className="circle medium gradient"></div>
              <div className="circle white-cover"></div>
              <div className="circle dark">
                <span className="icon-lock"></span>
              </div>
              <h3>Secure Transaction</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur sicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div> */}
            <div className="service-item column">
              <div className="circle medium gradient"></div>
              <div className="circle white-cover"></div>
              <div className="circle dark">
                <span className="icon-like"></span>
              </div>
              <h3>Follow Us On</h3>
              <p>
                We are available on Social media Websites like Facebook and
                Twitter So you can share your Ads on Social media through our
                sites.
              </p>
            </div>
            <div className="service-item column">
              <div className="circle medium gradient"></div>
              <div className="circle white-cover"></div>
              <div className="circle dark">
                <span className="icon-diamond"></span>
              </div>
              <h3>Quality Platform</h3>
              <p>
                We are having very good platform which used to share Cost free
                ads about Pets Sales on Online.
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
        </section>
      </div>
    );
  }
}

export default OurServices;

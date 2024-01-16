import React from "react";

class UISectionLayout22 extends React.Component {
  render() {
    return (
      <section className="ui-section_layout22">
        <div className="ui-page-padding">
          <div className="ui-container-large">
            <div className="ui-padding-vertical-xhuge">
              <div className="w-layout-grid ui-layout22_component">
                <div className="ui-layout22_content-left">
                  <div className="ui-heading-subheading">Features</div>
                  <h2 className="ui-heading-medium">Share team inboxes</h2>
                </div>
                <div className="ui-layout22_content-right">
                  <div className="ui-text-size-large">
                    Whether you have a team of 2 or 200, our shared team inboxes
                    keep everyone on the same page and in the loop. Leverage
                    automation to move fast, while always giving customers a
                    human, helpful experience.
                  </div>
                  <div className="ui-space-medium" />
                  <div className="ui-button-row is-reverse-mobile-landscape">
                    <div className="ui-button-wrapper max-width-full-mobile-landscape">
                      <a
                        className="ui-button-secondary-gray "
                        href="#"
                      >
                        <div>Get started</div>
                      </a>
                    </div>
                    <div className="ui-button-wrapper max-width-full-mobile-landscape">
                      <a className="ui-button " href="#">
                        <div>Learn more</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui-layout22_image-wrapper">
                <img
                  alt="Dashboard mockup"
                  className="ui-layout22_image"
                  loading="lazy"
                  sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, 86vw"
                  src="images/tt_stars_of_a_thief_1920.png"
                  srcSet="images/tt_stars_of_a_thief_1920-p-500.png 500w, images/tt_stars_of_a_thief_1920-p-800.png 800w, images/tt_stars_of_a_thief_1920-p-1080.png 1080w, images/tt_stars_of_a_thief_1920-p-1600.png 1600w, images/tt_stars_of_a_thief_1920.png 1920w"
                  width={1440}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UISectionLayout22;

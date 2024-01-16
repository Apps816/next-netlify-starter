import React from "react";

class UISectionLayout12 extends React.Component {
  render() {
    return (
      <section className="ui-section_layout12">
        <div className="ui-page-padding">
          <div className="ui-container-large">
            <div className="ui-padding-vertical-xhuge">
              <div className="w-layout-grid ui-layout12_component">
                <div className="ui-layout12_content">
                  <div className="ui-heading-subheading">Dashboard</div>
                  <h2 className="ui-heading-medium">
                    Beautiful analytics to grow smarter
                  </h2>
                  <div className="ui-space-xsmall" />
                  <div className="ui-text-size-large">
                    Powerful, self-serve product and growth analytics to help
                    you convert, engage, and retain more users.
                  </div>
                  <div className="w-layout-grid ui-layout12_item-list">
                    <div className="ui-layout12_text-wrapper">
                      <div className="ui-layout12_number">10k</div>
                      <div className="ui-layout12_number-text">
                        Global downloads
                      </div>
                    </div>
                    <div className="ui-layout12_text-wrapper">
                      <div className="ui-layout12_number">600%</div>
                      <div className="ui-layout12_number-text">
                        Return on investment
                      </div>
                    </div>
                  </div>
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
                <div className="ui-layout01_image-wrapper">
                  <img
                    alt="Dashboard mockup"
                    className="ui-layout01_image shadow-xlarge"
                    loading="lazy"
                    sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, (max-width: 991px) 560px, 640px"
                    src="images/arena_sea_dogs_1920.png"
                    srcSet="images/arena_sea_dogs_1920-p-500.png 500w, images/arena_sea_dogs_1920-p-800.png 800w, images/arena_sea_dogs_1920-p-1080.png 1080w, images/arena_sea_dogs_1920-p-1600.png 1600w, images/arena_sea_dogs_1920.png 1920w"
                    width={1440}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UISectionLayout12;

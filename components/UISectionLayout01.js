import React from "react";
import Image from 'next/image'

class UISectionLayout01 extends React.Component {
  render() {
    return (
      <section className="ui-section_layout01">
        <div className="ui-page-padding">
          <div className="ui-container-large">
            <div className="ui-padding-vertical-xhuge">
              <div className="w-layout-grid ui-layout01_component">
                <div
                  className="ui-layout01_content"
                  id="w-node-da4a1153-d682-581d-01af-883714ab55b1-14ab55b1"
                >
                  <div className="ui-heading-subheading">Features</div>
                  <h2 className="ui-heading-medium">Lorem Ipsum Dolor</h2>
                  <div className="ui-space-xsmall" />
                  <div className="ui-text-size-large">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
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
                <div className="ui-layout01_image-wrapper">
                  <Image src='/arena_sea_dogs_1920.png' alt="Dashboard mockup" className="ui-layout01_image shadow-xlarge" width={1440} height={1080} layout="responsive"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UISectionLayout01;

import React from "react";
import UIPlayButtonIcon from '@components/UIPlayButtonIcon'

class UISectionLayout02 extends React.Component {
  render() {
    return (
      <section className="ui-section_layout02">
        <div className="ui-page-padding">
          <div className="ui-container-large">
            <div className="ui-padding-vertical-xhuge">
              <div className="w-layout-grid ui-layout02_component">
                <div className="ui-layout02_content">
                  <div className="ui-badge is-primary">
                    <div>Integrations</div>
                  </div>
                  <div className="ui-space-xsmall" />
                  <h2 className="ui-heading-medium">
                    Get more value from your tools
                  </h2>
                  <div className="ui-space-xsmall" />
                  <div className="ui-text-size-large">
                    Connect your tools, connect your teams. With over 100 apps
                    already available in our directory, your team’s favourite
                    tools are just a click away.
                  </div>
                  <div className="ui-space-medium" />
                  <div className="ui-button-row is-reverse-mobile-landscape">
                    <div className="ui-button-wrapper max-width-full-mobile-landscape">
                      <a
                        className="ui-button-secondary-gray  w-lightbox"
                        href="#"
                      >
                        <div className="ui-button-icon w-embed">
                          <UIPlayButtonIcon />
                        </div>
                        <div>Demo</div>
                      </a>
                    </div>
                    <div className="ui-button-wrapper max-width-full-mobile-landscape">
                      <a className="ui-button " href="#">
                        <div>All integrations</div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="ui-layout02_image-wrapper">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UISectionLayout02;

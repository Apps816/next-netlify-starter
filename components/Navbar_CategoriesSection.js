import React from "react";

class Navbar_CategoriesSection extends React.Component {
  render() {
    return (
      <div
        bind="68e9c506-3221-d870-bb58-a7fcb9c4880f"
        className="nav__bg-cover"
      >
        <div>
          <a
            href="#"
            id="link-back-to-top"
            bind="9d4d9ef0-3797-eed2-f7e4-5d56ec5522a1"
            data-w-id="68e9c506-3221-d870-bb58-a7fcb9c48811"
            className="link-close sot-theme w-inline-block"
          >
            <div id="icon--back-to-top" className="icon--close" />
          </a>
        </div>
        <div className="nav__categories-wrapper">
          <div
            bind="d1b1123c-08ba-5081-d4ad-912bfba13c68"
            className="container w-container"
          >
            <div
              id="Categories"
              bind="8c4aa56e-6936-e9b7-53da-f7d90e8cac74"
              className="container__heading-section"
            >
              <h1 id="most-recent" className="container__heading">
                Categories
              </h1>
              <div className="hr" />
            </div>
            <div
              bind="d1b1123c-08ba-5081-d4ad-912bfba13c6d"
              className="asset-categories__collection-wrapper w-dyn-list"
            >
              <div
                bind="d1b1123c-08ba-5081-d4ad-912bfba13c6e"
                role="list"
                className="collection-list w-dyn-items"
              >
                <div
                  bind="d1b1123c-08ba-5081-d4ad-912bfba13c6f"
                  role="listitem"
                  className="ap-results__item w-dyn-item"
                >
                  <div bind="7946fc25-24e3-b434-63ee-9f959d82ee7e">
                    <a href="#" className="ap-result__link w-inline-block">
                      <div className="ap-result__wrapper">
                        <div className="mask clipping-mask">
                          <img
                            src="images/febcaa2d-e707-47e4-b2b2-0713fe9cfcb8_632d9d4b.jpg"
                            loading="lazy"
                            width="Auto"
                            alt
                            className="ap-category__image"
                          />
                        </div>
                        <div className="mask clipping-mask bottom">
                          <div className="ap-category__details-wrapper">
                            <div
                              bind="7946fc25-24e3-b434-63ee-9f959d82ee84"
                              className="ap-category__title"
                            />
                            <p className="paragraph--dark" />
                            <div className="hr left blue" />
                            <div className="cc-button__flex-wrapper">
                              <div
                                bind="26c52522-5386-343f-663f-439a96ed1bac"
                                data-w-id="26c52522-5386-343f-663f-439a96ed1bac"
                                className="button"
                              >
                                <div className="button__text">View Assets</div>
                              </div>
                            </div>
                            This is some text inside of a div block.
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar_CategoriesSection;

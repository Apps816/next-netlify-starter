import React from "react";

class CategoriesSection extends React.Component {
  render() {
    return (
      <div className="categories-section">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </div>
        </div>
        <div
          bind="a42689ff-ef96-bab9-9572-c43c6a831cc5"
          className="banner-section"
        >
          <div className="section-divider--top" />
          <div className="div-block-149">
            <img
              src="images/AssetPacks_Signposting.png"
              loading="lazy"
              className="img-banner-signposting"
            />
            <div className="banner__text-wrapper">
              <h1 className="container__heading banner">Featured Assets</h1>
              <p className="container__paragraph banner">
                Explore the most popular assets from the latest Season, for
                content creation, or albums from the Sea of Thieves soundtrack.
              </p>
            </div>
            <a
              bind="335dc0f5-48a4-ca28-8f31-c3dc9ef4151a"
              data-w-id="335dc0f5-48a4-ca28-8f31-c3dc9ef4151a"
              href="featured.html"
              className="button w-inline-block"
            >
              <div className="button__text">View Assets</div>
            </a>
          </div>
          <div className="section-divider--bottom" />
        </div>
        <div className="diag blue" />
      </div>
    );
  }
}

export default CategoriesSection;

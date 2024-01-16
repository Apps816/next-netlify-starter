import React from "react";

class Navbar2 extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__desktop-wrapper">
          <div className="nav__sub-layer" />
          <div className="nav-menu-wrapper">
            <a
              href="index.html"
              aria-current="page"
              className="nav_brand w-nav-brand w--current"
            >
              <div className="image-40" />
            </a>
            <nav role="navigation" className="nav_menu w-nav-menu">
              <a
                href="index.html"
                aria-current="page"
                className="nav_link w-nav-link w--current"
              >
                Home
              </a>
              <a
                href="#"
                data-w-id="068331ff-d64c-e0ff-48a9-ce81028779fd"
                className="nav_link w-nav-link"
              >
                Categories
              </a>
              <a href="featured.html" className="nav_link w-nav-link">
                Featured
              </a>
              <a href="search-results.html" className="nav_link w-inline-block">
                <div>Search </div>
                <div className="nav_link-tag">NEW</div>
              </a>
              <a href="news.html" className="nav_link w-nav-link">
                News
              </a>
              <a href="about.html" className="nav_link w-nav-link">
                About
              </a>
              <a
                href="https://discord.gg/zsNbtzJCHy"
                target="_blank"
                className="nav_link w-nav-link"
              >
                Support
              </a>
            </nav>
          </div>
          <div className="nav_menu_right">
            <a
              bind="01f11dac-bfbb-173a-fc82-34aa6da28d54"
              data-w-id="01f11dac-bfbb-173a-fc82-34aa6da28d54"
              href="https://forms.gle/ZQ6DzQAVLALRHnzz7"
              target="_blank"
              className="button green-bordered w-inline-block"
            >
              <div className="icon--submit-assets" />
              <div className="button__text">Submit Assets</div>
            </a>
          </div>
          <div className="nav_menu-button w-nav-button">
            <div
              bind="42866773-8a87-d3a7-8d2d-362ebd7408af"
              className="w-icon-nav-menu"
            />
          </div>
        </div>
        <div className="nav__mobile-wrapper">
          <div className="nav__mobile-content">
            <h1 className="nav__logo-mobile">Compass</h1>
            <img
              src="images/icon--hamburger-white.svg"
              loading="lazy"
              data-w-id="769fc51f-b96f-16f1-a955-5026cb0d95bf"
              alt
              className="image-42"
            />
          </div>
          <div className="nav__top-layer" />
          <div className="nav__sub-layer" />
        </div>
      </div>
    );
  }
}

export default Navbar2;

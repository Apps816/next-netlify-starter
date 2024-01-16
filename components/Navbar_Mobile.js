import React from "react";

class Navbar_Mobile extends React.Component {
  render() {
    return (
      <div className="mobile-nav__wrapper">
        <div className="div-block-182">
          <img
            src="images/Compass_Icon_Logo_New.png"
            loading="lazy"
            className="image-43"
          />
        </div>
        <div className="div-block-183">
          <div className="div-block-181" />
          <div className="div-block-181-copy">
            <div className="nav__mobile-links">
              <a
                href="index.html"
                aria-current="page"
                className="nav_link mobile w--current"
              >
                Home
              </a>
              <div className="hr dark mobile-nav" />
              <div
                data-hover="false"
                data-delay={0}
                bind="d628974b-a649-fd4d-e790-2d52b77777e1"
                className="dropdown-3 w-dropdown"
              >
                <div className="dropdown-toggle-3 w-dropdown-toggle">
                  <div
                    bind="d628974b-a649-fd4d-e790-2d52b77777e3"
                    className="w-icon-dropdown-toggle"
                  />
                  <div className="nav_link mobile">Categories</div>
                </div>
                <nav className="nav__mobile-dropdown w-dropdown-list">
                  <div
                    bind="d628974b-a649-fd4d-e790-2d52b77777e7"
                    className="w-dyn-list"
                  >
                    <div
                      bind="d628974b-a649-fd4d-e790-2d52b77777e8"
                      role="list"
                      className="w-dyn-items"
                    >
                      <div
                        bind="d628974b-a649-fd4d-e790-2d52b77777e9"
                        role="listitem"
                        className="w-dyn-item"
                      >
                        <a
                          href="#"
                          bind="d628974b-a649-fd4d-e790-2d52b77777ea"
                          className="nav_link mobile w-dropdown-link"
                        />
                      </div>
                    </div>
                    <div
                      bind="d628974b-a649-fd4d-e790-2d52b77777eb"
                      className="w-dyn-empty"
                    >
                      <div>No items found.</div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="hr dark mobile-nav" />
              <a href="search-results.html" className="nav_link mobile">
                Submit Assets
              </a>
              <div className="hr dark mobile-nav" />
              <a href="featured.html" className="nav_link mobile">
                Featured
              </a>
              <div className="hr dark mobile-nav" />
              <a href="search-results.html" className="nav_link mobile">
                Search
              </a>
              <div className="hr dark mobile-nav" />
              <a href="news.html" className="nav_link mobile">
                News
              </a>
              <div className="hr dark mobile-nav" />
              <a href="about.html" className="nav_link mobile">
                About
              </a>
              <div className="hr dark mobile-nav" />
              <a
                href="https://discord.gg/PXA8RsY7QT"
                target="_blank"
                className="nav_link mobile"
              >
                Support
              </a>
              <div className="hr dark mobile-nav" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar_Mobile;

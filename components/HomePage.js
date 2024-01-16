import React from "react";
import PageLoading from "./PageLoading";
import Navbar2 from "./Navbar2";
import Navbar_Mobile from "./Navbar_Mobile";
import Navbar_CategoriesSection from "./Navbar_CategoriesSection";
import HomeHeader from "./HomeHeader";
import HomeAboutParchment from "./HomeAboutParchment";
import CategoriesSection from "./CategoriesSection";
import LatestAPSection from "./LatestAPSection";
import FooterCTADiscord from "./FooterCTADiscord";
import Common_BackToTop from "./Common_BackToTop";
import Footer from "./Footer";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <PageLoading></PageLoading>
        <div
          style={{
            opacity: 0
          }}
          className="loading-wrapper"
        >
          <div
            data-animation="over-right"
            className="w-nav"
            data-easing2="ease"
            data-easing="ease"
            data-collapse="none"
            role="banner"
            data-duration={400}
            id="Top"
            bind="d1b13499-b82d-1184-41c8-cf5d7726e9a3"
          >
            <Navbar2></Navbar2>
            <Navbar_Mobile></Navbar_Mobile>
          </div>
          <Navbar_CategoriesSection></Navbar_CategoriesSection>
          <HomeHeader></HomeHeader>
          <div className="home-about-section wf-section">
            <HomeAboutParchment></HomeAboutParchment>
            <div className="diag" />
          </div>
          <CategoriesSection></CategoriesSection>
          <LatestAPSection></LatestAPSection>
          <FooterCTADiscord></FooterCTADiscord>
          <Common_BackToTop></Common_BackToTop>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default HomePage;

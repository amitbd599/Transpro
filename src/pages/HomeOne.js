import React from "react";
import AboutOne from "../components/AboutOne";
import BannerOne from "../components/BannerOne";
import BlogOne from "../components/BlogOne";
import ContactOne from "../components/ContactOne";
import CounterOne from "../components/CounterOne";
import FeatureOne from "../components/FeatureOne";
import FooterBottomOne from "../components/FooterBottomOne";
import FooterOne from "../components/FooterOne";
import NavbarOne from "../components/NavbarOne";
import PartnerOne from "../components/PartnerOne";
import PortfolioOne from "../components/PortfolioOne";
import ServiceOne from "../components/ServiceOne";
import TeamOne from "../components/TeamOne";
import TestimonialOne from "../components/TestimonialOne";
import WhyChooseUsOne from "../components/WhyChooseUsOne";
import SearchPopup from "../elements/SearchPopup";

const HomeOne = () => {
  return (
    <>
      {/* Search Popup */}
      <SearchPopup />

      {/* Navbar One */}
      <NavbarOne />

      {/* Banner One */}
      <BannerOne />

      {/* Feature One */}
      <div className='faq-area pd-top-120'>
        <FeatureOne />
      </div>

      {/* About One */}
      <AboutOne />

      {/* Service One */}
      <ServiceOne />

      {/* Why Choose Us One */}
      <WhyChooseUsOne />

      {/* Counter One */}

      <CounterOne />

      {/* Team One */}
      <TeamOne />

      {/* Contact One */}
      <div
        className='call-to-contact-area pd-top-240'
        style={{ background: "#F9F9F9" }}
      >
        <ContactOne />
      </div>

      {/* Testimonial One */}
      <TestimonialOne />

      {/* Portfolio One */}
      <PortfolioOne />

      {/* Blog One */}
      <BlogOne />

      {/* Partner One */}
      <PartnerOne />

      {/* Footer One */}
      <FooterOne />

      {/* Footer Bottom One */}
      <FooterBottomOne />
    </>
  );
};

export default HomeOne;

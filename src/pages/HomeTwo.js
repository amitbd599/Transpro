import React from "react";
import AboutTwo from "../components/AboutTwo";
import BannerTwo from "../components/BannerTwo";
import BlogTwo from "../components/BlogTwo";
import CounterTwo from "../components/CounterTwo";
import FaqOne from "../components/FaqOne";
import FooterBottomOne from "../components/FooterBottomOne";
import FooterTwo from "../components/FooterTwo";
import NavbarTwo from "../components/NavbarTwo";
import PartnerTwo from "../components/PartnerTwo";
import PricingOne from "../components/PricingOne";
import RequestQuoteOne from "../components/RequestQuoteOne";
import ServiceTwo from "../components/ServiceTwo";
import TestimonialTwo from "../components/TestimonialTwo";
import VideoAreaOne from "../components/VideoAreaOne";
import WhyChooseUsTwo from "../components/WhyChooseUsTwo";
import SearchPopup from "../elements/SearchPopup";

const HomeTwo = () => {
  return (
    <>
      {/* Search Popup */}
      <SearchPopup />

      {/* Navbar Two */}
      <NavbarTwo />

      {/* Banner Two */}
      <BannerTwo />

      {/* Partner Two */}
      <PartnerTwo />

      {/* About Two */}
      <AboutTwo />

      {/* Counter Two */}
      <CounterTwo />

      {/* Service Two */}
      <ServiceTwo />

      {/* Why Choose Us Two */}
      <WhyChooseUsTwo />

      {/* Request Quote One */}
      <RequestQuoteOne />

      {/* Pricing One */}
      <PricingOne />

      {/* Testimonial Two */}
      <TestimonialTwo />

      {/* Video Area One */}
      <VideoAreaOne />

      {/* Faq One */}
      <FaqOne />

      {/* Blog Two */}
      <BlogTwo />

      {/* Footer Two */}
      <FooterTwo />

      {/* Footer Bottom One */}
      <FooterBottomOne />
    </>
  );
};

export default HomeTwo;

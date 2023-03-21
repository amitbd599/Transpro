import React from "react";
import AboutOne from "../components/AboutOne";
import Breadcrumb from "../components/Breadcrumb";
import CounterOne from "../components/CounterOne";
import FooterBottomOne from "../components/FooterBottomOne";
import FooterOne from "../components/FooterOne";
import NavbarOne from "../components/NavbarOne";
import PartnerOne from "../components/PartnerOne";
import SkillOne from "../components/SkillOne";
import TeamOne from "../components/TeamOne";
import TestimonialTwo from "../components/TestimonialTwo";
import VideoAreaOne from "../components/VideoAreaOne";
import SearchPopup from "../elements/SearchPopup";

const About = () => {
  return (
    <>
      {/* Search Popup */}
      <SearchPopup />

      {/* Navbar One */}
      <NavbarOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"ABOUT US"} />

      {/* About One */}
      <div className='pd-top-120 pd-bottom-120'>
        <AboutOne />
      </div>

      {/* Counter One */}

      <div className='fact-area' style={{ background: "#f9f9f9" }}>
        <CounterOne />
      </div>

      {/* Skill One */}
      <SkillOne />

      {/* Video Area One */}
      <VideoAreaOne />

      {/* Team One */}
      <div className='pd-bottom-80'>
        <TeamOne />
      </div>

      {/* Testimonial Two */}
      <TestimonialTwo />

      {/* Partner One */}
      <PartnerOne />

      {/* Footer One */}
      <FooterOne />

      {/* Footer Bottom One */}
      <FooterBottomOne />
    </>
  );
};

export default About;

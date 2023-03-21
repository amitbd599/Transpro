import React from "react";
import AboutOne from "../components/AboutOne";
import Breadcrumb from "../components/Breadcrumb";
import CounterOne from "../components/CounterOne";
import NavbarOne from "../components/NavbarOne";
import PortfolioOne from "../components/PortfolioOne";
import SkillOne from "../components/SkillOne";
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

      <div classname='fact-area' style={{ background: "#f9f9f9" }}>
        <CounterOne />
      </div>

      {/* Skill One */}
      <SkillOne />

      {/* Video Area One */}
      <VideoAreaOne />
    </>
  );
};

export default About;

import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import NavbarOne from "../components/NavbarOne";
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
    </>
  );
};

export default About;

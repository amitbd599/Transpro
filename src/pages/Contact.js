import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactInner from "../components/ContactInner";
import FooterBottomOne from "../components/FooterBottomOne";
import FooterOne from "../components/FooterOne";
import NavbarOne from "../components/NavbarOne";
import SearchPopup from "../elements/SearchPopup";

const Contact = () => {
  return (
    <>
      {/* Search Popup */}
      <SearchPopup />

      {/* Navbar One */}
      <NavbarOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"CONTACT US"} />

      {/* Breadcrumb */}
      <ContactInner />

      {/* Footer One */}
      <FooterOne />

      {/* Footer Bottom One */}
      <FooterBottomOne />
    </>
  );
};

export default Contact;

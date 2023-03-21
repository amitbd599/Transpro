import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactOne from "../components/ContactOne";
import FaqOne from "../components/FaqOne";
import FooterBottomOne from "../components/FooterBottomOne";
import FooterOne from "../components/FooterOne";
import NavbarOne from "../components/NavbarOne";
import PartnerOne from "../components/PartnerOne";
import SearchPopup from "../elements/SearchPopup";

const Faq = () => {
  return (
    <>
      {/* Search Popup */}
      <SearchPopup />

      {/* Navbar One */}
      <NavbarOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"FAQ"} />

      {/* Faq One */}
      <div className='faq-area pd-top-120 pd-bottom-120'>
        <FaqOne />
      </div>

      {/* Contact One */}
      <div
        className='call-to-contact-area pd-top-140  mt-0'
        style={{ background: "#F9F9F9" }}
      >
        <ContactOne />
      </div>

      {/* Partner One */}
      <PartnerOne />

      {/* Footer One */}
      <FooterOne />

      {/* Footer Bottom One */}
      <FooterBottomOne />
    </>
  );
};

export default Faq;

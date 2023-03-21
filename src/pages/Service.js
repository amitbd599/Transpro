import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactOne from "../components/ContactOne";
import FooterBottomOne from "../components/FooterBottomOne";
import FooterOne from "../components/FooterOne";
import NavbarOne from "../components/NavbarOne";
import PartnerOne from "../components/PartnerOne";
import ServiceOneAll from "../components/ServiceOneAll";
import SearchPopup from "../elements/SearchPopup";

const Service = () => {
  return (
    <>
      {/* Search Popup */}
      <SearchPopup />

      {/* Navbar One */}
      <NavbarOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"SERVICES"} />

      {/* Service One All */}
      <ServiceOneAll />

      {/* Contact One */}
      <div className='call-to-contact-area pd-top-140  mt-0'>
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

export default Service;

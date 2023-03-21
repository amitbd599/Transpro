import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactOne from "../components/ContactOne";
import FooterBottomOne from "../components/FooterBottomOne";
import FooterOne from "../components/FooterOne";
import NavbarOne from "../components/NavbarOne";
import PartnerOne from "../components/PartnerOne";
import PricingOne from "../components/PricingOne";
import SearchPopup from "../elements/SearchPopup";

const Pricing = () => {
  return (
    <>
      {/* Search Popup */}
      <SearchPopup />

      {/* Navbar One */}
      <NavbarOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"PRICING"} />

      {/* Pricing One */}
      <PricingOne />

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

export default Pricing;

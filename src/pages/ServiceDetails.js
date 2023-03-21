import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterBottomOne from "../components/FooterBottomOne";
import FooterOne from "../components/FooterOne";
import NavbarOne from "../components/NavbarOne";
import ServiceDetailsInner from "../components/ServiceDetailsInner";
import SearchPopup from "../elements/SearchPopup";

const ServiceDetails = () => {
  return (
    <>
      {/* Search Popup */}
      <SearchPopup />

      {/* Navbar One */}
      <NavbarOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"SERVICES DETAILS"} />

      {/* Service Details Inner */}
      <ServiceDetailsInner />

      {/* Footer One */}
      <FooterOne />

      {/* Footer Bottom One */}
      <FooterBottomOne />
    </>
  );
};

export default ServiceDetails;

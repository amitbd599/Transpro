import React, { Fragment, Suspense } from "react";
import BannerThree from "../components/BannerThree";
import CompanyOne from "../components/CompanyOne";
import FeatureTwo from "../components/FeatureTwo";
import FooterThree from "../components/FooterThree";
import LogisticsOne from "../components/LogisticsOne";
import NavbarThree from "../components/NavbarThree";
import ServiceThree from "../components/ServiceThree";
import ShipmentOne from "../components/ShipmentOne";
import SolutionOne from "../components/SolutionOne";
import SupportBarOne from "../components/SupportBarOne";
import TestimonialThree from "../components/TestimonialThree";
import Preloader from "../elements/Preloader";

const HomeThree = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* SupportBarOne */}
          <SupportBarOne />

          {/* Navbar Three */}
          <NavbarThree />

          {/* Banner Three */}
          <BannerThree />

          {/* Service Three */}
          <ServiceThree />

          {/* Solution One */}
          <SolutionOne />

          {/* Feature Two */}
          <FeatureTwo />

          {/* Logistics One */}
          <LogisticsOne />

          {/* Shipment One */}
          <ShipmentOne />

          {/* Testimonial Three */}
          <TestimonialThree />

          {/* Company One */}
          <CompanyOne />

          {/* Footer Three */}
          <FooterThree />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeThree;

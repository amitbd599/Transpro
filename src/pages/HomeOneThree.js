import React, { Fragment, Suspense } from "react";
import CompanyOne from "../components/CompanyOne";
import FeatureTwo from "../components/FeatureTwo";
import LogisticsOne from "../components/LogisticsOne";
import NavbarThree from "../components/NavbarThree";
import ServiceThree from "../components/ServiceThree";
import ShipmentOne from "../components/ShipmentOne";
import SolutionOne from "../components/SolutionOne";
import SupportBarOne from "../components/SupportBarOne";
import TestimonialThree from "../components/TestimonialThree";
import Preloader from "../elements/Preloader";
const SigninPopup = React.lazy(() => import("../components/SigninPopup"));

const HomeOneThree = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          {/* <SigninPopup /> */}

          {/* SupportBarOne */}
          <SupportBarOne />

          {/* Navbar Three */}
          <NavbarThree />

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
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeOneThree;

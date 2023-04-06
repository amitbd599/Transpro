import React, { Fragment, Suspense } from "react";

import Preloader from "../elements/Preloader";
import NavbarFour from "../components/NavbarFour";
import BannerFour from "../components/BannerFour";
import SolutionTwo from "../components/SolutionTwo";
import TransportServiceArea from "../components/TransportServiceArea";
import ShipmentTwo from "../components/ShipmentTwo";
import LogisticsTwo from "../components/LogisticsTwo";
import FeatureThree from "../components/FeatureThree";
import TestimonialFour from "../components/TestimonialFour";
import CompanyOne from "../components/CompanyOne";
import FooterThree from "../components/FooterThree";
const SigninPopup = React.lazy(() => import("../components/SigninPopup"));

const HomeFour = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Navbar Four */}
          <NavbarFour />

          {/* Banner Four */}
          <BannerFour />

          {/* Solution Two */}
          <SolutionTwo />

          {/* Transport Service Area */}
          <TransportServiceArea />

          {/* Shipment Two */}
          <ShipmentTwo />

          {/* Logistics Two */}
          <LogisticsTwo />

          {/* Feature Three */}
          <FeatureThree />

          {/* Testimonial Four */}
          <TestimonialFour />

          {/* Company One */}
          <CompanyOne />

          {/* Feature Three */}
          <FeatureThree />

          {/* Footer Three */}
          <FooterThree />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeFour;

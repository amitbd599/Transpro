import React, { Fragment, Suspense } from "react";

import Preloader from "../elements/Preloader";
import NavbarFour from "../components/NavbarFour";
import BannerFive from "../components/BannerFive";
import SolutionThree from "../components/SolutionThree";
import TransportServiceAreaTwo from "../components/TransportServiceAreaTwo";
import ShipmentTwo from "../components/ShipmentTwo";
import LogisticsTwo from "../components/LogisticsTwo";
import ShipmentThree from "../components/ShipmentThree";
import FeatureThree from "../components/FeatureThree";
import TestimonialFour from "../components/TestimonialFour";
import CompanyOne from "../components/CompanyOne";
import FooterThree from "../components/FooterThree";
const SigninPopup = React.lazy(() => import("../components/SigninPopup"));

const HomeFive = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Navbar Five */}
          <NavbarFour />

          {/* Banner Five */}
          <BannerFive />

          {/* Solution Three */}
          <SolutionThree />

          {/* TransportServiceAreaTwo */}
          <TransportServiceAreaTwo />

          {/* Logistics Two */}
          <LogisticsTwo />

          {/* ShipmentThree */}
          <ShipmentThree />

          {/* Feature Three */}
          <FeatureThree />

          {/* Testimonial Four */}
          <TestimonialFour />

          {/* Company One */}
          <CompanyOne />

          {/* Footer Three */}
          <FooterThree />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeFive;

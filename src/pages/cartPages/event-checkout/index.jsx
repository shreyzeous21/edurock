import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";

import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";

import React from "react";
import EventCheckOut from "@/components/cartsAndCheckout/EventCheckout";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title:
    "Event-checkout || Edurock - Professional LMS Online Education Course ReactJS Template",
  description:
    "Elevate your e-learning content with Edurock, the most impressive LMS template for online courses, education and LMS platforms.",
};
export default function EventCheckoutPage() {
  return (
    <div className="main-content  ">
      <MetaComponent meta={metadata} />
      <Preloader />

      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />

        <EventCheckOut />

        <FooterOne />
      </div>
    </div>
  );
}

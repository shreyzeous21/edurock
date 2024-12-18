import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";

import EventsTwo from "@/components/events/EventsTwo";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Event || Edurock - Professional LMS Online Education Course Platform",
  description:
    "Elevate your e-learning content with Edurock, the most impressive LMS template for online courses, education and LMS platforms.",
};
export default function EventListPage2() {
  return (
    <div className="main-content  ">
      <MetaComponent meta={metadata} />
      <Preloader />

      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />
        <EventsTwo />
        <FooterOne />
      </div>
    </div>
  );
}

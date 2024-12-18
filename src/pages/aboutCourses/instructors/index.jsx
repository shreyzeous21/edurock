import InstractorSingle from "@/components/aboutCourses/instractors/InstractorSingle";
import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import React from "react";
import { useParams } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
import FooterThree from "@/components/layout/footers/FooterThree";

const metadata = {
  title:
    "Top Universities || Edurock - Professional LMS Online Education Course ReactJS Template",
  description:
    "Elevate your e-learning content with Edurock, the most impressive LMS template for online courses, education and LMS platforms.",
};
export default function InstractorSinglePage() {
  let params = useParams();
  return (
    <div className="main-content  ">
      <MetaComponent meta={metadata} />
      <Preloader />
      <Header />
      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <PageLinks />
        <InstractorSingle id={params.id} title={params.title} />
        {/* <FooterOne /> */}
        <FooterThree />
      </div>
    </div>
  );
}

import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";
import CourseListOne from "@/components/courseList/CourseListOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import FooterThree from "@/components/layout/footers/FooterThree";

const metadata = {
  title:
    "Courses || Edurock - Professional LMS Online Education Course Platform",
  description:
    "Elevate your e-learning content with Edurock, the most impressive LMS template for online courses, education and LMS platforms.",
};

export default function CourseListPage1() {
  return (
    <div className="main-content  ">
      <MetaComponent meta={metadata} />
      <Preloader />
      <Header />
      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <PageLinks />
        <CourseListOne />
        <FooterThree />
      </div>
    </div>
  );
}

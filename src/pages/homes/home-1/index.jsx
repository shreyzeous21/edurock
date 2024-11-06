// import HomeOne from "@/components/homes/home";
import Header from "@/components/layout/headers/Header";
// import MobileMenu from "@/components/layout/component/MobileMenu";

import HomeHero from "@/components/homes/heros/HomeHero";

import Brands from "@/components/common/Brands";
import Categories from "@/components/homes/categories/Categories";
import Courses from "@/components/homes/courses/Courses";
import TestimonialsOne from "@/components/common/TestimonialsOne";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import WhyCourse from "@/components/homes/WhyCourse";
import Instructors from "@/components/common/Instructors";
import GetApp from "@/components/homes/getApp/GetApp";
import Blog from "@/components/homes/blogs/Blog";
import Join from "@/components/homes/join/Join";
import FooterOne from "@/components/layout/footers/FooterOne";
import Preloader from "@/components/common/Preloader";

import MetaComponent from "@/components/common/MetaComponent";
import University from "@/components/homes/categories/University";
import FooterTwo from "@/components/layout/footers/FooterTwo";
import FooterThree from "@/components/layout/footers/FooterThree";
import FooterFour from "@/components/layout/footers/FooterFour";
import FooterFive from "@/components/layout/footers/FooterFive";
import FooterSeven from "@/components/layout/footers/FooterSeven";

const metadata = {
  title: "Edurock - Professional LMS Online Education Course PLatform",
  description:
    "Elevate your e-learning content with Edurock, the most impressive LMS template for online courses, education and LMS platforms.",
};

export default function HomePage1() {
  return (
    <>
      <Preloader />
      <MetaComponent meta={metadata} />
      <Header />

      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <HomeHero />
        <Brands />
        <Categories />
        <University />
        <Courses />
        <TestimonialsOne />
        <FeaturesOne />
        <WhyCourse />
        {/* <Instructors /> */}
        {/* <GetApp /> */}
        <Blog />
        <Join />
        {/* <FooterOne />
        <FooterTwo /> */}
        <FooterThree />
        {/* <FooterSeven /> */}
        {/* <FooterFour />
        <FooterFive /> */}
      </div>
    </>
  );
}

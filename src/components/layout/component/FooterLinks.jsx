import React from "react";
import { footerLinks } from "../../../data/footerLinks";
import { Link } from "react-router-dom";
export default function FooterLinks({ allClasses }) {
  return (
    <>
      {footerLinks.map((elm, i) => (
        <div key={i} className="col-xl-2 col-lg-4 col-md-6 ">
          <div className={`${allClasses ? allClasses : ""}`}>{elm.title}</div>
          <div className="d-flex y-gap-10 flex-column">
            {elm.links.map((itm, index) => (
              <Link key={index} to={itm.href}>
                {itm.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
      <div className="text-17 text-dark-1 col-auto">
        EduRock: Elevate Your Learning Experience with Innovation and Expertise.
        At EduRock, we are committed to transforming education by combining the
        latest technology with a learner-centered approach to provide
        exceptional learning experiences. Our mission is to support
        professionals and knowledge-seekers with high-quality, accessible
        courses that fuel both career growth and personal enrichment. Founded by
        visionary leaders in education, we believe that personalized learning is
        the key to unlocking everyone’s unique potential. Our programs are built
        for flexibility, enabling you to learn at your own pace with support
        from top industry experts. Whether you’re aiming to excel in Data
        Science, Project Management, Cybersecurity, or other in-demand fields,
        EduRock offers curated learning pathways designed to meet your
        aspirations. With interactive live sessions, comprehensive recorded
        content, and dedicated career support, we ensure that each learner is
        equipped for success in a competitive world.
      </div>
    </>
  );
}

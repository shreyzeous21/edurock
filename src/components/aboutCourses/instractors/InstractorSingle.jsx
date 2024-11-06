import Star from "@/components/common/Star";
import { coursesData } from "@/data/courses";
import React, { useState, useEffect } from "react";
import {
  teamMembers,
  teamMembersFull,
  instractorsEight,
  instractorsNine,
  marketingCoordinator,
} from "@/data/instractors";

import { Link } from "react-router-dom";
import Enroll from "@/components/Enroll";

export default function InstractorSingle({ id }) {
  const [activeTab, setActiveTab] = useState(1);
  const [pageItem, setPageItem] = useState(teamMembers[0]);
  const [courseDescription, setCourseDescription] = useState("");

  useEffect(() => {
    const filtered = [
      ...teamMembers,
      ...teamMembersFull,
      ...instractorsEight,
      ...instractorsNine,
      marketingCoordinator,
    ].find((elm) => elm.id == id);

    if (filtered) {
      setPageItem(filtered);
    }

    const courseData = coursesData.find((course) => course.id == id);
    if (courseData) {
      setCourseDescription(courseData.desc);
    }
  }, [id]);

  const [isEnrollModalOpen, setEnrollModalOpen] = useState(false);

  const handleEnrollClick = () => {
    setEnrollModalOpen(true);
  };

  const closeModal = () => {
    setEnrollModalOpen(false);
  };

  return (
    <>
      <section className="page-header -type-3">
        <div className="page-header__bg bg-purple-1"></div>
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-8 col-lg-9 col-md-11">
              <div className="page-header__content">
                <div className="page-header__img">
                  <img
                    style={{
                      width: "160px",
                      height: "160px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                    src={
                      pageItem.image ||
                      pageItem.imageSrc ||
                      "/assets/img/Instructors-single/1.png"
                    }
                    alt="image"
                  />
                </div>

                <div className="page-header__info pt-20">
                  <h1 className="text-30 lh-14 fw-700 text-white">
                    {pageItem.name}
                  </h1>
                  <div className="d-flex x-gap-20 pt-15">
                    <div className="d-flex items-center text-white">
                      <div className="icon-video-file mr-10"></div>
                      <div className="text-13 lh-1">
                        {pageItem.reviews || 3545} Reviews
                      </div>
                    </div>
                    <div className="d-flex items-center text-white">
                      <div className="icon-person-3 mr-10"></div>
                      <div className="text-13 lh-1">
                        {pageItem.students || pageItem.studentCount || 143}{" "}
                        Students
                      </div>
                    </div>
                    <div className="d-flex items-center text-white">
                      <div className="icon-play mr-10"></div>
                      <div className="text-13 lh-1">
                        {pageItem.courses || pageItem.courseCount || 453}{" "}
                        Programs
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex items-center mt-30">
                  <button
                    className="button -md -green-1 text-dark-1"
                    onClick={handleEnrollClick}
                  >
                    Enroll now
                  </button>

                  <div className="d-flex items-center x-gap-15 text-white ml-25">
                    {pageItem.socialProfile?.map((itm, index) => (
                      <a key={index} href={itm.url}>
                        <i className={`fa ${itm.icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-8 col-lg-9 col-md-11">
              <div className="tabs -active-purple-2 js-tabs">
                <div className="tabs__controls d-flex js-tabs-controls">
                  <button
                    onClick={() => setActiveTab(1)}
                    className={`tabs__button js-tabs-button ${
                      activeTab === 1 ? "is-active" : ""
                    }`}
                    type="button"
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab(2)}
                    className={`tabs__button js-tabs-button ml-30 ${
                      activeTab === 2 ? "is-active" : ""
                    }`}
                    type="button"
                  >
                    Courses
                  </button>
                </div>

                <div className="tabs__content pt-60 lg:pt-40 js-tabs-content">
                  <div
                    className={`tabs__pane -tab-item-1  ${
                      activeTab === 1 ? "is-active" : ""
                    }`}
                  >
                    <h4 className="text-20">Description</h4>
                    <p className="text-light-1 mt-30">{courseDescription}</p>
                  </div>

                  <div
                    className={`tabs__pane -tab-item-2 ${
                      activeTab === 2 ? "is-active" : ""
                    }`}
                  >
                    <div className="row">
                      {coursesData.slice(0, 2).map((elm, i) => (
                        <div key={i} className="col-md-6">
                          <div className="coursesCard -type-1 rounded-8 shadow-3 bg-white">
                            {/* Course card content */}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Enroll isOpen={isEnrollModalOpen} onClose={closeModal} />
    </>
  );
}

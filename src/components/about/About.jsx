import React from "react";

import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">About Us</h1>
                </div>

                <div>
                  <p className="page-header__text">
                    We’re on a mission to deliver engaging, curated courses at a
                    reasonable price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-50 justify-between items-center">
            <div className="col-lg-6 pr-50 sm:pr-15">
              <div className="composition -type-8">
                <div className="-el-1">
                  <img src="/assets/img/about-1/1.jpg" alt="image" />
                </div>
                <div className="-el-2">
                  <img src="/assets/img/about-1/2.jpg" alt="image" />
                </div>
                <div className="-el-3">
                  <img src="/assets/img/about-1/3.jpg" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <h2 className="text-30 lh-16">
                Welcome to Edurock Enhance your skills with best Online courses
              </h2>
              <p className="text-dark-1 mt-30">
                Welcome to Edurock, where education meets innovation, and
                learning becomes a journey filled with excitement and
                possibility. Our mission is to reshape the educational
                experience by merging state-of-the-art technology with a
                relentless pursuit of excellence, all to empower professionals
                and lifelong learners on their paths to career success and
                personal growth.
              </p>
              <p className="pr-50 lg:pr-0 mt-25"></p>
              <div className="d-inline-block">
                <Link to="/" className="button -md -purple-1 text-white mt-30">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

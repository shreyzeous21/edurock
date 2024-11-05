/* eslint-disable react/prop-types */
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function PageLinks({ dark }) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <section className={`breadcrumbs ${dark ? "bg-dark-1" : ""} `}>
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <div className="breadcrumbs__content">
              <div
                className={`breadcrumbs__item ${dark ? "text-dark-3" : ""} `}
              >
                <Link to="/">Home</Link>
              </div>
              {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                const formattedValue = value
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase());

                return (
                  <div
                    key={to}
                    className={`breadcrumbs__item ${
                      dark ? "text-dark-3" : ""
                    } `}
                  >
                    <Link to={to}>{formattedValue}</Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

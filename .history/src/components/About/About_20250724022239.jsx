import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <>
      <div
        className={`container-fluid vh-100 d-flex flex-column justify-content-center align-items-center text-center ${style.HW}`}
      >
        <h2
          className="{$`{style.h1}`}"
          style={{
            color: "#fff",
            fontSize: "45px",
            fontWeight: "bold",
            padding: "10px 0",
            whiteSpace: "nowrap",
          }}
        >
          ABOUT COMPONENT
        </h2>

        <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
          <div className={`${style["line-pefor"]}`}></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className={`${style["line-pefor"]}`}></div>
        </div>

        <div className="row text-start">
          <div className=" mx-auto">
            <div className="item d-flex">
              <p
                style={{ color: "#ffffff" }}
                className={`${style.paragraph} me-4`}
              >
                Freelancer is a free bootstrap theme created by Route. The
                <br />
                download includes the complete source files including
                <br /> HTML, CSS, and JavaScript as well as optional SASS <br />
                stylesheets for easy customization.
              </p>
              <p
                style={{ color: "#ffffff" }}
                className={`${style.paragraph} me-4`}
              >
                Freelancer is a free bootstrap theme created by Route. The
                <br />
                download includes the complete source files including
                <br /> HTML, CSS, and JavaScript as well as optional SASS <br />
                stylesheets for easy customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

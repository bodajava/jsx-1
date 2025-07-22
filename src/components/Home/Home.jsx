import React from "react";
import avatar from "../../assets/avataaars.svg";
import style from "./Homestyle.module.css";

export default function Home() {
  return (
    <>
      <div className={`container-fluid ${style.HW}`}>
        <div className="row min-vh-100 justify-content-center align-items-center text-center">
          <div className="col-10 col-md-8">
            <div className="IMG mb-4">
              <img
                className="img-fluid"
                style={{ maxWidth: "250px" }}
                src={avatar}
                alt="avatar"
              />
            </div>
            <h1 className={`${style["color-ligth"]} pb-3`}>START FRAMEWORK</h1>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <div className={`${style["line-pefor"]}`}></div>
              <i className="fa-solid fa-star text-white"></i>
              <div className={`${style["line-pefor"]}`}></div>
            </div>
            <p className="text-white mt-3">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

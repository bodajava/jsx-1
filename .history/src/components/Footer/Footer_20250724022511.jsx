import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-4 mb-5">
            <div className="item">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-5">
            <div className="item">
              <h3>AROUND THE WEB</h3>
              <div className={style.socialIconsContainer}>
                <div className={style.icon}>
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className={style.icon}>
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className={style.icon}>
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className={style.icon}>
                  <i className="fa-solid fa-globe"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-5">
            <div className="item">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created{" "}
                <br />
                by Route
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </footer>
      <div className={style["p"]}>
        <p className="">Copyright © Your Website 2021</p>
      </div>
    </>
  );
}

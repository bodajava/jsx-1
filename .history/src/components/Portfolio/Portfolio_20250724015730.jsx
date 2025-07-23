import React, { useState } from "react";
import style from "./protfolio.module.css";
import avatar1 from "../../assets/poert1.png";
import avatar2 from "../../assets/port2.png";
import avatar3 from "../../assets/port3.png";

export default function Portfolio() {
  const [makimg, setmakimg] = useState(null);

  function makimgFunction(img) {
    setmakimg(img);
    document
      .querySelector(`.${style.ligthBoxContainer}`)
      .classList.remove("d-none");
    document.querySelector(`.${style.HW}`).classList.add(style.noHover);
  }

  function closeLightBox() {
    setmakimg(null);
    document
      .querySelector(`.${style.ligthBoxContainer}`)
      .classList.add("d-none");
    document.querySelector(`.${style.HW}`).classList.remove(style.noHover);
  }

  return (
    <>
      <div
        className={`container d-flex flex-column justify-content-start align-items-center text-center ${style.HW}`}
        style={{ paddingTop: "150px", minHeight: "100vh" }}
      >
        <h2 className="h1 pt-4" style={{ color: "#2C3E50" }}>
          PROTFOLIO COMPONENT
        </h2>

        <div
          style={{ fontWeight: "bold" }}
          className="d-flex justify-content-center align-items-center gap-3 mt-3"
        >
          <div className={style["line-pefor"]}></div>
          <i className={`fa-solid fa-star ${style.icon}`}></i>
          <div className={style["line-pefor"]}></div>
        </div>

        <div className="row g-5 ">
          <div className="col-md-4 pt-3 ">
            <div
              onClick={() => makimgFunction(avatar1)}
              className={`${style.hoverimg}`}
            >
              <img
                src={avatar1}
                alt="portfolio item 1"
                className="w-100 rounded-3"
              />
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="col-md-4 pt-3 ">
            <div
              onClick={() => makimgFunction(avatar2)}
              className={`${style.hoverimg}`}
            >
              <img
                src={avatar2}
                alt="portfolio item 2"
                className="w-100 rounded-3"
              />
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="col-md-4 pt-3 ">
            <div
              onClick={() => makimgFunction(avatar3)}
              className={`${style.hoverimg}`}
            >
              <img
                src={avatar3}
                alt="portfolio item 3"
                className="w-100 rounded-3"
              />
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="col-md-4">
            <div
              onClick={() => makimgFunction(avatar1)}
              className={`${style.hoverimg}`}
            >
              <img
                src={avatar1}
                alt="portfolio item 4"
                className="w-100 rounded-3"
              />
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="col-md-4 ">
            <div
              onClick={() => makimgFunction(avatar2)}
              className={`${style.hoverimg}`}
            >
              <img
                src={avatar2}
                alt="portfolio item 5"
                className="w-100 rounded-3"
              />
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
          <div className="col-md-4  pb-4">
            <div
              onClick={() => makimgFunction(avatar3)}
              className={`${style.hoverimg}`}
            >
              <img
                src={avatar3}
                alt="portfolio item 6"
                className="w-100 rounded-3"
              />
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${style.ligthBoxContainer} d-none`}
        onClick={closeLightBox}
      >
        <div
          className={`${style.ligthBox}`}
          onClick={(e) => e.stopPropagation()}
        >
          {makimg && (
            <img
              src={makimg}
              alt="Selected Portfolio"
              className="w-100 rounded-3"
            />
          )}
        </div>
      </div>
    </>
  );
}

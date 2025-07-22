// Contact.jsx
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import style from "./Contact.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ userName, userAge, userEmail, userPassword });
  };

  const inputGroupStyle = {
    position: "relative",
    paddingTop: "24px",
    width: "100%",
    maxWidth: "100%", // ضروري للموبايل
  };

  const labelBaseStyle = {
    position: "absolute",
    left: "15px",
    pointerEvents: "none",
    transition: "all 0.3s ease",
    fontSize: "16px",
    color: "#999",
    lineHeight: "30px",
    top: "50%",
    transform: "translateY(-50%)",
  };

  const labelFloatingStyle = {
    top: "0px",
    transform: "translateY(-100%)",
    fontSize: "20px",
    fontWeight: 400,
    color: "#1ABC9C",
    backgroundColor: "#fff",
    padding: "0 4px",
    zIndex: 10,
  };

  const inputStyle = {
    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
    outline: "none",
    width: "100%",
    height: "30px",
    padding: "20px 15px",
    fontSize: "20px",
    fontWeight: 400,
    color: "rgb(33, 37, 41)",
    lineHeight: "30px",
  };

  const renderInput = (id, value, onChange, label, type = "text") => (
    <InputGroup
      className="mb-5 position-relative w-100"
      style={inputGroupStyle}
    >
      <Form.Control
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-3 shadow-sm border-0"
        style={inputStyle}
        autoComplete="off"
      />
      <label
        htmlFor={id}
        style={{
          ...labelBaseStyle,
          ...(value ? labelFloatingStyle : {}),
        }}
      >
        {label}
      </label>
    </InputGroup>
  );

  return (
    <div
      className={`container-fluid d-flex flex-column justify-content-start align-items-center text-center ${style.HW}`}
      style={{ paddingTop: "150px", minHeight: "100vh" }}
    >
      <h2 className="h1 pt-4" style={{ color: "#2C3E50" }}>
        CONTACT SECTION
      </h2>

      <div
        style={{ fontWeight: "bold" }}
        className="d-flex justify-content-center align-items-center gap-3 mt-3"
      >
        <div className={style["line-pefor"]}></div>
        <i className={`fa-solid fa-star ${style.icon}`}></i>
        <div className={style["line-pefor"]}></div>
      </div>

      <div className="row mt-5 w-100 px-3">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
          <Form onSubmit={handleSubmit} className="p-4">
            {renderInput("userName", userName, setUserName, "Username")}
            {renderInput("userAge", userAge, setUserAge, "Age", "number")}
            {renderInput(
              "userEmail",
              userEmail,
              setUserEmail,
              "Email",
              "email"
            )}
            {renderInput(
              "userPassword",
              userPassword,
              setUserPassword,
              "Password",
              "password"
            )}

            <div className="text-center mt-4 d-flex  mb-5">
              <button
                type="submit"
                className="btn text-white px-4 py-2 rounded-3"
                style={{ backgroundColor: "#1abc9c" }}
              >
                Send Message
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

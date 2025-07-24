import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import style from "./navstyle.module.css
";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`${style["custom-navbar"]} ${
        isScrolled ? style["scrolled"] : ""
      }py-4`}
      style={{ backgroundColor: "#2C3E50" }}
    >
      <Container>
        <div className="d-flex justify-content-between align-items-center w-100">
          <Navbar.Brand
            as={Link}
            to="/Home"
            style={{
              color: "#fff",
              fontSize: "1.8rem",
              fontWeight: "bold",
              padding: "10px 0",
              whiteSpace: "nowrap",
            }}
          >
            START FRAMEWORK
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
        </div>

        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="my-2 my-lg-0" navbarScroll>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive
                    ? `nav-link active text-white px-3 py-2 rounded ${style.customBg}`
                    : "nav-link text-white px-3 py-2"
                }`
              }
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              ABOUT
            </NavLink>

            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `${
                  isActive
                    ? `nav-link active text-white px-3 py-2 rounded ${style.customBg}`
                    : "nav-link text-white px-3 py-2"
                }`
              }
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              PORTFOLIO
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? `nav-link active text-white px-3 py-2 rounded ${style.customBg}`
                    : "nav-link text-white px-3 py-2"
                }`
              }
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              CONTACT
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import React from "react";
import { Button, Container, Row } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "../Header/header.css";

const nav__Links = [
  {
    path: "/hotels",
    display: "Hotels",
  },
  {
    path: "/tours",
    display: "Tours",
  },
  {
    path: "/car-rental",
    display: "Car rental",
  },
  {
    path: "/support",
    display: "Support",
  },
];
const Header = () => {
  return (
    <header className="header sticky__header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <Link to="/home">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            {/* Navigation Menu  */}
            <div className="Navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__Links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4'">
                <Button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn primary__btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
              <span className="mobile_menu">
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

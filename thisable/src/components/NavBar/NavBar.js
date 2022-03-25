import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logoimg from "../../assets/images/logo.svg";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-div">
      <Navbar className="navBar">
        <Nav className="nav-logo-container" href="/">
          <img className="logoimg" alt="logo" src={logoimg}></img>
        </Nav>
        <Nav className="nav-button">
          <Nav.Link href="/">즐겨찾기</Nav.Link>
          <Nav.Link href="/videoinput">마이페이지</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;

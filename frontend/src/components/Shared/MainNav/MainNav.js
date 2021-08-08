// import React, { useContext } from 'react';
import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from "../../../App";
import logo from "../../../images/code2.png";

const MainNav = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const { email, photo } = loggedInUser;
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand style={{ fontSize: "25px", }} className="text-info font-weight-bold" as={Link} to="/"><img style={{ width: "35px", }} src={logo} alt="" />Tech World</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink activeClassName="active" className="link font-weight-bold mr-5 py-2 text-decoration-none" as={Link} to="/">Home</NavLink>
            <NavLink activeClassName="active" className="link font-weight-bold mr-5 py-2 text-decoration-none" as={Link} to="/courses">Courses</NavLink>
            <NavLink activeClassName="active" className="link font-weight-bold mr-5 py-2 text-decoration-none" as={Link} to="/team">Team</NavLink>
            <NavLink activeClassName="active" className="link font-weight-bold mr-5 py-2 text-decoration-none" as={Link} to="/team">About</NavLink>
            <NavLink activeClassName="active" className="link font-weight-bold mr-5 py-2 text-decoration-none" to="/dashboard">Dashboard</NavLink>
          </Nav>
          {
            loggedInUser.email
              ?
              <Button className="btn-dark font-weight-bold rounded-pill" size="sm" as={Link} to="/dashboard"><img style={{ height: "2rem" }} className="img-fluid mr-1" src={photo} alt="" />{email}</Button>
              : ""
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default MainNav;
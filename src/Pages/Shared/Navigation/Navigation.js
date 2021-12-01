import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <span style={{ fontWeight: "800", fontSize: "30px" }}>ARIF</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/home">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/home">
                SKILLS
              </Nav.Link>
              <Nav.Link as={Link} to="/home">
                PROJECTS
              </Nav.Link>
              <Nav.Link as={Link} to="/home">
                ABOUT
              </Nav.Link>
              <Nav.Link as={Link} to="/home">
                BLOGS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="text-decoration-none text-white">
              Bikroy.com
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">
                <Link to="/" className="text-decoration-none text-white">
                  All Ads
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <Link to="/login" className="text-decoration-none text-white">
                  Login
                </Link>
              </Nav.Link>
              <Button variant="warning" className="text-white">
                post your add
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

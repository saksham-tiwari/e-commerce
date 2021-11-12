import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import bag from "../assets/shoppingbag.svg";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="color-nav navibar">
        <Container fluid>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>V-Shop</Navbar.Brand>
          </Link>

          <Form className="d-flex searchbar">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 navlinks"
              style={{ maxHeight: "400px" }}
              navbarScroll
            >
              <Nav.Link className="homelink">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/shop" className="nav-link">
                  Shop
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/wishlist" className="nav-link">
                  Wishlist
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/help" className="nav-link">
                  Help
                </Link>
              </Nav.Link>
              <Link to="/login" className="nav-link">
                <Button variant="primary" className="login-button">
                  Log In
                </Button>
              </Link>
              <Nav.Link>
                <Link to="/cart" className="nav-link">
                  <img src={bag} alt="bag" />
                </Link>
              </Nav.Link>
              <Form className="scrollsearch">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar
        bg="light"
        expand="lg"
        className="color-nav navbar navbar-default navbar-static-top"
      >
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>

          <Form className="d-flex searchbar">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 navlinks"
              style={{ maxHeight: "400px" }}
              navbarScroll
            >
              <Nav.Link className="homelink">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/shop" className="nav-link">
                  Shop
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/wishlist" className="nav-link">
                  Wishlist
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/help" className="nav-link">
                  Help
                </Link>
              </Nav.Link>
              <Link to="/login" className="nav-link">
                <Button variant="primary" className="login-button">
                  Log In
                </Button>
              </Link>
              <Nav.Link>
                <Link to="/cart" className="nav-link">
                  <img src={bag} alt="bag" />
                </Link>
              </Nav.Link>
              <Form className="scrollsearch">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

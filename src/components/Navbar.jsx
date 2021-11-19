import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import bag from "../assets/shoppingbag.svg";
import { useUser } from "../contexts/UserContext";

const NavBar = () => {
  const history = useHistory();
  const isUser = useUser();
  // const style2={
  //   maxHeight: "400px",
  //   marginLeft: "75%"
  // }
  // const style1={
  //   maxHeight: "400px"
  // }

  const [search, setSearch] = useState("")

  const searchProd = ()=>{
    setSearch("");
    history.push(`/products/${search}`);
  }

  return (
    <div>
      <Navbar bg="light" expand="lg" className="color-nav navibar">
        <Container fluid>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>V-Shop</Navbar.Brand>
          </Link>

          <Form className="d-flex searchbar" onSubmit={(e)=>{e.preventDefault();}}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
            />
            <Button variant="outline-success" onClick={searchProd}>Search</Button>
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 navlinks"
              style={isUser?{maxHeight: "400px"}:{maxHeight: "400px", marginLeft: "75%"}}
              navbarScroll
            >
              <Nav.Link className="homelink">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </Nav.Link>
              {isUser?<><Nav.Link>
                <Link to="/wishlist" className="nav-link">
                  Wishlist
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/orders" className="nav-link">
                  Orders
                </Link>
              </Nav.Link></>:<></>}
              <Nav.Link>
                <Link to="/help" className="nav-link">
                  Help
                </Link>
              </Nav.Link>
              {/* <Link to className="nav-link"> */}
                <Button variant="primary" className="login-button" onClick={()=>{
                  if(isUser)
                  {
                    // localStorage.removeItem("keys"); 
                    // chnageUser(false);
                    // window.location.reload();
                    history.push("/profile");
                  }
                  else{
                    history.push("/login");
                  }}}>
                  {isUser?"Profile":"SignIn"}
                </Button>
              {/* </Link> */}
              {isUser?<Nav.Link>
                <Link to="/cart" className="nav-link">
                  <img src={bag} alt="bag" />
                </Link>
              </Nav.Link>:<></>}
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

          <Form className="d-flex searchbar" onSubmit={(e)=>{e.preventDefault();}}>
          <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
            />
            <Button variant="outline-success" onClick={searchProd}>Search</Button>
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
              {isUser?<><Nav.Link>
                <Link to="/wishlist" className="nav-link">
                  Wishlist
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/orders" className="nav-link">
                  Orders
                </Link>
              </Nav.Link></>:<></>}
              <Nav.Link>
                <Link to="/help" className="nav-link">
                  Help
                </Link>
              </Nav.Link>
              <Button variant="primary" className="login-button" onClick={()=>{
                  if(isUser)
                  {
                    // localStorage.removeItem("keys"); 
                    // chnageUser(false);
                    // window.location.reload();
                    history.push("/profile")
                  }
                  else{
                    history.push("/login");
                  }}}>
                  {isUser?"Profile":"SignIn"}
                </Button>
              {isUser?<Nav.Link>
                <Link to="/cart" className="nav-link">
                  <img src={bag} alt="bag" />
                </Link>
              </Nav.Link>:<></>}
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

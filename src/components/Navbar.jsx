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
import logo from "../assets/logovshop.png";
import { useAuth } from "../contexts/AuthContext";
import { useLocation } from 'react-router-dom'
import { useSetSearch } from "../contexts/SearchContext";


const NavBar = () => {
  const history = useHistory();
  const isUser = useUser();
  const location = useLocation();
  const changeSearch = useSetSearch();

  // const style2={
  //   maxHeight: "400px",
  //   marginLeft: "75%"
  // }
  // const style1={
  //   maxHeight: "400px"
  // }

  const [search, setSearch] = useState("")

  const isAuth = useAuth();

  const searchProd = (e)=>{
    e.preventDefault();
    if(location.pathname.slice(0,16)!=="/products/query="){
      setSearch("");
      history.push(`/products/query=${search}`);
    } else if(location.pathname.slice(0,16)==="/products/query="){
      console.log("searchcall");
      changeSearch({cond:true, query:search})
      // setSearch("")
      history.push("/")
    }
    
  }

  return (
    <div>
      <Navbar bg="light" expand="lg" className="color-nav navibar">
        <Container fluid>
          <Link to="/" style={{ textDecoration: "none", width:"10%" }}>
            <Navbar.Brand><img src={logo} alt="logo" className="logo"></img></Navbar.Brand>
          </Link>

          {!isAuth?
          <Form className="d-flex searchbar" onSubmit={searchProd}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>:<></>}
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
              <Nav.Link className="homelink">
                <Link to="/products-page" className="nav-link">
                  Products
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
                  value={search}
                  onChange={(e)=>{setSearch(e.target.value)}}
                />
            <Button variant="outline-success" onClick={searchProd}>Search</Button>
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

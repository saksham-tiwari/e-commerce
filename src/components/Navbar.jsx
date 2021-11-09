import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="color-nav navibar">
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
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Shop</Nav.Link>
        <Nav.Link href="#action2">Wishlist</Nav.Link>
        <Nav.Link href="#action2">Help</Nav.Link>
        <Button variant="primary">Log In</Button>        
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavBar

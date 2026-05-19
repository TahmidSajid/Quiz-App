import React from "react";
import { Button, Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavSection = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Quiz App</Navbar.Brand>
        <Button >Logut</Button>
      </Container>
    </Navbar>
    </>
  );
};

export default NavSection;

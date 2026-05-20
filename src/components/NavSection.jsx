import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from "../context/AuthContext";

const NavSection = () => {
  const { user, token, register, login, logout } = useContext(AuthContext);

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Quiz App</Navbar.Brand>
        <Button onClick={()=>{logout()}}>Logut</Button>
      </Container>
    </Navbar>
    </>
  );
};

export default NavSection;

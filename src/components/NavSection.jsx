import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AuthContext } from "../context/AuthContext";

const NavSection = ({setScreen}) => {
  const { user, token, register, login, logout } = useContext(AuthContext);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Quiz App</Navbar.Brand>
          <Nav>
            <Button 
              onClick={() => {
                setScreen('record');
              }}
            >
              Results
            </Button>
            <Button className="ms-4"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavSection;

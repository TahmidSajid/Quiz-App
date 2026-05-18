import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const RegisterScreen = ({ setScreen }) => {
  const {user,token,register} = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    register({
      name: name,
      email: email,
      password: password,
    });
  };

  // useEffect(()=>{
  //   console.log(user);
  //   console.log(token);
  // },[user,token])

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="text-center">
            <Button onClick={() => setScreen("login")}>Login</Button>
            {" ------OR------- "}
            <Button disabled>Register</Button>
          </Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Emil*****"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="*********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Button className="w-100" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default RegisterScreen;

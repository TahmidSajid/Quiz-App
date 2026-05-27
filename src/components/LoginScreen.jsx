import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = ({ setScreen }) => {
  const { user, token, register, login, logout } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let success = await login({
      email: email,
      password: password,
    });

    if(success){
      setEmail('');
      setPassword('');
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="text-center">
            <Button disabled>Login</Button>
            {" ------OR------- "}
            <Button onClick={() => setScreen("register")}>Register</Button>
          </Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="*********"
                value={password}
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

export default LoginScreen;

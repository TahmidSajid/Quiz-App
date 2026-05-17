import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const RegisterScreen = ({setScreen}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(confirmPassword);
    }

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="text-center">
            <Button onClick={()=>setScreen('login')}>Login</Button>
            {" ------OR------- "}
            <Button disabled>Register</Button>
          </Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="*********" onChange={(e)=>setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="confirm_password" placeholder="*********" onChange={(e)=>setConfirmPassword(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Button className="w-100" type="submit">Submit</Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default RegisterScreen;

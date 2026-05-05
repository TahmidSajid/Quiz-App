import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const StartScreen = ({ handleSubmit }) => {
  return (
    <>
      <Card>
        <Card.Body className="text-center">
          <Card.Title>Quiz App</Card.Title>
          <Card.Text>Evaluet Your Self</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit("on-going");
            }}
          >
            {"Lets Start --------->"}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default StartScreen;

import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const ResultScreen = ({ handleSubmit }) => {
  return (
    <>
      <Card>
        <Card.Body className="text-center">
          <Card.Title>Your Result</Card.Title>
          <Card.Text>########################</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit("start");
            }}
          >
            {"Reset"}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ResultScreen;

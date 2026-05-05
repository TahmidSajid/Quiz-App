import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const QuestionScreen = ({ handleSubmit }) => {
  return (
    <>
      <Card>
        <Card.Body className="text-center">
          <Card.Title>Answer The Question</Card.Title>
          <Card.Text>########################</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit("end");
            }}
          >
            {"Lets Finish --------->"}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default QuestionScreen;

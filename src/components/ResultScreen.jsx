import React from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";

const ResultScreen = ({ handleReset, rightCount, wrongCount, answers }) => {
  return (
    <>
      <Card>
        <Card.Body className="text-center">
          <Card.Title>Your Result</Card.Title>
          <Card.Text>########################</Card.Text>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan="2">Result Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Right</td>
                <td>Wrong</td>
              </tr>
              <tr>
                <td>{rightCount}</td>
                <td>{wrongCount}</td>
              </tr>
            </tbody>
          </Table>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan="3">Answers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Question</td>
                <td>Answer</td>
                <td>Answered</td>
              </tr>
              {answers.map((data,index) => {
                return (
                  <tr key={index}>
                    <td>{data.question.question}</td>
                    <td>{data.question.answer}</td>
                    <td className={data.question.answer === data.answered ? 'bg-success' : 'bg-danger'}>{data.answered}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button
            variant="primary"
            onClick={() => {
              handleReset();
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

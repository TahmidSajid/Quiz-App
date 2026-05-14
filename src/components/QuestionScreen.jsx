import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SuccessAlert from "./SuccessAlert";
import DangerAlert from "./DangerAlert";

const QuestionScreen = ({ handleSubmit, question, questionCount, answerCount }) => {
  const [result, setResult] = useState(null);
  const [lock, setLock] = useState(false);
  const [answer, setAnswer] = useState();

  const judgeAnswer = (option) => {
    if (option === question.answer) {
      setResult(true);
    } else {
      setResult(false);
    }
    setAnswer(option);
  };

  return (
    <>
      <Card>
        <Card.Body className="text-center">
          <Card.Title>Answer The Question {' ('+questionCount+' of '+answerCount+') '}</Card.Title>
          <Card.Text>{question.question}</Card.Text>
          <Row>
            {question.options.map((option, index) => {
              return (
                <Col key={index}>
                  <Button
                    variant="primary"
                    className='w-100'
                    disabled={lock}
                    onClick={() => {
                      judgeAnswer(option);
                      setLock(true);
                    }}
                  >
                    {option}
                  </Button>
                </Col>
              );
            })}
          </Row>
          <Row className="mt-4">
            {result == true && (
              <Col>
                {" "}
                <SuccessAlert />{" "}
              </Col>
            )}
            {result == false && (
              <Col>
                {" "}
                <DangerAlert answer={question.answer} />{" "}
              </Col>
            )}
          </Row>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">
          <Button
            variant="primary"
            disabled={!lock}
            onClick={() => {
              handleSubmit(result, question, answer);
              setLock(false);
              setResult(null);
            }}
          >
            {"Next ------->"}
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default QuestionScreen;

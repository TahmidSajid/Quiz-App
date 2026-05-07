import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SuccessAlert from "./SuccessAlert";
import DangerAlert from "./DangerAlert";

const QuestionScreen = ({ handleSubmit, question }) => {

  const [result, setResult] = useState(null);
 
  const judgeAnswer = (option) => {
    if(option == question.answer){
      setResult(true);
    }
    else{
      setResult(false);
    }
  }

  return (
    <>
      <Card>
        <Card.Body className="text-center">
          <Card.Title>Answer The Question</Card.Title>
          <Card.Text>{question.question}</Card.Text>
          <Row>
            {question.options.map((option, index) => {
              return (
                <Col key={index}>
                  <Button variant="primary" className="w-100" onClick={()=>{judgeAnswer(option)}}>
                    {option}
                  </Button>
                </Col>
              );
            })}
          </Row>
          <Row className="mt-4">
            {
              result == true && (<Col> <SuccessAlert/> </Col>)
            }
            {
              result == false && (<Col> <DangerAlert answer={question.answer}/> </Col>)
            }
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default QuestionScreen;

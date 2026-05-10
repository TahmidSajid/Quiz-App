import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import ResultScreen from "./components/ResultScreen";
import questions from "./data/question";

function App() {
  const [screen, setScreen] = useState("start");
  const [index, setIndex] = useState(1);
  const [question, setQuestion] = useState({});
  const [rightCount, setRightCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const handleSubmit = (value) => {
    value ? setRightCount(rightCount + 1) : setWrongCount(wrongCount + 1);
    handleIndex();
  };

  const handleIndex = ()=>{
    let questionId = index;
    if(questions.length >= questionId){
      let question = questions.find((question) => question.id == questionId);
      questionId = questionId + 1;
      setIndex(questionId);
      setQuestion(question);
      setScreen('on-going');
      return true;
    }

    setQuestion({});
    setIndex(1);
    setScreen('end');
    return true

  }

  const handleReset = () => {
    setScreen('start');
    setRightCount(0);
    setWrongCount(0);
  }

  return (
    <>
      <Container className="vh-100 d-flex">
        <Row className="justify-content-center align-items-center w-100">
          <Col className="col-lg-6">
            {screen == "start" && <StartScreen handleIndex={handleIndex} />}
            {screen == "on-going" && <QuestionScreen handleSubmit={handleSubmit} question={question}/>}
            {screen == "end" && <ResultScreen handleReset={handleReset} rightCount={rightCount} wrongCount={wrongCount}/>}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

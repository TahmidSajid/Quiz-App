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
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState({});
  const [rightCount, setRightCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleSubmit = (result, question, answer) => {
    result ? setRightCount(rightCount + 1) : setWrongCount(wrongCount + 1);

    setAnswers([...answers,{
      question: question,
      answered: answer,
    }]);

    handleIndex();
  };

  const handleIndex = ()=>{
    let questionId = index;
    if(questions.length > questionId){
      let question = questions[index]
      questionId = questionId + 1;
      setIndex(questionId);
      setQuestion(question);
      setScreen('on-going');
      return true;
    }

    setQuestion({});
    setIndex(0);
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
            {screen == "on-going" && <QuestionScreen handleSubmit={handleSubmit} question={question} questionCount={questions.length} answerCount={index}/>}
            {screen == "end" && <ResultScreen handleReset={handleReset} rightCount={rightCount} wrongCount={wrongCount} answers={answers}/>}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

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
  const [currentIndex, setCurrentIndex] = useState(0);
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

    handleIndex(currentIndex);
  };

  const handleIndex = (index)=>{
    console.log(index);
    if(questions.length > index){
      let question = questions[index]
      let futureIndex = index + 1;
      setCurrentIndex(futureIndex);
      setQuestion(question);
      setScreen('on-going');
      return true;
    }

    setQuestion({});
    setCurrentIndex(0);
    setScreen('end');
    return true

  }

  const handleReset = () => {
    setScreen('start');
    setAnswers([]);
    setRightCount(0);
    setWrongCount(0);
  }

  const handleStart = () => {
    handleIndex(currentIndex);
  }

  return (
    <>
      <Container className="vh-100 d-flex">
        <Row className="justify-content-center align-items-center w-100">
          <Col className="col-lg-6">
            {screen == "start" && <StartScreen handleStart={handleStart} />}
            {screen == "on-going" && <QuestionScreen handleSubmit={handleSubmit} question={question} questionCount={questions.length} answerCount={currentIndex}/>}
            {screen == "end" && <ResultScreen handleReset={handleReset} rightCount={rightCount} wrongCount={wrongCount} answers={answers}/>}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

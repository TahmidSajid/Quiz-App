import { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import ResultScreen from "./components/ResultScreen";
import questions from "./data/question";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import { AuthContext } from "./context/AuthContext";
import NavSection from "./components/NavSection";
import api from "./api/axios";
import { handleError, handleSuccess } from "./api/handler";
import toast from "react-hot-toast";
import RecordScreen from "./components/RecordScreen";

function App() {
  const { user, token, register, login, logout } = useContext(AuthContext);
  const [screen, setScreen]                      = useState("login");
  const [currentIndex, setCurrentIndex]          = useState(0);
  const [question, setQuestion]                  = useState({});
  const [questions, setQuestions]                = useState(null);
  const [rightCount, setRightCount]              = useState(0);
  const [wrongCount, setWrongCount]              = useState(0);
  const [answers, setAnswers]                    = useState([]);

  const handleSubmit = (result, question, answer) => {
    result ? setRightCount(rightCount + 1) : setWrongCount(wrongCount + 1);

    setAnswers([...answers,{
      question: question,
      answered: answer,
    }]);

    handleIndex(currentIndex);
  };

  const getQuestion = async () => {
    try {

      let res = await api.get('/questions');
      let questions = handleSuccess(res,true);
      setQuestions(questions);
      return questions;

    } catch (error) {

      handleError(error,true);
    
    }
  }

  const saveAnswers = async (answers) => {
    try {

      let res = await api.post('/answers',answers);
      handleSuccess(res,true);
      return true;

    } catch (error) {

      handleError(error,true);
      throw error;
    
    }
  } 

  const handleIndex = async (index)=>{
    
    let qusData = questions;

    if(!qusData){
      qusData = await getQuestion();
    }

    if(qusData.length > index){

      let question = qusData[index]
      let futureIndex = index + 1;
      setCurrentIndex(futureIndex);
      setQuestion(question);
      setScreen('on-going');
      return true;
    
    }

    setQuestion({});
    setCurrentIndex(0);
    setScreen('end');
    return true;

  }

  const handleReset = async () => {
    let answerData  = answers.map((answer)=>({
        questionId : answer.question.uuid,
        answer : answer.answered,
    }));

    console.log(answerData);
    
    try {
      await saveAnswers(answerData);
      setScreen('start');
      setAnswers([]);
      setQuestions(null);
      setRightCount(0);
      setWrongCount(0);
    } catch (error) {
      toast.error('Answer Saving Failed');
    }
    
  }

  const handleStart = () => {
    handleIndex(currentIndex);
  }

  useEffect(()=>{
    if(token){
      setScreen('start');
    }
    else{
      setScreen('login');
    }
  },[user,token])


  return (
    <>
      <Container>
        <Row className="justify-content-center align-items-center w-100">
          <Col>
            {token && <NavSection setScreen={setScreen}/>}
          </Col>
        </Row>
        <Row className="vh-100 d-flex justify-content-center align-items-center w-100">
          <Col className="col-lg-6">
            {!token && screen === "login" && <LoginScreen setScreen={setScreen}/>}
            {!token && screen === "register" && <RegisterScreen setScreen={setScreen}/>}
            {token && screen === "record" && <RecordScreen/>}
            {token && screen === "start" && <StartScreen handleStart={handleStart} />}
            {token && screen === "on-going" && <QuestionScreen handleSubmit={handleSubmit} question={question} questionCount={questions.length} answerCount={currentIndex}/>}
            {token && screen === "end" && <ResultScreen handleReset={handleReset} rightCount={rightCount} wrongCount={wrongCount} answers={answers}/>}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

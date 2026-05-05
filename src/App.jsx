import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import StartScreen from "./components/StartScreen";
import QuestionScreen from "./components/QuestionScreen";
import ResultScreen from "./components/ResultScreen";

function App() {
  const [screen, setScreen] = useState("start");

  const handleSubmit = (value) => {
    setScreen(value);
  };

  return (
    <>
      <Container className="vh-100 d-flex">
        <Row className="justify-content-center align-items-center w-100">
          <Col className="col-lg-6">
            {screen == "start" && <StartScreen handleSubmit={handleSubmit} />}
            {screen == "on-going" && (
              <QuestionScreen handleSubmit={handleSubmit} />
            )}
            {screen == "end" && <ResultScreen handleSubmit={handleSubmit} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

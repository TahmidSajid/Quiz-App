import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import { handleError, handleSuccess } from "../api/handler";
import api from "../api/axios";

const RecordScreen = () => {
  const [results, setResults] = useState(null);

  const getResult = async () => {
    try {
      let res = await api.get("/results");
      let data = handleSuccess(res, true);
      console.log(data);
      setResults(data);
    } catch (error) {
      handleError(error, true);
    }
  };

  useEffect(() => {
    getResult();
  }, []);

  return (
    <>
      <Card>
        <Card.Body className="text-center">
          <Card.Title>Your Result</Card.Title>
          {!results && <h4>Loading....</h4>}
          {results &&
            results.map((result, key) => {
              return (
                <Table striped bordered hover key={result.id}>
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
                    {result.answers.map((data, index) => {
                      return (
                        <tr key={data.question_id}>
                          <td>{data.question_text}</td>
                          <td>{data.correct_answer}</td>
                          <td
                            className={
                              data.answer === data.correct_answer
                                ? "bg-success"
                                : "bg-danger"
                            }
                          >
                            {data.answer}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              );
            })}
        </Card.Body>
      </Card>
    </>
  );
};

export default RecordScreen;

import React from "react";
import { Alert } from "react-bootstrap";

const DangerAlert = ({answer}) => {
  return (
    <>
      <Alert variant="danger">
        <Alert.Heading>Wrong Answer</Alert.Heading>
        <hr />
        <p>
            Correct answer is {answer}.
        </p>
      </Alert>
    </>
  );
};

export default DangerAlert;

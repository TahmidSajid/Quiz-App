import React from "react";
import { Alert } from "react-bootstrap";

const SuccessAlert = () => {
  return (
    <>
      <Alert variant="success">
        <Alert.Heading>Correct Answer</Alert.Heading>
        <hr />
        <p>
            Your answer is right.
        </p>
      </Alert>
    </>
  );
};

export default SuccessAlert;

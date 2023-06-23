import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import axios from "axios";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";

const ForgotPassword = (props) => {
  const emailRef = useRef();
  const [spinner, setSpinner] = useState();

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();
    try {
      setSpinner(true);
      let res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyACEG0j7ZsoZfGZzWq5No8W8_75yFKPx-k",
        { requestType: "PASSWORD_RESET", email: emailRef.current.value }
      );
      console.log(res);
      setSpinner(false);
      props.rodalHandler()
    } catch (e) {
      alert(e.response.data.error.message);
    }
  };

  return (
    <Container>
      
        <Form onSubmit={forgotPasswordHandler}>
          <Form.Group className="m-3" controlId="emailforpass">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              size="lg"
              type="email"
              placeholder="Enter email"
              required
              ref={emailRef}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="m-4" controlId="button">
           <Button className="w-100" type="submit">
             { spinner?<Spinner/>:'Reset Password'}
            </Button>
          </Form.Group>
        </Form>
      
    </Container>
  );
};

export default ForgotPassword;

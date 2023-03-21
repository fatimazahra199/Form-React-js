import { findByLabelText } from "@testing-library/react";
import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

function LoginForm() {
  return ( 
    <div class="container d-flex justify-content-center align-items-center" >
    <div class="card text-black m-5 w-45" >
      <Form className="m-5 d-flex flex-column p-2 justify-content-center align-content-center ">
        <Form.Group controlId="formBasicEmail" class ="" >
          <Form.Label class="text-left mb-3 font-weight-bold">Email address</Form.Label>
          <InputGroup>
              <InputGroup.Text>@</InputGroup.Text>
            <Form.Control type="email" placeholder="Enter email" />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="">
          <Form.Label class="text-left mb-3 mt-3">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <span class="text-secondary mb-4">
          Forgot password?
        </span>
        <div class="d-flex justify-content-center font-weight-bold mb-2"> 
        <Button variant="primary" type="submit" class="w-48 btn btn btn-outline-primary ">
          Submit
        </Button>
        </div>
        <div> 
          Don't have an account?
          <span class="text-secondary p-1 border ml-3 border-secondary rounded">
          Create new 
        </span>
        </div>
      </Form>
    </div>
    </div>
  );
}

export default LoginForm;

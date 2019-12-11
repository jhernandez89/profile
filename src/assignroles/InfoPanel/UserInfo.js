import React from "react";
import { Form } from "react-bootstrap";

const UserInfo = ({ user }) => {
  // console.log('user', user)
  return (
    <div>
      <Form className="form-wrapper">
        <Form.Group>
          <Form.Label>First</Form.Label>
          <Form.Control defaultValue={user.FirstName}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Middle</Form.Label>
          <Form.Control
            defaultValue={user.MiddleName ? user.MiddleName : ""}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Last</Form.Label>
          <Form.Control defaultValue={user.LastName}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Suffix</Form.Label>
          <Form.Control
            defaultValue={user.Suffix ? user.Suffix : ""}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            defaultValue={user.auth0Email ? user.auth0Email : ""}
          ></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default UserInfo;

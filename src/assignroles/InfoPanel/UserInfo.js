import React from "react";
import { Form, Row, Col} from "react-bootstrap";


const UserInfo = ({ user }) => {
  // console.log('user', user)
  return (
    <div>
      <Form className="form-wrapper">
        <Form.Group>
          <Form.Label>First</Form.Label>
          <Form.Control value={user.FirstName}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Middle</Form.Label>
          <Form.Control
            value={user.MiddleName ? user.MiddleName : ""}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Last</Form.Label>
          <Form.Control value={user.LastName}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Suffix</Form.Label>
          <Form.Control value={user.Suffix ? user.Suffix : ""}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={user.auth0Email ? user.auth0Email : ""}
          ></Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

export default UserInfo;

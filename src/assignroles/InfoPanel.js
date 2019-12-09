import React from "react";
import UserInfo from "./InfoPanel/UserInfo";
import Picture from "./InfoPanel/Picture.js";
import { Form, Row, Col, Container } from "react-bootstrap";
import DepartmentDisplay from "./InfoPanel/DepartmentDisplay.js";
import Roles from "./InfoPanel/Roles.js";

const InfoPanel = ({ user }) => {
  return (
    <Container fluid={true}>
      <Row>
        <Col md={4}></Col>
        <Col md={8}>
          <Row className="profile-name-wrapper">
            <h2>
              {user.FirstName} {user.LastName}: Profile
            </h2>
          </Row>
          <Row>
            <Picture user={user} />
            <UserInfo user={user} className="user-info" />
          </Row>
          <Row>
            <Col md={10}>
              <Roles />
            </Col>
            <Col md={2}>
              <DepartmentDisplay />
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <Permissions/> */}
      {/* <UserDepartments/> */}
    </Container>
  );
};

export default InfoPanel;

import React from "react";
import "../css/UserComponentDashboard.css";
import { Container, Col, Row } from "react-bootstrap";

function UserComponentDashboard(props) {
  return (
    <Container fluid={true} className="dashboardUserContainer">
      <Row>
        <Col
          xxl={4}
          xl={4}
          lg={4}
          md={4}
          sm={4}
          xs={4}
          className="adminProfileImageContainer"
        >
          <img
            className="adminProfileImage"
            src={props.image}
            alt="productImage"
          />
        </Col>

        <Col
          xxl={8}
          xl={8}
          lg={8}
          md={8}
          sm={8}
          xs={8}
          className="userDetailsContainer"
        >
          <Row>
            <Col
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="dashboardUserFullName"
            >
              {props.firstName + " " + props.otherNames}
            </Col>
          </Row>
          <Row>
            <Col
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="dashboardUserEmail"
            >
              {props.email}
            </Col>
          </Row>
          <Row>
            <Col
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="dashboardUserPhone"
            >
              {props.phone}
            </Col>
          </Row>

          <Row className="adminUserEditAndDeleteButtonContainer">
            <Col
              xxl={{ span: 4, offset: 3 }}
              xl={{ span: 4, offset: 3 }}
              lg={{ span: 4, offset: 3 }}
              md={{ span: 4, offset: 3 }}
              sm={{ span: 4, offset: 3 }}
              xs={{ span: 4, offset: 3 }}
              className="onlyAdminUserEditButtonContainer"
            >
              <button
                onClick={() => props.Edit(props.Id)}
                className="adminUserEditButton"
              >
                edit
              </button>
            </Col>
            <Col
              xxl={4}
              xl={4}
              lg={4}
              md={4}
              sm={4}
              xs={4}
              className="adminUserDeleteButtonContainer"
            >
              <button
                onClick={() => props.Delete(props.Id)}
                className="adminUserDeleteButton"
              >
                delete
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default UserComponentDashboard;

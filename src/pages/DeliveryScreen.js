import React from "react";
import "../css/deliveryScreen.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Dropdown, Card } from "react-bootstrap";
import airpods from "../../src/assets/images/airpods.jpg";

export default function DeliveryScreen() {
  return (
    <div className="container-fluid">
      <Row className="row-one">
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: 50,
            marginTop: 20,
          }}
        >
          <p style={{ fontSize: 18, fontWeight: "600", paddingRight: 10 }}>
            From
          </p>
          <input
            type="date"
            id="from"
            style={{ borderRadius: 10, width: "15rem", textAlign: "center" }}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: 70,
            marginTop: 20,
          }}
        >
          <p style={{ fontSize: 18, fontWeight: "600", paddingRight: 10 }}>
            To
          </p>
          <input
            type="date"
            id="to"
            style={{ borderRadius: 10, width: "15rem", textAlign: "center" }}
          />
        </Col>
        <Col
          style={{
            marginTop: 20,
          }}
        >
          <button className="filterButton">Filter</button>
        </Col>
        <hr style={{ color: "#000", marginTop: 15 }} />
      </Row>

      <Row className="row-two">
        <Col>
          <h5 style={{ fontSize: 18, fontWeight: "600" }}>PRODUCT</h5>
        </Col>
        <Col>
          <p style={{ fontSize: 18, fontWeight: "600" }}>CUSTOMER</p>
        </Col>
        <Col>
          <h5 style={{ fontSize: 18, fontWeight: "600" }}>LOCATION</h5>
        </Col>

        <Col>
          <h5 style={{ fontSize: 18, fontWeight: "600" }}>QUANTITY</h5>
        </Col>

        <Col>
          <h5 style={{ fontSize: 18, fontWeight: "600" }}>STATUS</h5>
        </Col>

        <Col>
          <h5
            style={{
              fontSize: 18,
              fonFamily: "'Oswald', sans-serif",
              fontWeight: "800",
            }}
          >
            DELIVERY
          </h5>
        </Col>
      </Row>

      <Row className="row-three">
        <Col>
          <Card.Img
            style={{ width: 100, height: 100 }}
            src={airpods}
            variant="top"
            className="img"
          />
        </Col>
        <Col>
          <p style={{ fontSize: 18, fonFamily: "'Oswald', sans-serif" }}>
            James Addo
          </p>
        </Col>
        <Col>
          <p style={{ fontSize: 18, fonFamily: "'Oswald', sans-serif" }}>
            Tema
          </p>
        </Col>

        <Col>
          <p style={{ fontSize: 18, fonFamily: "'Oswald', sans-serif" }}>10</p>
        </Col>

        <Col>
          <p style={{ fontSize: 18, background: "#2FDE17", width: 55 }}>Paid</p>
        </Col>

        <Col>
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              style={{
                width: 100,
                fontSize: 15,
                background: "yellow",
                color: "#000",
                textTransform: "capitalize",
              }}
            >
              Pending
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                style={{ background: "green", width: 100, color: "#fff" }}
                href="#/action-1"
              >
                Delivered
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <hr />
    </div>
  );
}

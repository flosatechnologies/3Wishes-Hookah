import React from "react";
import "../css/Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsArchive, BsCreditCard } from "react-icons/bs";
import { RiTruckLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/images/logo.jpeg";
import userImage from "../assets/images/contact.jpg";

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row menuBar">
        <div className="col-lg-2">
          <img src={require("../assets/images/logo.jpeg")} alt="logo" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-2 dashboardButtonSection">
          <div className="row profileSection">
            <div>
              {/* <img
                src={require("../assets/images/contact.jpg")}
                alt="userImage"
                width="100"
                height="100"
              /> */}
              <FaUserCircle
                style={{
                  width: 70,
                  height: 70,
                  marginRight: 20,
                }}
              />
            </div>
            <div>
              <h5>Welcome,</h5>
              <div>User</div>
            </div>
          </div>

          <div className="row">
            <button className="dashboardButtons">
              <BsArchive style={{ marginRight: 15 }} /> Product
            </button>
          </div>
          <div className="row">
            <button className="dashboardButtons">
              <BsCreditCard style={{ marginRight: 15 }} />
              Payment
            </button>
          </div>
          <div className="row">
            <button className="dashboardButtons">
              <RiTruckLine style={{ marginRight: 15 }} />
              Delivery
            </button>
          </div>
          <div className="row">
            <button className="dashboardButtons">
              <AiOutlineLogout style={{ marginRight: 15 }} />
              Logout
            </button>
          </div>
        </div>
        <div className="col-lg-10 workspace">{/* <h1>Work Space</h1> */}</div>
      </div>
    </div>
  );
}

export default Dashboard;

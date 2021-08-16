import React from "react";
import "../css/UserComponentDashboard.css";

function UserComponentDashboard(props) {
  return (
    <div className="dashboardUserContainer">
      <div className="adminProfileImageContainer">
        <img
          className="adminProfileImage"
          src={props.image}
          alt="productImage"
        />
      </div>

      <div className="userDetailsContainer">
        <div className="dashboardUserFullName">{props.fullName}</div>

        <div className="dashboardUserEmail">{props.email}</div>
        <div className="dashboardUserPhone">{props.phone}</div>

        <div className="adminUserEditAndDeleteButtonContainer">
          <div className="onlyAdminUserEditButtonContainer">
            <button className="adminUserEditButton">edit</button>
          </div>
          <div className="adminUserDeleteButtonContainer">
            <button className="adminUserDeleteButton">delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserComponentDashboard;

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
            <button
              onClick={props.Edit(props.Id)}
              className="adminUserEditButton"
            >
              edit
            </button>
          </div>
          <div className="adminUserDeleteButtonContainer">
            <button
              onClick={props.Delete(props.Id)}
              className="adminUserDeleteButton"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserComponentDashboard;

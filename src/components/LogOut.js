import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../Store/authActions";

const LogOut = (props) => {
  return (
    <div>
      <button onClick={props.logoutUser()}>LogOut</button>
    </div>
  );
};

const mapDispatchToProps = {
  logoutUser,
};
export default connect(null, mapDispatchToProps)(LogOut);

import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, login, role, ...rest }) {
  if (login && role === "admin") {
    return (
      <Route
        {...rest}
        render={(props) => {
          return <Component {...props} />;
        }}
      />
    );
  }

  //else
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Redirect to={{ pathname: "/login" }} />;
      }}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    role: state.auth.role,
    login: state.auth.login,
  };
};
export default connect(mapStateToProps)(ProtectedRoute);

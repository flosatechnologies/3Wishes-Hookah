import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, login, role, ...rest }) {
  // const role = JSON.parse(localStorage.getItem("role"));
  // const login = JSON.parse(localStorage.getItem("login"));
  // if (!auth.isLoaded) return null;
  if (login && role === "customer") {
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
export default connect(mapStateToProps)(PrivateRoute);

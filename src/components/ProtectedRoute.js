import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, auth, ...rest }) {
  if (!auth.isLoaded) return null;
  if (auth.uid) {
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
    auth: state.firebase.auth,
    status: state.users.login,
  };
};
export default connect(mapStateToProps)(ProtectedRoute);

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/UserScreenDashboard.css";
import "react-datepicker/dist/react-datepicker.css";
import { Component } from "react";
import UserComponentDashboard from "../components/UserComponentDashboard";
import { connect } from "react-redux";
import { MdKeyboardBackspace } from "react-icons/md";
import profileImg from "../assets/images/userImage.png";
import CreateAccountDashboard from "../components/CreateAccountDashboard.jsx";
import EditAccountComponent from "../components/EditAccountComponent";
import { Container, Row, Col } from "react-bootstrap";

class UsersScreenDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: {
        addUser: "inactivebtn",
        editUser: "inactivebtn",
        delUser: "inactivebtn",
        Id: "",
      },
      storeUsers: this.props.adminUsers,
    };
  }

  // componentDidMount() {
  //   this.props.getAllUsers();
  // }

  handleActivateEdit = (Id) => {
    this.setState({
      button: {
        addUser: "inactivebtn",
        editUser: "activebtn",
        delUser: "inactivebtn",
        Id: Id,
      },
    });
  };

  handleActivateDelete = (Id) => {
    this.setState({
      button: {
        addUser: "inactivebtn",
        editUser: "inactivebtn",
        delUser: "activebtn",
        Id: Id,
      },
    });
  };
  render() {
    const filtered = this.state.storeUsers.filter(
      (admin) => admin.role === "admin" && admin.firstName !== "Admin"
    );

    console.log("filteredAdmin: ", filtered);
    const handleRenderScreen = () => {
      if (this.state.button.addUser === "activebtn") {
        return (
          <div>
            <CreateAccountDashboard />
          </div>
        );
      }
      if (this.state.button.editUser === "activebtn") {
        return (
          <div>
            <EditAccountComponent
              userId={this.state.button.Id}
              theAdmins={this.props.users}
            />
          </div>
        );
      }
      if (this.state.button.addUser === "inactivebtn") {
        return (
          <Container className=" arrayOfUsers">
            <Row className="row">
              {filtered.map((users) => (
                <UserComponentDashboard
                  image={profileImg}
                  firstName={users.firstName}
                  otherNames={users.otherNames}
                  email={users.email}
                  phone={users.phoneNumber}
                  Id={users.Id}
                  Edit={(id) => this.handleActivateEdit(id)}
                  Delete={(id) => this.handleActivateDelete(id)}
                />
              ))}
            </Row>
          </Container>
        );
      }
    };
    return (
      <Container fluid={true}>
        <Row className="filterSection">
          <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2} className="">
            <button
              onClick={() => {
                this.setState({ button: { addUser: "activebtn" } });
              }}
              className="addUserButton"
              id={this.state.button.addUser}
            >
              Create Account
            </button>
          </Col>
          <Col
            xxl={10}
            xl={10}
            lg={10}
            md={10}
            sm={10}
            xs={10}
            className=" userScreenBackButtonContainer"
          >
            <button
              onClick={() => {
                this.setState({ button: { addUser: "inactivebtn" } });
              }}
              className="userScreenBackButton"
            >
              <MdKeyboardBackspace size="1.6em" />
            </button>
          </Col>
        </Row>

        <Row className="usersContainer">{handleRenderScreen()}</Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

const mapDispatchToProps = () => {
  return {
    // getAllUsers,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(UsersScreenDashboard);

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/UserScreenDashboard.css";
import AddProduct from "./AddProductScreen.js";
import "react-datepicker/dist/react-datepicker.css";
import { Component } from "react";
import UserComponentDashboard from "../components/UserComponentDashboard";
import { connect } from "react-redux";
import { MdKeyboardBackspace } from "react-icons/md";
import { getAllProducts } from "../Store/authActions.js";
import profileImg from "../assets/images/userImage.png";
import CreateAccountDashboard from "../components/CreateAccountDashboard.jsx";

class UsersScreenDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: {
        addUser: "inactivebtn",
      },
    };
  }

  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    const handleRenderScreen = () => {
      if (this.state.button.addUser === "activebtn") {
        return (
          <div>
            <CreateAccountDashboard />
          </div>
        );
      }

      if (this.state.button.addUser === "inactivebtn") {
        return (
          <div className="container arrayOfUsers">
            <div className="row">
              <UserComponentDashboard
                image={profileImg}
                fullName="Adams Bamfo"
                email="bamfoadamsf@gmail.com "
                phone="0547117125"
              />
              <UserComponentDashboard
                image={profileImg}
                fullName="Samuel Kupoe"
                email="developerkupoe@gmail.com "
                phone="0547117125"
              />
              <UserComponentDashboard
                image={profileImg}
                fullName="Francis Florent"
                email="florent@gmail.com "
                phone="0245958767"
              />
              <UserComponentDashboard
                image={profileImg}
                fullName="Kevin Hurt"
                email="k.hurt@gmail.com "
                phone="0245678987"
              />
              {/* {this.props.products.map((products) => {
                return (
                  <UserComponentDashboard
                    productName={products.product}
                    price={products.price}
                    image={products.image}
                  />
                );
              })} */}
            </div>
          </div>
        );
      }
    };
    return (
      <div className="container">
        <div className="row filterSection">
          <div className="col-lg-2">
            <button
              onClick={() => {
                this.setState({ button: { addUser: "activebtn" } });
              }}
              className="addUserButton"
              id={this.state.button.addUser}
            >
              Create Account
            </button>
          </div>
          <div className="col-lg-10 userScreenBackButtonContainer">
            <button
              onClick={() => {
                this.setState({ button: { addUser: "inactivebtn" } });
              }}
              className="userScreenBackButton"
            >
              <MdKeyboardBackspace size="1.6em" />
            </button>
          </div>
        </div>

        <div className="usersContainer">{handleRenderScreen()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    getAllProducts,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(UsersScreenDashboard);

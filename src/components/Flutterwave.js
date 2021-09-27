import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { connect } from "react-redux";
import { addTransaction } from "../Store/transactionAction";

function Flutterwave(props) {
  const info = props.data;
  const transaction = {
    Id: info.Id,
    transactionId: info.transactionId,
    orderId: info.orderId,
    products: info.products,
    customer: info.name,
    amount: info.amnt,
    location: info.location,
    contact: info.phoneNumber,
    time: info.time,
  };

  const config = {
    public_key: "FLWPUBK_TEST-c48c8f42b590ea034a97d9fa1dcc2400-X", //"FLWPUBK_TEST-cfce97daa36f7fe92ee4c4a0c80c497b-X",
    tx_ref: Date.now(),
    amount: info.amnt,
    currency: "GHS",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: info.email,
      phonenumber: info.phoneNumber,
      name: info.name,
    },
    customizations: {
      title: "3 Wishes",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log("response", response);
              // return RequeryTransaction({
              //   live: false,
              //   txref: response.tx.txRef,
              //   SECKEY: "",
              // });
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
          props.addTransaction(transaction.Id, transaction);
        }}
        style={{
          margin: "5px",
          padding: "5px",
          borderRadius: "5px",
          color: "white",
          backgroundColor: "green",
        }}
      >
        Proceed to Payment
      </button>
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {
    addTransaction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Flutterwave);

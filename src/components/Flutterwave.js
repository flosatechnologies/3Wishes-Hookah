import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import CartScreen from "../pages/CartScreen";

export default function Flutterwave() {
  const config = {
    public_key: "FLWPUBK_TEST-0386baedd5eff7cf6f8d0da09e59613e-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "GHS",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "joel ugwumadu",
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
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
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

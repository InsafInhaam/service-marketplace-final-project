import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PaymentModal = ({
  name,
  orderId,
  amount,
  currency,
  hash,
  email,
  phone,
  handleClose,
}) => {
  var payment = {
    sandbox: true,
    merchant_id: "1222723",
    return_url: "http://sample.com/return",
    cancel_url: "http://sample.com/cancel",
    notify_url: "http://sample.com/notify",
    order_id: orderId,
    items: name,
    amount: amount,
    currency: currency,
    hash: hash,
    first_name: "xyz",
    last_name: "xyz",
    email: email,
    phone: phone,
    address: "no",
    city: "no",
    country: "Sri Lanka",
    delivery_address: "No. 46, Galle road, Kalutara South",
    delivery_city: "Kalutara",
    delivery_country: "Sri Lanka",
    custom_1: "",
    custom_2: "",
  };

  const history = useNavigate();

  window.payhere.onCompleted = function onCompleted(orderId) {
    console.log("Payment completed. OrderID:" + orderId);
    toast.success("Points charged successfully.");
    history("/profile");
    handleClose();
  };

  window.payhere.onDismissed = function onDismissed() {
    console.log("Payment dismissed");
  };

  window.payhere.onError = function onError(error) {
    console.log("Error:" + error);
  };

  function pay() {
    if (amount < 30) {
      toast.error("Payment Amount should be more than 30");
    }
    fetch(process.env.REACT_APP_API_URL + "/api/wallet/charge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("refreshToken"),
      },
      body: JSON.stringify({
        amount,
      }),
    })
      .then((res) => {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return res.json();
        } else {
          console.error("Unexpected content type:", contentType);
          return res.text().then((text) => {
            throw new TypeError(`Expected JSON but received ${text}`);
          });
        }
      })
      .then((data) => {
        console.log(data);

        if (data.error) {
          console.log(data.error);
          toast.error(data.error);
        } else {
          console.log(data.message);
          window.payhere.startPayment(payment);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("An error occurred while processing your payment.");
      });
  }

  return (
    <button type="button" onClick={pay} className="btn btn-primary btn-block">
      Add Money
    </button>
  );
};

export default PaymentModal;

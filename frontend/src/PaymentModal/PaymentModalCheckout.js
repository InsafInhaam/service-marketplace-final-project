import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slice/cartSlice";
import { useDispatch } from "react-redux";

const PaymentModal = ({
  name,
  orderId,
  currency,
  hash,
  email,
  phone,
  handleClose,
  discountedPrice,
  userId,
  cartItems,
  subTotal,
  discountPercentage,
  totalPrice,
  serviceDate,
  serviceTime,
  latitude,
  longitude,
  streetName,
  houseNo,
  zipCode,
}) => {
  var payment = {
    sandbox: true,
    merchant_id: "1222723",
    return_url: "http://sample.com/return",
    cancel_url: "http://sample.com/cancel",
    notify_url: "http://sample.com/notify",
    order_id: orderId,
    items: name,
    amount: totalPrice,
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
  const dispatch = useDispatch();

  window.payhere.onCompleted = function onCompleted(orderId) {
    console.log("Payment completed. OrderID:" + orderId);
    dispatch(clearCart());
    toast.success("Payment done successfully.");
    history("/cart");
    handleClose();
  };

  window.payhere.onDismissed = function onDismissed() {
    console.log("Payment dismissed");
  };

  window.payhere.onError = function onError(error) {
    console.log("Error:" + error);
  };
  function pay() {
    if (!streetName || !houseNo || !zipCode || !serviceDate || !serviceTime) {
      toast.error("Please provide all required information");
      return;
    }
    if (totalPrice < 30) {
      toast.error("Payment Amount should be more than 30");
    }
    fetch(process.env.REACT_APP_API_URL + "/api/orders/add-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("refreshToken"),
      },
      body: JSON.stringify({
        userId,
        cartItems,
        subTotal,
        discountPercentage,
        totalPrice,
        serviceDate,
        serviceTime,
        latitude,
        longitude,
        streetName,
        houseNo,
        zipCode,
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
    // <button type="button" onClick={pay} className="btn btn-primary btn-block">
    //   Add Money
    // </button>
    <button
      type="button"
      className="btn btn-info btn-block btn-lg"
      data-toggle="modal"
      data-target="#checkoutorder"
      onClick={pay}
    >
      <div className="d-flex justify-content-between">
        <span>LKR {discountedPrice}</span>
        <span>
          Checkout
          <i className="fas fa-long-arrow-alt-right ms-2 ml-2" />
        </span>
      </div>
    </button>
  );
};

export default PaymentModal;

import React, { useState } from "react";
import toast from "react-hot-toast";

const CheckoutOrder = ({
  contactDetails,
  cartItems,
  subTotal,
  discountPercentage,
  totalPrice,
  onClose,
}) => {
  const [serviceDate, setServiceDate] = useState("");
  const [serviceTime, setServiceTime] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("debitcard");
  const [rechargeAmount, setRechargeAmount] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handlePointsPayment = async () => {
    try {
      // Check if user has sufficient wallet points
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/wallet/balance`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        const walletBalance = data.balance;

        if (walletBalance >= totalPrice) {
          // User has sufficient wallet points, deduct points and complete the order
          await deductWalletPoints(totalPrice);

          toast.success("Order placed successfully using wallet points");
          onClose();
        } else {
          toast.error("Insufficient wallet points");
        }
      } else {
        // Error handling for fetching wallet balance
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error processing points payment:", error);
      toast.error("An error occurred while processing points payment.");
    }
  };

  const deductWalletPoints = async (amount) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/api/wallet/use`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          amount,
        }),
      });
    } catch (error) {
      console.error("Error deducting wallet points:", error);
      toast.error("An error occurred while deducting wallet points.");
    }
  };

  const handleSaveOrder = async () => {
    if (!serviceDate || !serviceTime) {
      toast.error("Please provide a service date and time");
      return;
    }

    // Assuming cartItems is an array of items with an itemId property
    const formattedCartItems = cartItems.map((item) => ({
      itemId: item._id, // or item.itemId, depending on your data structure
      quantity: item.cartQuantity,
    }));

    try {
      const orderDetails = {
        userId: contactDetails._id,
        cartItems: formattedCartItems,
        subTotal,
        discountPercentage,
        totalPrice,
        serviceDate,
        serviceTime,
        latitude: contactDetails.latitude,
        longitude: contactDetails.longitude,
      };

      console.log(orderDetails);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/orders/add-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
          body: JSON.stringify(orderDetails),
        }
      );

      const data = await response.json();

      if (response.status === 201) {
        // Success handling
        // closeModal();
        toast.success(data.message);
      } else {
        // Error handling
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error saving order:", error);
      toast.error("An error occurred while saving the order.");
    }
  };

  return (
    <div className="modal fade">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Complete Order
            </h5>
            <button type="button" className="close btn btn-danger btn-sm" onClick={onClose}>
              X
            </button>
          </div>
          <div className="modal-body">
            {/* <h6>Contact Details</h6>
            <p>Name: {contactDetails?.name}</p>
            <p>Email: {contactDetails?.email}</p>
            <p>Phone: {contactDetails?.phone}</p>
            <p>City: {contactDetails?.city}</p>
            <p>Address: {contactDetails?.address}</p>

            <hr />

             <h6>Cart Items</h6>
            <ul className="ml-3">
              {cartItems.map((cartItem) => (
                <li key={cartItem?.id}>
                  {cartItem?.name} - Quantity: {cartItem?.cartQuantity}
                </li>
              ))}
            </ul>
            <hr />

            <h6>Order Summary</h6>
            <p>Sub-Total: LKR {subTotal.toFixed(2)}</p>
            {discountPercentage > 0 && <p>Discount: -{discountPercentage}%</p>}
            <p>Total Price: LKR {totalPrice.toFixed(2)}</p>

            <hr /> 

            <div className="form-group mt-3">
              <label htmlFor="serviceDate">Service Date:</label>
              <input
                type="date"
                id="serviceDate"
                className="form-control"
                value={serviceDate}
                onChange={(e) => setServiceDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="serviceTime">Service Time:</label>
              <input
                type="time"
                id="serviceTime"
                className="form-control"
                value={serviceTime}
                onChange={(e) => setServiceTime(e.target.value)}
              />
            </div>
            <hr /> 
            <h6>Payment Method</h6>
            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input
                  id="debitcard"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  checked={selectedPaymentMethod === "debitcard"}
                  onChange={() => setSelectedPaymentMethod("debitcard")}
                  required
                />
                <label className="custom-control-label" htmlFor="debitcard">
                  Debitcard
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="points"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  checked={selectedPaymentMethod === "points"}
                  onChange={() => setSelectedPaymentMethod("points")}
                  required
                />
                <label className="custom-control-label" htmlFor="points">
                  Wallet points
                </label>
              </div>
            </div>*/}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleSaveOrder()}
            >
              Checkout Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOrder;

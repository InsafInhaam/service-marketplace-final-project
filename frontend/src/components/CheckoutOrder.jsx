import React, { useState } from "react";
import toast from "react-hot-toast";

const CheckoutOrder = ({
  contactDetails,
  cartItems,
  subTotal,
  discountPercentage,
  totalPrice,
}) => {
  const [serviceDate, setServiceDate] = useState("");
  const [serviceTime, setServiceTime] = useState("");

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
    <div
      className="modal fade"
      id="checkoutorder"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Complete Order
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <h6>Contact Details</h6>
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
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={() => handleSaveOrder()}>
              Checkout Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOrder;

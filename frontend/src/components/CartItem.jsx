import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  removeFromCart,
} from "../redux/slice/cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getTotals());
  // }, [cart, dispatch]);

  const handleAddToCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div
          className="d-flex justify-content-between align-items-center"
          // style={{ width: "575px" }}
        >
          <div className="d-flex flex-row align-items-center">
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                className="img-fluid rounded-3"
                alt="Shopping item"
                style={{ width: "65px" }}
              />
            </div>
            <div className="ms-3 ml-2">
              <h5>{cartItem?.name}</h5>
              <p className="small mb-0">
                {cartItem?.description.length > 100
                  ? `${cartItem?.description.slice(0, 100)}...`
                  : cartItem?.description}
              </p>
            </div>
          </div>
          <div style={{ width: "80px" }}>
            <h5 className="mb-0">LKR {cartItem?.price * cartItem?.cartQuantity}</h5>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <div
              style={{ width: "50px" }}
              className="cart-cartItem-quantity d-flex align-items-center justify-content-between"
            >
              <button
                onClick={() => handleDecreaseCart(cartItem)}
                className="btn btn-danger"
              >
                -
              </button>
              <div className="count px-2">{cartItem?.cartQuantity}</div>
              <button
                onClick={() => handleAddToCart(cartItem)}
                className="btn btn-primary"
              >
                +
              </button>
            </div>

            <a
              href="#"
              style={{ color: "#cecece", marginLeft: "100px" }}
              onClick={() => handleRemoveFromCart(cartItem)}
            >
              <i className="fas fa-trash-alt" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

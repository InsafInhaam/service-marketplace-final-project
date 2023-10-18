import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { getTotals } from "../redux/slice/cartSlice";
import CheckoutOrder from "../components/CheckoutOrder";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user_id = useSelector((state) => state.user.user._id);
  const [promoCode, setPromoCode] = useState("");
  const [promoMessage, setPromoMessage] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/api/user/user/" + user_id)
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
      });
  }, [user]);

  console.log(user);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const totalPrice = cart.cartTotalAmount;

  const discountedPrice = totalPrice * (1 - discountPercentage / 100);

  const handleApplyPromo = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/promo/validate-promo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
          body: JSON.stringify({ promoCode }),
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        const { promo } = data;
        setDiscountPercentage(parseFloat(promo.discountPercentage));
        setPromoMessage("Success, promo code applied!");
      } else {
        setDiscountPercentage(0);
        setPromoMessage(data.message);
      }
    } catch (error) {
      console.error("Error applying promo code:", error);
      setDiscountPercentage(0);
      setPromoMessage("An error occurred while applying the promo code.");
    }
  };

  const openCheckout = () => {
    setShowCheckout(true);
  };

  return (
    <div className="page-wraper">
      <Navbar />
      <div className="page-content">
        {/* Banner Area */}
        <div className="aon-page-benner-area2">
          <div className="aon-banner-large2-title">Checkout</div>
        </div>
        <div className="aon-page-jobs-wrap">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card">
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-lg-7">
                        <h5 className="mb-3">
                          <a href="/all-categories" className="text-body">
                            <i className="fas fa-long-arrow-alt-left me-2 mr-2" />
                            Continue shopping
                          </a>
                        </h5>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div>
                            <p className="mb-1">Shopping cart</p>
                            <p className="mb-0">
                              You have {cart.cartItems && cart.cartItems.length}{" "}
                              items in your cart
                            </p>
                          </div>
                        </div>
                        {cart.cartItems &&
                          cart.cartItems.map((cartItem) => {
                            return (
                              <CartItem
                                key={cartItem?.id}
                                cartItem={cartItem}
                              />
                            );
                          })}
                      </div>
                      <div className="col-lg-5">
                        <>
                          <div className="card">
                            <div className="card-body">
                              <p>
                                If you have <strong> promo-code</strong>? use it
                              </p>
                              <div className="">
                                <strong>Promo Code</strong>
                                <form onSubmit={handleApplyPromo}>
                                  <div className="form-group mt-2">
                                    {/* <label htmlFor="promoCode">
                                      Enter Promo Code:
                                    </label> */}
                                    <input
                                      type="text"
                                      placeholder="Use Valid Promo code here"
                                      id="promoCode"
                                      className="form-control"
                                      value={promoCode}
                                      onChange={(e) =>
                                        setPromoCode(e.target.value)
                                      }
                                    />
                                  </div>
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                  >
                                    Apply
                                  </button>
                                </form>
                                {promoMessage && (
                                  <p className="text-secondary py-2">
                                    {promoMessage}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </>
                        <div className="card bg-primary text-white rounded-3">
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <p className="mb-2">Subtotal</p>
                              <p className="mb-2">LKR {cart.cartTotalAmount}</p>
                            </div>
                            {discountPercentage > 0 && (
                              <div className="d-flex justify-content-between">
                                <p className="mb-2">Discount</p>
                                <p className="mb-2">
                                  -&nbsp; {discountPercentage}% &nbsp;
                                </p>
                              </div>
                            )}
                            <div className="d-flex justify-content-between mb-4">
                              <p className="mb-2">Total(Incl. taxes)</p>
                              <p className="mb-2">
                                LKR {discountedPrice.toFixed(2)}
                              </p>
                            </div>
                            <button
                              type="button"
                              className="btn btn-info btn-block btn-lg"
                            >
                              <div
                                className="d-flex justify-content-between"
                                data-toggle="modal"
                                data-target="#checkoutorder"
                                onClick={() => setShowCheckout(true)}
                              >
                                <span>LKR {discountedPrice.toFixed(2)}</span>
                                <span>
                                  Checkout
                                  <i className="fas fa-long-arrow-alt-right ms-2 ml-2" />
                                </span>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showCheckout && (
        <CheckoutOrder
          contactDetails={user}
          cartItems={cart.cartItems}
          subTotal={cart.cartTotalAmount}
          discountPercentage={discountPercentage}
          totalPrice={discountedPrice}
          onClose={() => setShowCheckout(false)}
        />
      )}
      <Footer />
    </div>
  );
};

export default Cart;

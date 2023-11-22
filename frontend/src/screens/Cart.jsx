import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { clearCart, getTotals } from "../redux/slice/cartSlice";
import ChangeLocation from "../components/ChangeLocation";
import axios from "axios";
import toast from "react-hot-toast";
import PaymentModal from "../PaymentModal/PaymentModalCheckout";
import md5 from "crypto-js/md5";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.user);
  const [promoCode, setPromoCode] = useState("");
  const [promoMessage, setPromoMessage] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const [serviceDate, setServiceDate] = useState("");
  const [serviceTime, setServiceTime] = useState("");

  const [streetName, setStreetName] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [balance, setBalance] = useState(0);
  const [walletPointsChecked, setWalletPointsChecked] = useState(false);

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

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const accessToken = localStorage.getItem("refreshToken");
        const headers = {
          Authorization: `Bearer ${accessToken}`,
        };

        const response = await axios.get(
          process.env.REACT_APP_API_URL + "/api/wallet/balance",
          { headers }
        );
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, []);

  const handlePaymentMethodChange = (method) => {
    if (method === "points" && balance < discountedPrice) {
      setWalletPointsChecked(false);
      toast.error("Insufficient wallet points");
    } else {
      setWalletPointsChecked(method === "points");
    }
  };

  const handleCheckout = async () => {
    if (!streetName || !houseNo || !zipCode || !serviceDate || !serviceTime) {
      toast.error("Please provide all required information");
      return;
    }

    if (walletPointsChecked) {
      try {
        // Deduct wallet points
        const responseWallet = await fetch(
          `${process.env.REACT_APP_API_URL}/api/wallet/use`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("refreshToken"),
            },
            body: JSON.stringify({
              amount: discountedPrice,
            }),
          }
        );

        const dataWallet = await responseWallet.json();

        if (!responseWallet.ok) {
          toast.error(dataWallet.message);
          return;
        }
      } catch (error) {
        console.error("Error deducting wallet points:", error);
        toast.error("An error occurred while deducting wallet points.");
        return;
      }
      try {
        // Add the order
        const responseOrder = await fetch(
          `${process.env.REACT_APP_API_URL}/api/orders/add-order`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("refreshToken"),
            },
            body: JSON.stringify({
              userId: user._id,
              cartItems: cart.cartItems.map((item) => ({
                itemId: item._id,
                quantity: item.cartQuantity,
              })),
              subTotal: cart.cartTotalAmount,
              discountPercentage,
              totalPrice: discountedPrice,
              serviceDate,
              serviceTime,
              latitude: user.latitude,
              longitude: user.longitude,
              streetName,
              houseNo,
              zipCode,
            }),
          }
        );

        const dataOrder = await responseOrder.json();

        if (responseOrder.ok) {
          toast.success(dataOrder.message);
          dispatch(clearCart());
        } else {
          toast.error(dataOrder.message);
        }
      } catch (error) {
        console.error("Error adding order:", error);
        toast.error("An error occurred while adding the order.");
      }
    }
  };

  const merchantSecret =
    "NDIyMjA5MjQ3ODM3MDU5MzU3NDIyMzM5MTY5OTk2MTU4NTY4NDU1Ng==";
  const orderId =
    Date.now().toString() + Math.random().toString(36).substr(2, 9);
  const currency = "LKR";
  const merchantId = "1222723";
  const hashedSecret = md5(merchantSecret).toString().toUpperCase();
  let amountFormated = parseFloat(totalPrice)
    .toLocaleString("en-us", { minimumFractionDigits: 2 })
    .replaceAll(",", "");
  const hash = md5(
    merchantId + orderId + amountFormated + currency + hashedSecret
  )
    .toString()
    .toUpperCase();

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
                                    className="btn btn-primary mt-2"
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
                              <hr />
                              <div className="form-group mt-3">
                                <label htmlFor="serviceDate">
                                  Service Date:
                                </label>
                                <input
                                  type="date"
                                  id="serviceDate"
                                  className="form-control"
                                  value={serviceDate}
                                  onChange={(e) =>
                                    setServiceDate(e.target.value)
                                  }
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="serviceTime">
                                  Service Time:
                                </label>
                                <input
                                  type="time"
                                  id="serviceTime"
                                  className="form-control"
                                  value={serviceTime}
                                  onChange={(e) =>
                                    setServiceTime(e.target.value)
                                  }
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
                                    checked={!walletPointsChecked}
                                    onChange={() =>
                                      handlePaymentMethodChange("debitcard")
                                    }
                                    required
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="debitcard"
                                  >
                                    Debit Card
                                  </label>
                                </div>
                                <div className="custom-control custom-radio">
                                  <input
                                    id="points"
                                    name="paymentMethod"
                                    type="radio"
                                    className="custom-control-input"
                                    checked={walletPointsChecked}
                                    onChange={() =>
                                      handlePaymentMethodChange("points")
                                    }
                                    required
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="points"
                                  >
                                    Wallet Points
                                  </label>
                                </div>
                              </div>

                              <hr />

                              <ChangeLocation />
                              <div>
                                <label htmlFor="streetName">Street Name:</label>
                                <input
                                  type="text"
                                  id="streetName"
                                  className="form-control"
                                  value={streetName}
                                  onChange={(e) =>
                                    setStreetName(e.target.value)
                                  }
                                />
                              </div>
                              <div className="row">
                                <div className="col-md-6 mb-3">
                                  <label for="house-no">House No</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="house-no"
                                    placeholder="House No"
                                    value={houseNo}
                                    onChange={(e) => setHouseNo(e.target.value)}
                                    required=""
                                  />
                                </div>
                                <div className="col-md-6 mb-3">
                                  <label for="zip-code">Zip Code</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="zip-code"
                                    placeholder="Zip Code"
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                    required=""
                                  />
                                </div>
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
                            {walletPointsChecked ? (
                              <button
                                type="button"
                                className="btn btn-info btn-block btn-lg"
                                onClick={handleCheckout}
                              >
                                <div className="d-flex justify-content-between">
                                  <span>LKR {discountedPrice.toFixed(2)}</span>
                                  <span>Checkout with Wallet Points</span>
                                </div>
                              </button>
                            ) : (
                              <PaymentModal
                                discountedPrice={discountedPrice.toFixed(2)}
                                userId={user._id}
                                subTotal={cart.cartTotalAmount}
                                cartItems={cart.cartItems.map((item) => ({
                                  itemId: item._id,
                                  quantity: item.cartQuantity,
                                }))}
                                discountPercentage={discountPercentage}
                                totalPrice={discountedPrice}
                                serviceDate={serviceDate}
                                serviceTime={serviceTime}
                                latitude={user.latitude}
                                longitude={user.longitude}
                                streetName={streetName}
                                houseNo={houseNo}
                                zipCode={zipCode}
                                orderId={orderId}
                                currency={currency}
                                hash={hash}
                              />
                            )}
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
      <Footer />
    </div>
  );
};

export default Cart;

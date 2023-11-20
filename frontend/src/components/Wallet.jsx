import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import md5 from "crypto-js/md5";
import PaymentModal from "../PaymentModal/PaymentModal";
import { useSelector } from "react-redux";

const Wallet = () => {
  const user = useSelector((state) => state.user.user);

  const [balance, setBalance] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [rechargeAmount, setRechargeAmount] = useState(0);
  // const [amount, setAmount] = useState("");

  const handleClose = () => setShowModal(false);

  const accessToken = localStorage.getItem("refreshToken");

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const fetchBalance = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/api/wallet/balance",
        { headers }
      );
      setBalance(response.data.balance);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  useEffect(() => {
    fetchBalance(); // Fetch the balance when the component mounts
  }, [balance]);

  // const handleAddMoney = async () => {
  //   try {
  //     await axios.post(
  //       process.env.REACT_APP_API_URL + "/api/wallet/charge",
  //       {
  //         amount: rechargeAmount,
  //       },
  //       { headers }
  //     );
  //     toast.success("Amount Recharge successfully!");
  //     fetchBalance(); // Fetch the updated balance after adding money
  //     handleClose();
  //     setRechargeAmount(null)
  //   } catch (error) {
  //     console.error("Error adding money:", error);
  //   }
  // };

  const merchantSecret =
    "NDIyMjA5MjQ3ODM3MDU5MzU3NDIyMzM5MTY5OTk2MTU4NTY4NDU1Ng==";
  const orderId =
    Date.now().toString() + Math.random().toString(36).substr(2, 9);
  const currency = "LKR";
  const merchantId = "1222723";
  const hashedSecret = md5(merchantSecret).toString().toUpperCase();
  let amountFormated = parseFloat(rechargeAmount)
    .toLocaleString("en-us", { minimumFractionDigits: 2 })
    .replaceAll(",", "");
  const hash = md5(
    merchantId + orderId + amountFormated + currency + hashedSecret
  )
    .toString()
    .toUpperCase();


    
  return (
    <>
      <div className="wallet mb-5">
        <div className="card">
          <div className="card-header">Wallet Balance</div>
          <div className="card-body">
            <h5 className="card-title">Current Balance: ${balance}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              varius lectus nec metus rhoncus, id aliquet ex consectetur.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              Add Money
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal fade">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Money
                </h5>
                <button
                  type="button"
                  className="close btn btn-danger btn-sm"
                  onClick={() => setShowModal(false)}
                >
              X
                </button>
              </div>
              <div className="modal-body">
                <form action="#" method="post">
                  <div className="form-group first">
                    <label htmlFor="rechargeAmount">Amount to Recharge</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter amount"
                      id="rechargeAmount"
                      value={rechargeAmount}
                      onChange={(e) => setRechargeAmount(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                {/* <button
                  type="button"
                  className="btn btn-warning"
                  onClick={handleAddMoney}
                >
                  Recharge
                </button> */}
                <PaymentModal
                  name={user.name}
                  orderId={orderId}
                  amount={rechargeAmount}
                  currency={currency}
                  hash={hash}
                  email={user.email}
                  phone={user.phone}
                  handleClose={handleClose}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Wallet;

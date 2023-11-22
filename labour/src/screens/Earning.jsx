import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

const Earning = () => {
  const labourId = useSelector((state) => state.user.user._id);

  const [walletBalance, setWalletBalance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    const fetchWalletBalance = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/labour/${labourId}/wallet`
        );
        setWalletBalance(response.data.wallet);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching wallet balance:", error);
        setLoading(false);
      }
    };

    fetchWalletBalance();
  }, [labourId]);

  useEffect(() => {
    fetch(
      process.env.REACT_APP_API_URL +
        "/api/transaction-history/labour/" +
        labourId
    )
      .then((res) => res.json())
      .then((result) => {
        setTransactionHistory(result);
      });
  }, [transactionHistory]);

  return (
    <div>
      <header>
        {/* Sidebar */}
        <Sidebar />
        {/* Navbar */}
        <Navbar />
      </header>
      <main className="main-content">
        <div className="container pt-4">
          <div className="mb-5">
            <div className="card w-50">
              <div className="card-body">
                <h5 className="card-title">Your Earnings</h5>
                <br />
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <p className="card-text">
                    Wallet Balance: <strong>LKR {walletBalance}</strong>
                  </p>
                )}
                <small className="text-danger">
                  Minimum amount to be for withdrawal <strong> LKR 5000</strong>
                </small>
              </div>
            </div>
            <br /><br />
            <div className="card">
              <div className="card-header">Reviews</div>
              <div className="card-body">
                <table className="table align-middle mb-0 bg-white">
                  <thead className="bg-light">
                    <tr>
                      <th>Order Id</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactionHistory?.map((transactionHistoryItem) => (
                      <tr key={transactionHistoryItem._id}>
                        <td>
                          <p className="fw-normal mb-1">{transactionHistoryItem.order}</p>
                        </td>
                        <td>
                          <p className="text-muted mb-0">
                            {transactionHistoryItem.amount}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Earning;

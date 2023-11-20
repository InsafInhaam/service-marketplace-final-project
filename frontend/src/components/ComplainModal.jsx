import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ComplainModal = ({ userId, orderId, onClose , laborerId}) => {
  const [reason, setReason] = useState("");

  const handleComplain = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/complain/complainOrder/${userId}/${orderId}`,
        { reason , laborerId }
      );

      const updatedOrder = response.data;

      console.log("Order complained:", updatedOrder);
      toast.success("Order complained successfully");
      onClose();
    } catch (error) {
      console.error("Error complaining about order:", error);
      toast.error("Error complaining about order");
    }
  };

  return (
    <div className="modal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Complain About Order
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="reason">Reason:</label>
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleComplain}
            >
              Submit Complain
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplainModal;

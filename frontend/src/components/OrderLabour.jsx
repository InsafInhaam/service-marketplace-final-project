import React from "react";

const OrderLabour = ({ onClose, selectedOrder }) => {
  console.log(selectedOrder);
  return (
    <div className="modal">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Order Details
            </h5>
            <button
              type="button"
              className="close btn btn-danger btn-sm"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div className="modal-body">
            <div className="card-body">
              <div className="d-flex text-black">
                <div className="flex-shrink-0">
                  <img
                    src={selectedOrder.labourer.image}
                    alt="Generic placeholder image"
                    className={
                      selectedOrder.labourer.firstname +
                      " " +
                      selectedOrder.labourer.lastname
                    }
                    style={{ width: "180px", borderRadius: "10px" }}
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5 className="mb-1">
                    {selectedOrder.labourer.firstname +
                      " " +
                      selectedOrder.labourer.lastname}
                  </h5>
                  <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                    {selectedOrder.labourer.serviceProvided}
                  </p>
                  <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                    Phone: {selectedOrder.labourer.phone}
                  </p>
                  <div
                    className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{ backgroundColor: "#efefef" }}
                  >
                    <div>
                      <p className="small text-muted mb-1">Pricing (H)</p>
                      <p className="mb-0">
                        {selectedOrder.labourer.hourlyPrice}
                      </p>
                    </div>
                    <div className="px-3">
                      <p className="small text-muted mb-1">Completed</p>
                      <p className="mb-0">
                        {selectedOrder.labourer.serviceProvided}
                      </p>
                    </div>
                    <div>
                      <p className="small text-muted mb-1">Rating</p>
                      <p className="mb-0">
                        {selectedOrder.labourer.serviceProvided}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex pt-1">
                    <button
                      type="button"
                      className="btn btn-outline-primary me-1 flex-grow-1"
                    >
                      Chat
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary flex-grow-1"
                    >
                      Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderLabour;

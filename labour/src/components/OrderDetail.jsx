import React from "react";

const OrderDetail = ({ onClose, selectedOrder }) => {
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
              className="close btn-custom btn-sm text-danger"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
             <i className='bx bx-window-close' ></i>
            </button>
          </div>
          <div className="modal-body">
            <div>
             
              <p>
                <strong>Customer Name: </strong>
                {selectedOrder.userId.name}
              </p>
              <p>
                <strong>Customer Phone: </strong>
                {selectedOrder.userId.phone}
              </p>
              <p>
                <strong>Customer Address: </strong>
                {selectedOrder.userId.address}
              </p>
              <p>
                <strong>Total Price: </strong> LKR{selectedOrder.totalPrice}
              </p>
            </div>
            <br />
            <div>
              <h4><b>Items: </b></h4>
              <ul className="px-0">
                {selectedOrder?.cartItems.map((item) => (
                  <li
                    key={item?.itemId}
                    className="d-flex align-itens-center justify-content-between"
                  >
                    <div className="d-flex align-items-center w-50">
                      <img
                        src={item?.itemId?.image}
                        alt={item?.itemId?.name}
                        style={{ width: "45px", height: "45px" , objectFit: 'cover' }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{item?.itemId?.name}</p>
                        <p className="text-muted mb-0">{item?.itemId?.description}</p>
                      </div>
                    </div>
                    {/* <div>{item?.itemId?.name}</div> */}
                    <div>
                      - <strong> Qty: </strong>
                      {item?.quantity}
                    </div>
                    <div>
                       <strong> LKR </strong>
                      {item?.itemId?.price}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;

import React from "react";

const OrderStatusIndicate = ({ order }) => {
  const orderSteps = [
    { status: "order_placed", label: "Order placed" },
    { status: "assigned_to_labourer", label: "Assigned to Labour" },
    { status: "in_progress", label: "In progress" },
    // { status: "completed", label: "Completed" },
    // { status: "canceled", label: "Canceled" },
  ];

  return (
    <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
      {order.status == "completed" ? (
        <>
          <span className="dot green-color" />
          <hr className="flex-fill track-line green-color" />
          <span className="dot green-color" />
          <hr className="flex-fill track-line green-color" />
          <span className="dot green-color" />
          <hr className="flex-fill track-line green-color" />
        </>
      ) : (
        orderSteps.map((step, index) => (
          <React.Fragment key={step.status}>
            <span
              className={`${
                index < orderSteps.findIndex((s) => s.status === order.status)
                  ? "dot green-color"
                  : "dot"
              }`}
            />
            {index < orderSteps.findIndex((s) => s.status === order.status) ? (
              <hr className="flex-fill track-line green-color" />
            ) : (
              <hr className="flex-fill track-line" />
            )}
          </React.Fragment>
        ))
      )}
      <span
        className={`${
          order.status == "completed"
            ? "d-flex justify-content-center align-items-center big-dot dot green-color"
            : "d-flex justify-content-center align-items-center big-dot dot"
        }`}
      >
        <i className="fa fa-check text-white" />
      </span>
    </div>
  );
};

export default OrderStatusIndicate;

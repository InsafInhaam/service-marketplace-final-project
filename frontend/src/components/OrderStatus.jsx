import React from "react";

const OrderStatus = ({ order }) => {
  const orderSteps = [
    { status: "order_placed", label: "Order placed" },
    { status: "assigned_to_labourer", label: "Assigned to Labour" },
    { status: "in_progress", label: "In progress" },
    { status: "completed", label: "Completed" },
    { status: "canceled", label: "Canceled" },
  ];

  const getCurrentStepIndex = () => {
    return orderSteps.findIndex((step) => step.status === order.status);
  };

  return (
    <div className="d-flex flex-row justify-content-between align-items-center">
      {orderSteps
        .filter((step, index) => index <= getCurrentStepIndex())
        .map((step) => (
          <div key={step.status} className="d-flex flex-column align-items-start w-25">
            <span>{step.label}</span>
          </div>
        ))}
    </div>
  );
};

export default OrderStatus;

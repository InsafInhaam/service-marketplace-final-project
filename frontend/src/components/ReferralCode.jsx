import React from "react";
import toast from "react-hot-toast";

const ReferralCode = () => {
  const copyToClipboard = (text) => {
    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);

    // Select the text in the input element
    tempInput.select();
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Show a toast message
    toast.success("Coupon code copied to clipboard!");
  };

  return (
    <div className="row justify-content-center d-flex">
      <div className="col-md-12">
        <div className="card mb-5">
          <div className="card-header text-center fw-bold h3">15% OFF</div>
          <div className="card-body">
            <h4 className="card-title text-center">Get coupon now</h4>
            {/* Text */}
            <p className="card-text mt-2">
              1. The amount of discounts is limited.
            </p>
            {/* Text */}
            <p className="card-text mt-2">
              2. You can use the coupon code yourself or share it with a friend
              developer.
            </p>
            <div className="text-center">
              {/*Copy coupon wrapper*/}
              <div className="d-inline-flex inline mt-2 flex-wrap justify-content-center">
                {/*Coupon code*/}
                <code className="h2 border rounded py-1 px-5 flex-item me-2 w-100 text-center text-danger">
                  T6UR9RVQ
                </code>
                <br />
                {/*Copy to clipboard*/}
                <button
                  id="Copy"
                  type="button"
                  className="btn btn-primary mt-2 text-center"
                  style={{}}
                  onClick={() => copyToClipboard('T6UR9RVQ')}
                >
                  COPY TO CLIPBOARD <i className="far fa-copy ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralCode;

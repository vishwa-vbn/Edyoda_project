

import React from "react";
import "./SubscriptionFeeContainer.css";

const SubscriptionFeeContainer = ({
  subscriptionDuration,
  subscriptionPrice,
  subscriptionDurationPrice,
}) => {
  return (
    <div className="summary-container">
      <div className="alert-header">
        <div className="left-text">Subscription Fee</div>
        <div className="text23">₹18,500</div>
      </div>
      <div className="alert">
        <div className="alert-header alt">
          <div className="text24">Limited time offer</div>
          <div className="text25">-₹18,401</div>
        </div>
        <div className="alert-body">
          <img className="icon-clock" alt="" src="/icon-clock.svg" />
          <div className="left-text">{`Offer valid till 25th March 2023 `}</div>
        </div>
      </div>
      <div className="alert-header alt2">
        <div className="left-text">
          <span className="total">{`Total `}</span>
          <span>(Incl. of 18% GST)</span>
        </div>
        <b className="right-text">{subscriptionPrice}</b>
      </div>
    </div>
  );
};

export default SubscriptionFeeContainer;

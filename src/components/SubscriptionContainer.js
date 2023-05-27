

import React from "react";
import "./SubscriptionContainer.css";

const SubscriptionContainer = ({
  subscriptionDuration,
  subscriptionPrice,
  subscriptionDurationPrice,
  selectedOption,
  handleRadioChange,
}) => {
  return (
    <div className="text-field-3">
      <input
        type="radio"
        className="radio-button-icon1"
        alt=""
        src="/radio-button.svg"
        name="subscription"
        checked={selectedOption === 3}
        onChange={() => handleRadioChange(3)}
      />
      <div className="text-container5">
        <div className="text7">{subscriptionDuration}</div>
        <div className="left-text-container">
          <div className="top-text">
            <div className="text8">Total</div>
            <div className="text9">{subscriptionPrice}</div>
          </div>
          <div className="bottom-text">
            <div className="text10">{subscriptionDurationPrice}</div>
            <div className="text11">/mo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionContainer;

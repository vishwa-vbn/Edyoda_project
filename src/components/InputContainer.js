
import React, { useState } from "react";
import { Button } from "@mui/material";
import SubscriptionContainer from "./SubscriptionContainer";
import "./InputContainer.css";
import "./SubscriptionContainer.css";

const InputContainer = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="input-container">
      <div className="text-field-1">
        <input
          type="radio"
          className="radio-button-icon2"
          alt=""
          src="/radio-button.svg"
          checked={selectedOption === 1}
          onChange={() => handleRadioChange(1)}
        />
        <div className="text-container6">
          <div className="text12">{`12 Months Subscription `}</div>
          <div className="right-text-container">
            <div className="top-text1">
              <div className="text13">Total</div>
              <div className="text14">₹99</div>
            </div>
            <div className="bottom-tet">
              <div className="text15">₹8</div>
              <div className="text16">/mo</div>
            </div>
          </div>
        </div>
        <Button
          className="tag"
          sx={{ width: 121 }}
          variant="contained"
          color="warning"
          size="small"
        >
          Offer expired
        </Button>
      </div>

      <div className="text-field-2">
        <input
          type="radio"
          className="radio-button-icon1"
          alt=""
          src="/radio-button1.svg"
          checked={selectedOption === 2}
          onChange={() => handleRadioChange(2)}
        />
        <div className="text-container6">
          <div className="text12">{`12 Months Subscription `}</div>
          <div className="right-text-container1">
            <div className="top-text1">
              <div className="text18">Total</div>
              <div className="text14">₹179</div>
            </div>
            <div className="bottom-tet">
              <div className="text15">₹15</div>
              <div className="text21">/mo</div>
            </div>
          </div>
        </div>
        <Button
          className="tag"
          sx={{ width: 121 }}
          variant="contained"
          color="success"
          size="small"
        >
          Recommended
        </Button>
      </div>

      <SubscriptionContainer
        subscriptionDuration="6 Months Subscription "
        subscriptionPrice="₹149"
        subscriptionDurationPrice="₹25"
        selectedOption={selectedOption}
        handleRadioChange={handleRadioChange}
      />

      <SubscriptionContainer
        subscriptionDuration="3 Months Subscription "
        subscriptionPrice="₹99"
        subscriptionDurationPrice="₹33"
        selectedOption={selectedOption}
        handleRadioChange={handleRadioChange}
      />
    </div>
  );
};

export default InputContainer;

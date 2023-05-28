


import React, { useState } from "react";
import { Button } from "@mui/material";
import SubscriptionFeeContainer from "./SubscriptionFeeContainer";
import "./InputContainer.css";

const InputContainer = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  const [selectedSubscription, setSelectedSubscription] = useState({
    subscriptionDuration: "12 Months Subscription",
    subscriptionPrice: "₹99",
    subscriptionDurationPrice: "₹8",
  });

  const handleRadioChange = (option) => {
    setSelectedOption(option);

    switch (option) {
      case 1:
        setSelectedSubscription({
          subscriptionDuration: "12 Months Subscription",
          subscriptionPrice: "₹99",
          subscriptionDurationPrice: "₹8",
        });
        break;
      case 2:
        setSelectedSubscription({
          subscriptionDuration: "12 Months Subscription",
          subscriptionPrice: "₹179",
          subscriptionDurationPrice: "₹15",
        });
        break;
      case 3:
        setSelectedSubscription({
          subscriptionDuration: "6 Months Subscription",
          subscriptionPrice: "₹149",
          subscriptionDurationPrice: "₹25",
        });
        break;
      case 4:
        setSelectedSubscription({
          subscriptionDuration: "3 Months Subscription",
          subscriptionPrice: "₹99",
          subscriptionDurationPrice: "₹33",
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="input-container">
      <div className="text-field-1">
        <input
          type="radio"
          className="radio-button-icon2 "
          alt=""
          src="/radio-button.svg"
          checked={selectedOption === 1}
          checked
          disabled
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
          className="radio-button-icon1  radio-button-icon"
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

      <div className="text-field-3">
        <input
          type="radio"
          className="radio-button-icon1 .radio-button-icon"
          alt=""
          src="/radio-button.svg"
          name="subscription"
          checked={selectedOption === 3}
          onChange={() => handleRadioChange(3)}
        />
        <div className="text-container5">
          <div className="text7">6 Months Subscription </div>
          <div className="left-text-container">
            <div className="top-text">
              <div className="text8">Total</div>
              <div className="text9">₹149</div>
            </div>
            <div className="bottom-text">
              <div className="text10">₹25</div>
              <div className="text11">/mo</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-field-4">
        <input
          type="radio"
          className="radio-button-icon1  .radio-button-icon"
          alt=""
          src="/radio-button.svg"
          name="subscription"
          checked={selectedOption === 4}
          onChange={() => handleRadioChange(4)}
        />
        <div className="text-container5">
          <div className="text7">3 Months Subscription </div>
          <div className="left-text-container">
            <div className="top-text">
              <div className="text8">Total</div>
              <div className="text9">₹99</div>
            </div>
            <div className="bottom-text">
              <div className="text10">₹33</div>
              <div className="text11">/mo</div>
            </div>
          </div>
        </div>
      </div>

      <SubscriptionFeeContainer
        subscriptionDuration={selectedSubscription.subscriptionDuration}
        subscriptionPrice={selectedSubscription.subscriptionPrice}
        subscriptionDurationPrice={selectedSubscription.subscriptionDurationPrice}
      />
    </div>
  );
};

export default InputContainer;

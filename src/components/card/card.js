import React, { useState } from "react";
import DatePicker from "react-datepicker";
import visa from "../../img/visa.png";
import InputMask from "react-input-mask";

import "./card.scss";
import "react-datepicker/dist/react-datepicker.css";

const Card = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));

  return (
    <div className="card">
      <div className="card__head">
        <h2 className="card__head__title">Carly Ling</h2>
        <img src={visa} className="card__head__img" />
      </div>
      <div className="card__number">
        <h2 className="card__number__title">Credit Card Number</h2>
        <InputMask
          mask="9999      9999      9999      9999"
          className="card__number__input"
        />
      </div>
      <div className="card__footer">
        <div className="card__footer__date">
          <h2 className="card__footer__title">Expiration</h2>
          <DatePicker
            className="card__footer__date__input"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            dateFormat="MMMM yyyy"
            showMonthYearPicker
          />
        </div>
        <div className="card__footer__cvv">
          <h2 className="card__footer__title">CVV</h2>
          <InputMask mask="999" className="card__footer__cvv__input" />
        </div>
      </div>
    </div>
  );
};
export { Card };

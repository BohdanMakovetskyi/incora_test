import React from "react";
import "./detail.scss";

const Detail = () => {
  return (
    <div className="detail">
      <h2 className="detail__title">DETAIL</h2>
      <span className="detail__item">
        <p className="detail__item__name">iPad Pro</p>
        <span className="detail__item__money">$799</span>
      </span>
      <span className="detail__item">
        <p className="detail__item__name">Apple Pencil</p>
        <span className="detail__item__money">$99</span>
      </span>
    </div>
  );
};

export { Detail };

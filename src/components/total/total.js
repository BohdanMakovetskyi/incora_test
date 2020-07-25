import React from "react";
import { Info } from "../info/info";
import { Detail } from "../detail/detail";
import { Button } from "../button/button";
import { Card } from "../card/card";
import "./total.scss";

const Total = () => {
  return (
    <div className="container">
      <Info />
      <Detail />
      <Button />
      <Card />
    </div>
  );
};

export { Total };

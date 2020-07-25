import React from "react";
import { Total } from "./components/total/total";

import "./App.scss";

const App = () => {
  return (
    <>
      <div className="background" />
      <div className="total">
        <Total />
      </div>
    </>
  );
};

export { App };

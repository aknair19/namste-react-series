import React from "react";
import ReactDOM from "react-dom/client";
import "../Chap01_Inception/app.css";
import cardData from "./src/utils/dummyData";
import Header from "./src/components/Header";

import Body from "./src/components/Body";
const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <Body cardData={cardData} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

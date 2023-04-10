import React from "react";

const Shimmer = () => {
  return (
    <div className="restaurant-container">
      {Array(10)
        .fill("")
        .map((e, i) => (
          <div className="shimmer-card" key={i}></div>
        ))}
    </div>
  );
};

export default Shimmer;

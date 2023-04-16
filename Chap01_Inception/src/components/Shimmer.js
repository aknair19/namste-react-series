import React from "react";

const Shimmer = () => {
  return (
    <div>
      {Array(10)
        .fill("")
        .map((e, i) => (
          <div key={i}></div>
        ))}
    </div>
  );
};

export default Shimmer;

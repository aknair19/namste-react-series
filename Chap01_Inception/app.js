import React from "react";
import ReactDOM from "react-dom/client";

const name = "Abhishek";

const HeaderComponent = () => (
  <>
    <h1>Namste {name}</h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(parent); // create element creates an object aka react element
root.render(<HeaderComponent />); //render method is coverting an object into the tag and replaces if anything is inside root id

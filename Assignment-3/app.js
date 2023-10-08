import React from "react";
import ReactDOM from "react-dom/client";

const head = () => [
  <div className="header">
    <div className="logo">
      <img src={require("./logo.jpg")} alt="logo" />,
    </div>
    <div className="search">
      <input type="text" />
      <button>search</button>
      <div className="icon">
        <img src={require("./icon.jpg")} className="icon" alt="icon" />
      </div>
    </div>
  </div>, //in react to render an image we have to use "require{}"
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head());

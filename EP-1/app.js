import React from "react";
import ReactDOM from "react-dom/client";
//creating react element

const heading = React.createElement("h1", { id: "heading" }, "Hi i am parth");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

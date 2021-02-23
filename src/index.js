import React from "react";
import ReactDOM from "react-dom";

const fName = "Bro";
const lName = "Ski";
const num = 8;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>

    {/* Same result as above */}
    <h1>Hello {fName + " " + lName}!</h1>

    <p>Your lucky number is {num}!</p>

    {/* Use any expression */}
    <p>Your lucky number is {Math.floor(Math.random() * 10)}!</p>
  </div>,
  document.getElementById("root")
);

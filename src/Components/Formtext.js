import React, { useState } from "react";
import "./Formtext.css";

import { useEffect } from "react";

export default function Formtext(props) {
  // to resolve the problem of the dark mode changing
  useEffect(() => {
    const mode = localStorage.getItem("mode");

    const textarea = document.querySelector("#theTextArea");

    if (textarea) {
      if (mode === "dark") {
        textarea.style.color = "white";
        textarea.style.backgroundColor = "black";
      } else {
        textarea.style.color = "black";
        textarea.style.backgroundColor = "white";
      }
    }
  }, []);

  let onTextChange = event => {
    setText(event.target.value);
  };

  let UpperCase = () => {
    // console.log("converted to Uppercase");
    setText(text.toUpperCase());
    props.alert("Converted to Uppercase! ", "success : ");
  };

  let LowerCase = () => {
    // console.log("converted to Lowercase");
    setText(text.toLowerCase());
    props.alert("Converted to Lowercase! ", "success : ");
  };

  const handleCopy = () => {
    let text = document.getElementById("theTextArea");
    text.select(); // used for selecting the text present in that id
    navigator.clipboard.writeText(text.value); /// THIS IS THE MAIN FUNCTION WHICH IS USED TO COPY THE TEXT ON OUR CLIPBOARD.
    document.getSelection().removeAllRanges();
    props.alert("Text copied successfully! ", "success : ");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/); // this is regex or something like that which devideds the string into array with the help of spaces and
    //  then removes the spaces
    setText(newText.join(" "));
    props.alert("Extra space removed successfully! ", "success : ");
  };

  // this should be present inside the function only
  const [text, setText] = useState("");

  return (
    <div className="Main">
      <div className="container">
        <h1>
          {props.heading}
        </h1>
        <br />
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onTextChange}
            id="theTextArea"
            rows="15"
          />
        </div>
        <button className="Upper btn btn-primary" onClick={UpperCase}>
          CONVERT TO UPPER CASE
        </button>
        <button className="Lower btn btn-primary" onClick={LowerCase}>
          convert to lower case
        </button>
        <button className="Lower btn btn-primary" onClick={handleCopy}>
          Copy text
        </button>
        <button className="Lower btn btn-primary" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Text Summery</h2>
        {/* This is the way to insert the js logic into the html tags inside the jsx fragment */}
        {/* <p>{(text.trim() === "") ? '0 "Words" in provided text' : ` ${text.trim().split(/\s+/).length} "Words" in provided text`}</p> */}
        {/* this is another method to do the same thing  */}
        <p>
          {
            text.split(/\s+/).filter(e => {
              return e.length !== 0;
            }).length
          }{" "}
          Words in provided text
        </p>
        <p>
          {text.length} "Charactors" in provided text
        </p>
        <p>
          {" "}{(0.08 * text.split(" ").length).toFixed(2)}Sec approx time
          required to read the passage{" "}
        </p>
      </div>
    </div>
  );
}

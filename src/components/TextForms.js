// import { Button } from "@mui/material";
import React, { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("enter your text");
  function handleClicked() {
    // console.log("button is clicked");
    let text2 = text.toUpperCase();
    setText(text2);
  }
  function handleLwClicked() {
    // console.log("button is clicked");
    let text2 = text.toLowerCase();
    setText(text2);
  }

  function handleClearText() {
    // console.log("button is clicked");
    let text2 = " ";
    setText(text2);
  }

  function handleChange(event) {
    let text1 = setText(event.target.value);
    console.log(text1);
  }

  function copyText() {
    // let copyText = text;
    var copyText = document.getElementById("Textarea");
    // copyText.value = text;

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }

  function removeExtraSpace() {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  }
  return (
    <div class="mb-3">
      <h1
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        {props.heading}
      </h1>
      <textarea
        style={{
          backgroundColor: props.mode === "light" ? "white" : "black",
          color: props.mode === "dark" ? "white" : "black",
        }}
        class="form-control"
        id="Textarea"
        value={text}
        onChange={handleChange}
        rows="8"
      ></textarea>
      <button
        class={`btn btn-${
          props.mode == "dark" ? "success" : "primary"
        } my-3 mx-2`}
        onClick={handleClicked}
      >
        convert to uppercase
      </button>
      <button
        // style={{ float: "right", margin: "5px" }}
        class={`btn btn-${
          props.mode == "dark" ? "success" : "primary"
        } my-3 mx-2`}
        onClick={handleLwClicked}
      >
        convert to lowercase
      </button>
      <button
        // style={{ float: "right", margin: "5px" }}
        class={`btn btn-${
          props.mode == "dark" ? "success" : "primary"
        } my-3 mx-2`}
        onClick={handleClearText}
      >
        Clear Text
      </button>

      <button
        // style={{ float: "right", margin: "5px" }}
        class={`btn btn-${
          props.mode == "dark" ? "success" : "primary"
        } my-3 mx-2`}
        onClick={copyText}
      >
        copy
      </button>

      <button
        // style={{ float: "right", margin: "5px" }}
        class={`btn btn-${
          props.mode == "dark" ? "success" : "primary"
        } my-3 mx-2`}
        onClick={removeExtraSpace}
      >
        remove extra space
      </button>

      <div
        class="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>your text summary</h2>
        <p>
          {text.split(" ").length}words and {text.length}characters
        </p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

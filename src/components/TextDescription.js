import React, { useState } from "react";

export default function TextDescription(props) {
  const clickUpHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to Upper Case.", "success");
  };
  const clickLowerHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to Lower Case.", "success");
  };
  const clickRemoveHandler = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Field Clered Successfully.", "success");
  };
  const changeHandler = (event) => {
    setText(event.target.value);
  };
  const clickCopyHandler = () => {
    let text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied Successfully.", "success");
  };
  const clickExtraSpaces = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(
      "Text Fields Extra Spaces Removed Successfully.",
      "success"
    );
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <hr />
        <div className="form-group">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#343a40" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            id="myText"
            value={text}
            onChange={changeHandler}
            rows="12"
          ></textarea>
        </div>
        <div className="mt-2">
          <button className="btn btn-primary " onClick={clickUpHandler}>
            Convert to Uppercase
          </button>

          <button className="btn btn-info mx-3" onClick={clickLowerHandler}>
            Convert to Lower Case
          </button>

          <button className="btn btn-danger" onClick={clickRemoveHandler}>
            Clear Text
          </button>
          <button className="btn btn-success mx-3" onClick={clickCopyHandler}>
            Copy Text
          </button>
          <button className="btn btn-warning" onClick={clickExtraSpaces}>
            Remove Extra space
          </button>
        </div>
      </div>
      <div
        className="container my-4"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your Texts Summary</h1>
        <hr />
        <p>
          Total Words:
          <span className="border border-success p-2 ml-3 font-weight-bolder">
            {text.split(" ").length}
          </span>
        </p>
        <hr />
        <p>
          Total character:{" "}
          <span className="border border-info p-2 ml-3 font-weight-bolder">
            {text.length}
          </span>
        </p>
        <hr />
        <p>
          Can be read (approxmatly*):{" "}
          <span className="border border-info p-2 ml-3 mr-1 font-weight-bolder">
            {0.008 * text.split(" ").length}
          </span>
          minitue
        </p>
        <hr />
        <h2>Text Preview</h2>
        <hr />
        <p className="text-justify">{text}</p>
      </div>
    </>
  );
}

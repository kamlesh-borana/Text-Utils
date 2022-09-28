import React, { useContext, useState } from "react";
import alertContext from "../context/alert/alertContext";
import Button from "./Button";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const {showAlert} = useContext(alertContext);
  let myStyles = {
    color: props.darkMode?"#fff":"#000",
    backgroundColor: props.darkMode?"#0d1540":"#fff"
  }

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    showAlert("Text Converted to Uppercase");
  }

  const handleLowerCase = () => {
    setText(text.toLowerCase());
    showAlert("Text Converted to Lowercase");
  }

  const handleCapitaize = () => {
    setText(text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' '));
    showAlert("Capitalized First Letter of Every Word");
  }

  const handleClear = () => {
    setText("")
    showAlert("Text Cleared");
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showAlert("Text Copied to Clipboard");
  }

  const handleExtraSpaces = () => {
    setText(text.replace(/\s+/g, ' ').trim());
    showAlert("Removed Extra Spaces From the Text");
  }

  return (
    <>
      <div className="container text-center">
        <h2 className="my-5">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleChange}
            style={myStyles}
          ></textarea>
        </div>
        <Button btnText="Remove Extra Spaces" text={text} handleClick={handleExtraSpaces} />
        <Button btnText="Uppercase" text={text} handleClick={handleUpperCase} />
        <Button btnText="Lowercase" text={text} handleClick={handleLowerCase} />
        <Button btnText="Capitalize" text={text} handleClick={handleCapitaize} />
        <Button btnText="Clear" text={text} handleClick={handleClear} />
        <Button btnText="Copy" text={text} handleClick={handleCopy} />
      </div>
      <div className="container my-3">
        <h3>Text Summary</h3>
        <p>
          Your text contains{" "}
          {text.split(/\s+/).filter((c) => c.length !== 0).length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {0.008 * text.split(/\s+/).filter((c) => c.length !== 0).length}{" "}
          minutes read
        </p>
        <h3>Preview</h3>
        <p>{text ? text : "Nothing to preview yet"}</p>
      </div>
    </>
  );
};

export default TextForm;

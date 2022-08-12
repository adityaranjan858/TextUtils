import React from "react";
import { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  function handleUpCase() {
    let newText = text.toUpperCase();
    setText(newText);
    props.showMsg("Converted to Uppercase.","success");
  }
  function handleLoCase() {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showMsg("Converted to LowerCase.","success")
  }
  function handleClearText(){
    let clear = "";
    setText(clear);
    props.showMsg("Text cleared.","success")
  }
  function handleCaCase() {
    let words = text.split(" ");
    let newSentence = words.map((word) => { 
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
    setText(newSentence);
    props.showMsg("Converted to Capitalized.","success")
  }
  function handleInCaCase() {
    let words = text.split(" ");
    let newSentence = words.map((word) => {
       return word.charAt(0).toLowerCase() + word.slice(1).toUpperCase();
    }).join(" ");
    setText(newSentence);
    props.showMsg("Converted to Inverse Capitalize.","success")
  }
  function handleCopyCase() {
      /* Get the text field */
      var copyText = document.getElementById("mybox");
      /* Select the text field */
      copyText.select();
       /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value);
      props.showMsg("Copied to Clipboard. ","success");
  }
  function handleOnChange(event) {
    setText(event.target.value);
  }
  return (
    <>
      <h2 className="text-center" style={{color : props.mode === "light" ? "black" : "white"}}>{props.heading}</h2>
      <div className="mb-3">
        <label htmlFor="mybox" className="form-label"></label>
        <textarea
          className="form-control"
          name=""
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
          style={{color : props.mode === "light" ? "black" : "white", backgroundColor : props.mode === "light" ? "white" : "#7a8fcd" }}
        ></textarea>
      </div>
      <div className="d-flex justify-content-around flex-wrap">
      <button disabled={text.length===0} type="submit" className="btn btn-primary my-1" onClick={handleUpCase}>Convert to UpperCase</button>
      <button disabled={text.length===0} type="submit" className="btn btn-primary my-1" onClick={handleLoCase}>Convert to LowerCase</button>
      <button disabled={text.length===0} type="submit" className="btn btn-primary my-1" onClick={handleClearText}>Clear Text</button>
      <button disabled={text.length===0} type="submit" className="btn btn-primary my-1" onClick={handleCaCase}>Convert to Capitalize</button>
      <button disabled={text.length===0} type="submit" className="btn btn-primary my-1" onClick={handleInCaCase}>Convert to Inverse Capitalize</button>
      <button disabled={text.length===0} type="submit" className="btn btn-primary my-1" onClick={handleCopyCase}>Copy Text</button>
      </div>

      <div className="my-4" style={{color : props.mode === "light" ? "black" : "white"}}>
        <h3>Your text Summary</h3>
        <p>Number of words : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} <br /> number of characters : {text.length}.  <br />
        {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read
        </p>
        <h4>Preview</h4>
        {text.length>0 ? text.toLowerCase() : "Nothing to preview!"}
      </div>
    </>
  );
}

export default TextForm;

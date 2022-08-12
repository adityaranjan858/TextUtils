import React from "react";

function About(props) {
  
  return (
    <div style={{color : props.mode === "light"? "black" : "white "}}>
      <p>
        TextUtils gives you a way to analyze your test quickly and efficiently. Be it word count, character count etc.
      </p>

      <p>
        Textutils is a free character count tool that provides instant character count and word count statistics for a given text.  Textutils reports the number of words and characters. Thus it is suitable for writing text with word character limit.
      </p>

      <p>
        This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer etc. It suits to count characters in Facebook, blog, books, excel document, PDF document etc.
      </p>
    </div>
  );
}

export default About;

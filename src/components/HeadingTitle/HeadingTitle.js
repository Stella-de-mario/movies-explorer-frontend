import React from "react";
import "./HeadingTitle.css";

function HeadingTitle({ text, position }) {
  return (
    <h1 className={`heading__title heading__title_${position}`}>
      {text}
    </h1>
  )
}

export default HeadingTitle;
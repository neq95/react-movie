import React from "react";

const Container = (props) => {
  let className = props.className ? `container ${props.className}` : "container";
  let style = {
    maxWidth: "1200px",
    margin: "0 auto"
  }
  return (
    <div className={className} style={style}>
      {props.children}
    </div>
  )
}

export default Container;
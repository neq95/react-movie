import React from "react";

import "./Container.css";

const Container = (props) => {
  let className = props.className ? `container ${props.className}` : "container";

  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

export default Container;
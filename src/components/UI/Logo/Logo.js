import React from "react";

import logoMobile from "../../../assets/logo_mobile.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logoMobile} alt="logo" className="logo__image"/>
    </div>
  )
}

export default Logo;
import React from "react";

import "./header.styles.scss";

import {Link} from "react-router-dom";

import {ReactComponent as Icon} from "../../assets/crown.svg";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Icon className="icon" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
import React from "react";
import { navtabProps } from "../../types/cardType";
import { NavLink } from "react-router-dom";

import "./TabNav.scss";

const TabNav: React.FC<navtabProps> = ({ name, navTo }) => {
  return (
    <div className="tab-container">
      <NavLink to={`/${navTo}`}>{name}</NavLink>
    </div>
  );
};

export default TabNav;

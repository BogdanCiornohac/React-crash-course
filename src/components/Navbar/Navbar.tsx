import React from "react";
import TabNav from "../TabNav/TabNav";

import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <nav>
      <h1>Taskly</h1>
      <div className="navigation-container">
        <TabNav navTo="home" name="Home" />
        <TabNav navTo="login" name="Login" />
        <TabNav navTo="tasks" name="Tasks" />
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";

import { Route, Link, Switch } from "react-router-dom";

import Home from "../comps/barPost";
import Profile from "../comps/profile";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-list-styling">
        <ul className="sidebar-list list-unstyled">
          <li>
            <Link to="/Bar_Top">Home</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-route">
        <Switch>
          <Route exact path="/Bar_Top">
            <Home />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default Sidebar;

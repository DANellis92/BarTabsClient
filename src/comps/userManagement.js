import React from "react";
import BarPost from "./barPost";
import AuthContext from "./AuthContext";

class userLanding extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Welcome to your Bar Top</h1>
        <BarPost />
      </div>
    );
  }
}

export default userLanding;

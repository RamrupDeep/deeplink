import React from "react";
import { NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to={"/Product"}>
        <button>Product</button>
      </NavLink>
    </div>
  );
};

export default Profile;

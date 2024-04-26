import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="main_navbar_div">
      <h1 className="Todo_heading">Todo App</h1>
      <div className="main_links_div">
        <p>Home</p>
        <p>Sign Up</p>
        <p>Sign In</p>
        <p>Log Out</p>
      </div>
    </div>
  );
};

export default Navbar;

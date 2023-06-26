import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [icon, setIcon] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleClick1 = () => {
    setIcon(!icon);
  };

  return (
    <div>
      <nav>
        <a
          href="/"
          style={{
            color: "#fff",
            marginBottom: "10px",
            textDecoration: "none",
          }}
        >
          <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
            <h1 onClick={() => handleClick1()}>DashBoard</h1>
          </NavLink>
        </a>
        <h1 style={{ color: "white", marginLeft: "180px" }}>
          React CRUD Application❤️
        </h1>
        <Drawer anchor={"left"} open={icon}>
          <ul
            id="navbar"
            className={clicked ? "#navbar active" : "#navbar"}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "230px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <li>
              <NavLink style={{ color: "black" }} to="/">
                <CloseIcon
                  style={{ background: "grey" }}
                  onClick={() => handleClick1()}
                />
              </NavLink>
            </li>
            <li>
              <NavLink style={{ color: "black" }} to="/users">
                <h4 onClick={() => handleClick1()}>List Users</h4>
              </NavLink>
            </li>
            <li>
              <NavLink style={{ color: "black" }} to="/create-user">
                <h4 onClick={() => handleClick1()}>Create User</h4>
              </NavLink>
            </li>
            {/* <li>
              <NavLink style={{ color: "black" }} to="/edit-user/:id">
                <h4 onClick={() => handleClick1()}>Edit Users</h4>
              </NavLink>
            </li> */}
            <li>
              <NavLink style={{ color: "black" }} to="/profile">
                <h4 onClick={() => handleClick1()}>Profile</h4>
              </NavLink>
            </li>
            {/* <li>
              <NavLink style={{ color: "black" }} to="/edit-profile">
                <h4>Edit profile</h4>
              </NavLink>
            </li> */}
          </ul>
        </Drawer>

        <div id="mobile">
          <i
            id="bar"
            onClick={() => handleClick()}
            className={clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <NavLink
          to="/developer"
          style={{ textDecoration: "none", color: "white" }}
        >
          Developer
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;

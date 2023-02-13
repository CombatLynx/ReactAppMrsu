import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={classes.component}>
            <li><NavLink to="/myPosts">MyPosts</NavLink></li>
            <li><NavLink to="/header">Header</NavLink></li>
        </div>
    );
}

export default Navbar;
import React from "react";
import {NavLink} from "react-router-dom";
import c from "./Header.module.css"

function Header() {
    return (
        <div className={c.navBar}>
            {/* add NavLinks*/}
            <NavLink to="/pre-junior">PREJUNIOR</NavLink>
            <NavLink to="/prejunior">PreJunior</NavLink>
            <NavLink to="/JUNIOR">JUNIOR</NavLink>
            <NavLink to="/JuniorPlus">JuniorPlus</NavLink>
        </div>
    );
}

export default Header;

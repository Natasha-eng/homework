import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import c from "./Header.module.css"

function Header() {
    let [clicked, setClicked] = useState<boolean>(false)

    const btn = `${c.openbtn} ${clicked ? c.mainBtn : ""}`
    const slide = `${c.sideBar} ${clicked ? c.SlideSideBar : c.CloseSlideSideBar}`

    return (
        <div className={c.navBar}>
            {/* add NavLinks*/}
            <div className={c.mainBtn}>
                <button className={btn} onClick={() => setClicked(!clicked)}>☰ Menu</button>
            </div>
            <div className={slide}>
                <div className={c.navBarEl}>
                    <NavLink to="/pre-junior" activeClassName={c.activeLink}>PREJUNIOR</NavLink>
                </div>
                <div className={c.navBarEl}>
                    <NavLink to="/prejunior" activeClassName={c.activeLink}>PreJunior</NavLink>
                </div>
                <div className={c.navBarEl}>
                    <NavLink to="/JUNIOR" activeClassName={c.activeLink}>JUNIOR</NavLink>
                </div>
                <div className={c.navBarEl}>
                    <NavLink to="/JuniorPlus" activeClassName={c.activeLink}>JuniorPlus</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;

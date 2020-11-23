import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import c from "./Header.module.css"
import {PATH} from "./Routes";

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
                    <NavLink to={PATH.PRE_JUNIOR} activeClassName={c.activeLink}>PRE_JUNIOR</NavLink>
                </div>
                <div className={c.navBarEl}>
                    <NavLink to={PATH.JUNIOR} activeClassName={c.activeLink}>JUNIOR</NavLink>
                </div>
                <div className={c.navBarEl}>
                    <NavLink to={PATH.JUNIOR_PLUS} activeClassName={c.activeLink}>JUNIOR_PLUS</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;

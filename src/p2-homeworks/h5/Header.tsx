import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import navBarStyle from "./Header.module.css"
import {PATH} from "./Routes";

function Header() {
    let [clicked, setClicked] = useState<boolean>(false)

    const btn = `${navBarStyle.openbtn} ${clicked ? navBarStyle.mainBtn : ""}`
    const slide = `${navBarStyle.sideBar} ${clicked ? navBarStyle.SlideSideBar : navBarStyle.CloseSlideSideBar}`

    const clickHandler = () => {
        setClicked(!clicked)
    }

    return (
        <div className={navBarStyle.navBar}>
            {/* add NavLinks*/}
            <div className={navBarStyle.mainBtn}>
                <button className={btn} onClick={clickHandler}>☰ Menu</button>
            </div>
            <div className={slide}>
                <div className={navBarStyle.navBarEl}>
                    <NavLink to={PATH.PRE_JUNIOR} activeClassName={navBarStyle.activeLink}>PRE_JUNIOR</NavLink>
                </div>
                <div className={navBarStyle.navBarEl}>
                    <NavLink to={PATH.JUNIOR} activeClassName={navBarStyle.activeLink}>JUNIOR</NavLink>
                </div>
                <div className={navBarStyle.navBarEl}>
                    <NavLink to={PATH.JUNIOR_PLUS} activeClassName={navBarStyle.activeLink}>JUNIOR_PLUS</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;

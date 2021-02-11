import React from "react";
import errorPageStyle from "./Error404.module.css"

function Error404() {
    return (
        <div className={errorPageStyle.ErrorWrapper}>
            <div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;

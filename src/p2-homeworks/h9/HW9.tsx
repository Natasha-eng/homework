import React from "react";
import Clock from "./Clock";
import c from "../h5/HW5.module.css";

function HW9() {
    return (
        <div className={c.Chapter}>
            <hr/>
            <div className={c.NameChapter}>homeworks 9</div>

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
        </div>
    );
}

export default HW9;

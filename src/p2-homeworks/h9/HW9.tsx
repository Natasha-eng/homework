import React from "react";
import Clock from "./Clock";
import styles from "../h5/HW5.module.css";

function HW9() {
    return (
        <div className={styles.Chapter}>
            <hr/>
            <div className={styles.NameChapter}>homeworks 9</div>

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
        </div>
    );
}

export default HW9;

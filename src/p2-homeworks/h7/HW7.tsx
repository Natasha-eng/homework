import React, {useState} from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";
import styles from "../h5/HW5.module.css";
import style from "./HW7.module.css";

const arr = ["x", "y", "z"];

function HW7() {
    const [value, onChangeOption] = useState(arr[0]);

    return (
        <div className={styles.Chapter}>
            <hr/>
            <div className={styles.NameChapter}> homeworks 7</div>

            {/*should work (должно работать)*/}
            <div className={style.h7Wrapper}>
                <div >
                    <SuperSelect
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                        icon = {''}
                    />
                </div>
                <div>
                    <SuperRadio
                        name={"radio"}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
            </div>

            <hr/>
        </div>
    );
}

export default HW7;

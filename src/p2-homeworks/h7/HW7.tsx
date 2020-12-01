import React, {useState} from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";
import c from "../h5/HW5.module.css";

const arr = ["x", "y", "z"];

function HW7() {
    const [value, onChangeOption] = useState(arr[0]);

    return (
        <div className={c.Chapter}>
            <hr/>
            <div className={c.NameChapter}> homeworks 7</div>

            {/*should work (должно работать)*/}
            <div className={c.h7Wrapper}>
                <div >
                    <SuperSelect
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
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
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    );
}

export default HW7;

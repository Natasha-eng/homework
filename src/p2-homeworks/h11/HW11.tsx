import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import c from "../h5/HW5.module.css";
import styles from "./../h11/common/c8-SuperDoubleRange/SuperDoubleRange.module.css";
import style from "./../h11/common/c7-SuperRange/SuperRange.module.css";


function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeRange = (newValue: number) => {
        if (value2 <= value1) {
            return
        }
        setValue1(newValue);
    }

    const onDoubleRangeChange = (values: [number, number]) => {
        if (values[1] <= values[0]) {
            return
        }
        setValue1(values[0])
        setValue2(values[1])
    }

    return (
        <div className={c.Chapter}>
            <hr/>
            <div className={c.NameChapter}> homeworks 11</div>

            <div className={style.rangeContainer}>
                <div className={style.rangeValue}>{value1}</div>
                <SuperRange value={value1} onChangeRange={onChangeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={styles.doubleRangeContainer}>
                <div className={styles.rangeValue}>{value1}</div>
                <SuperDoubleRange values={[value1, value2]} onDoubleRangeChange={onDoubleRangeChange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <div className={style.rangeValue}>{value2}</div>
            </div>
        </div>
    );
}

export default HW11;

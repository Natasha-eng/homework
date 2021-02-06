import React, {ChangeEvent, useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import c from "../h5/HW5.module.css";

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

            <div>
                <span>{value1}</span>
                <SuperRange value={value1} onChangeRange={onChangeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange values={[value1, value2]} onDoubleRangeChange={onDoubleRangeChange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>
        </div>
    );
}

export default HW11;

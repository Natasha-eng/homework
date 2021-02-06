import React, {ChangeEvent} from "react";
import styles from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onDoubleRangeChange?: (values: [number, number]) => void
    values: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onDoubleRangeChange, values,
        // min, max, step, disable, ...
    }
) => {
    const onChangeFirstValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onDoubleRangeChange && onDoubleRangeChange([+e.target.value, values[1]])
    }

    const onChangeSecondValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onDoubleRangeChange && onDoubleRangeChange([values[0], +e.target.value])
    }

    return (
        <>
            <div className={styles.rangeSlider}>
                <input type="range" min={0} max={100} step={1} value={values[0]} onChange={onChangeFirstValueHandler}/>
                <input type="range" min={0} max={100} step={1} value={values[1]} onChange={onChangeSecondValueHandler}/>
            </div>
        </>
    );
}

export default SuperDoubleRange;

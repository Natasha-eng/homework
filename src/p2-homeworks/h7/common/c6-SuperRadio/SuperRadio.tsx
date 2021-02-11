import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import styles from "../../../h5/HW5.module.css";
import radioStyles from "./SuperRadio.module.css";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions = options ? options.map((o, i) => (
        <div className={styles.container}>
            <label className={`${radioStyles.label} ${o === value ? radioStyles.checked : ''}`} key={name + "-" + i}>
                <input className={radioStyles.input}
                       type={"radio"}
                       checked={o === value} onChange={onChangeCallback} value={o} name={name}
                    // name, checked, value, onChange
                />
            </label>
            <span className={radioStyles.text}>{o}</span>
        </div>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;

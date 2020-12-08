import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import c from "../../../h5/HW5.module.css";

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


    const mappedOptions = options ? options.map((o, i) => ( // map options with key
        <div className={c.container}>
            <label className={`${c.label} ${o === value ? c.checked : ''}`} key={name + "-" + i}>
                <input className={c.input}
                    type={"radio"}
                    checked={o === value} onChange={onChangeCallback} value={value} name={name}
                    // name, checked, value, onChange
                />
            </label>
            <span className={c.text}>{o}</span>
        </div>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;

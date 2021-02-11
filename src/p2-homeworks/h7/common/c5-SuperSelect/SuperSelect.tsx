import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import style from './SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: string[]
    onChangeOption?: (option: string) => void
    icon?: string
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions = options.map((opt, i) => <option key={i}>{opt}</option>); // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChangeOption && onChangeOption(e.currentTarget.value);
    }

    return (
        <div className={style.box}>
            <select onChange={onChangeCallback} value={restProps.value}>
                {mappedOptions}
            </select>
        </div>

    );
}

export default SuperSelect;

import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import c from "../h5/HW5.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.themeChanging.theme); // useSelector
    const dispatch = useDispatch()

    const onChangeCallback = (newValue: string) => {
        dispatch(changeThemeC(newValue))
    }

    return (
        <div className={`${s[theme]} ${c.Chapter}`}>
            <hr/>
            <span className={s[theme + '-text']}>
                <div className={c.NameChapter}>homeworks 12</div>
            </span>

            <SuperRadio name={"radio1"} onChangeOption={onChangeCallback} options={themes} value={theme}/>
            <hr/>
        </div>
    );
}

export default HW12;

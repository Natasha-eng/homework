import React from "react";
import themeStyles from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import styles from "../h5/HW5.module.css";
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
        <div className={`${themeStyles[theme]} ${styles.Chapter}`}>
            <hr/>
            <span className={themeStyles[theme + '-text']}>
                <div className={styles.NameChapter}>homeworks 12</div>
            </span>

            <SuperRadio name={"radio1"} onChangeOption={onChangeCallback} options={themes} value={theme}/>
            <hr/>
        </div>
    );
}

export default HW12;

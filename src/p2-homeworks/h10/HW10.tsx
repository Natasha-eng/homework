import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import styles from "../h5/HW5.module.css";
import {useDispatch, useSelector} from "react-redux";
import loader from './bll/loader.svg'
import {initStateType, loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch();
    const state = useSelector<AppStoreType, initStateType>(state => state.loading);

    //const loading = false;

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true));
        // setTimeout
        setTimeout(() => dispatch(loadingAC(false)), 2000)
        // console.log("loading...");
    };

    return (
        <div className={styles.Chapter}>
            <hr/>
            <div className={styles.NameChapter}> homeworks 10</div>

            {/*should work (должно работать)*/}
            {state.loading
                ? (
                    <div>крутилка...
                        <img src={loader}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
        </div>
    );
}

export default HW10;

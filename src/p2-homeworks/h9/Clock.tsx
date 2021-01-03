import React, {useEffect, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import c from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
    }

    const start = () => {
        const id: number = window.setInterval(() => {
            //setDate
            setDate(new Date());

        }, 1000);
        setTimerId(id);
        return () => {
            clearInterval(id)
        }
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    };
    const onMouseLeave = () => {
        // close
        setShow(false)
    };

    const twoDigits = (num: number) => num < 10 ? '0' + num : num;
    //const stringTime = new Date().toLocaleTimeString() //"Time"; // fix with date
    const stringTime = twoDigits(date.getHours()) + '-' + twoDigits(date.getMinutes()) + '-' + twoDigits(date.getSeconds());
    const stringDate = new Date().toLocaleDateString()  //"Date"; // fix with date

    return (
        <div>
            <div className={c.time}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;

import React, {useEffect, useState} from "react";
import {API} from "../api/api";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import style from './Request.module.css';


function Request() {

    let [checked, setChecked] = useState<boolean>(false)
    let [response, setResponse] = useState('')

    useEffect(() => {
        API.request(checked)
            .then(res => {
                console.log({...res})
                response = res.data.errorText
                setResponse(response)
            })
            .catch(error => {
                console.log({...error})
                console.log(error.response ? error.response.data.errorText : error.message)
                response = error.response ? error.response.data.errorText : error.message
                setResponse(response)
            })
    }, [checked])

    const checkModeHandler = () => {
        setChecked(!checked)
    }

    return (
        <div>
            <SuperButton onClick={checkModeHandler}>Press Me</SuperButton>
            <div className={style.checkboxContainer}><SuperCheckbox type="checkbox" checked={checked}/></div>

            <span>{response}</span>
        </div>
    );
}

export default Request;

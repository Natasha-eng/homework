import React from "react";
import {AffairType} from "./HW2";
import c from "./../h5/HW5.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix

    return (
        <div className={c.section}>

            <div key={props.affair._id}>{props.affair.name} <span>Priority: {props.affair.priority}</span></div>
            <button onClick={deleteCallback} className={c.default}>X</button>
        </div>
    );
}

export default Affair;

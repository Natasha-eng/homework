import React from "react";
import {MessageDataProps} from "./HW1";
import s from "./Message.module.css"


function Message(props: MessageDataProps) {
    return (
        <div className={s.message}>
            <img src={props.avatar}/>
            <div className={s.messageInfo}>
                <div className={s.name}>{props.name}</div>
                <div className={s.messageContent}>{props.message}<span className={s.messageTime}>{props.time}</span>
                </div>
            </div>
        </div>
    );
}

export default Message;

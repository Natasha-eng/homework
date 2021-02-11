import React from "react";
import {MessageDataProps} from "./HW1";
import messageStyle from "./Message.module.css"


function Message(props: MessageDataProps) {
    return (
        <div className={messageStyle.message}>
            <img src={props.avatar}/>
            <div className={messageStyle.messageInfo}>
                <div className={messageStyle.name}>{props.name}</div>
                <div className={messageStyle.messageContent}>{props.message}<span className={messageStyle.messageTime}>{props.time}</span>
                </div>
            </div>
        </div>
    );
}

export default Message;

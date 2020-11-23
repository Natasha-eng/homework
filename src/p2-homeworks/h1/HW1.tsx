import React from "react";
import Message from "./Message";
import c from "./../h5/HW5.module.css"

export type MessageDataProps = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Some Name",
    message: "some text",
    time: "22:00",
};

function HW1() {
    return (
        <div className={c.Chapter}>
            <hr/>

            <div className={c.NameChapter} >homeworks 1</div>

            {/*should work (должно работать)*/}

            <Message avatar={messageData.avatar} name={messageData.name} message={messageData.message}
                     time={messageData.time}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;

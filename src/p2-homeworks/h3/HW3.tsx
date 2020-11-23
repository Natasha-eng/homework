import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";
import c from "./../h5/HW5.module.css"

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]); // need to fix any

    const addUserCallback = (name: string) => {
        let newUser = {_id: v1(), name: name};
        let NewUsers = [newUser, ...users]// need to fix any
        setUsers(NewUsers); // need to fix
    }

    return (
        <div className={c.Chapter}>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;

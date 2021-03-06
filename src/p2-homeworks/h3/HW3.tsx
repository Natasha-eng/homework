import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";
import styles from "./../h5/HW5.module.css"

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
        <div className={styles.Chapter}>
            <hr/>
            <div className={styles.NameChapter}>homeworks 3</div>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
        </div>
    );
}

export default HW3;

import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void// need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    // need to fix with (?:)
    const inputClass = error ? s.error : s.someClass;

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span className = {s.errorText}>{error}</span>
            <button onClick={addUser} className={s.addButton}>add</button>
            <span className={s.countUsersText}>{totalUsers}</span>
        </div>
    );
}

export default Greeting;

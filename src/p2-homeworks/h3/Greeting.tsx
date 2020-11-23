import React, {ChangeEvent} from "react";
import c from "./../h5/HW5.module.css";


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
    const inputClass = error ? c.error : c.superInput;

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span className = {c.errorText}>{error}</span>
            <button onClick={addUser} className={c.default}>add</button>
            <span className={c.countUsersText}>{totalUsers}</span>
        </div>
    );
}

export default Greeting;

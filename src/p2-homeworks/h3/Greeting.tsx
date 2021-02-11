import React, {ChangeEvent} from "react";
import styles from "./../h5/HW5.module.css";
import buttonStyles from "./../h4/common/c2-SuperButton/SuperButton.module.css";
import inputStyles from "./../h4/common/c1-SuperInputText/SuperInputText.module.css";


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
    const inputClass = error ? styles.error : inputStyles.superInput;

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span className = {styles.errorText}>{error}</span>
            <button onClick={addUser} className={buttonStyles.default}>add</button>
            <span className={styles.countUsersText}>{totalUsers}</span>
        </div>
    );
}

export default Greeting;

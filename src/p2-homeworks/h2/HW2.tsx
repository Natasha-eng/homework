import React, {useState} from "react";
import Affairs from "./Affairs";
import c from "./../h5/HW5.module.css"

// types
export type AffairPriorityType = "high" | "low" | "middle"; // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = "all" | AffairPriorityType;

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    if (filter === "all") return affairs;
    if (filter === "high") return affairs.filter(affair => affair.priority === "high");
    if (filter === "middle") return affairs.filter(affair => affair.priority === "middle");
    if (filter === "low") return affairs.filter(affair => affair.priority === "low");
    else return affairs; // need to fix
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    affairs = affairs.filter(affair => affair._id != _id)// need to fix any
    return affairs; // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>([
        {_id: 1, name: "React", priority: "high"},
        {_id: 2, name: "anime", priority: "low"},
        {_id: 3, name: "games", priority: "low"},
        {_id: 4, name: "work", priority: "high"},
        {_id: 5, name: "html & css", priority: "middle"},
    ]); // need to fix any
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)); // need to fix any

    return (
        <div className={c.Chapter}>
            <hr/>
            <div className={c.NameChapter}>homeworks 2</div>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}/>

            <hr/>
        </div>
    );
}

export default HW2;

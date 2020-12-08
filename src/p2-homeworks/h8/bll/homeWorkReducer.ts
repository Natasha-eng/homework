import {initialPeopleType} from "../HW8";

type SortUpActionType = {
    type: "sort"
    payload: "up"
}

type SortDownActionType = {
    type: "sort"
    payload: "down"
}

type CheckActionType = {
    type: "check"
    payload: 18
}

type ActionsType = SortUpActionType | SortDownActionType | CheckActionType

export const homeWorkReducer = (state: initialPeopleType, action: ActionsType): initialPeopleType => {
    switch (action.type) {
        case "sort": {
            if (action.payload === "up") {
                return [...state].sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (a.name < b.name) {
                        return -1
                    }
                    return 0;
                })
            }
            if (action.payload === "down") {
                return [...state].sort((a, b) => {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (a.name < b.name) {
                        return 1
                    }
                    return 0;
                })
            } else {
                return state
            }
        }
        case "check": {
            if (action.payload === 18) {
                return state.filter(person => person.age > 18)
            } else {
                return state
            }
        }
        default:
            return state
    }
};
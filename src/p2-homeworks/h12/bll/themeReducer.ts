const initState = {
    theme: "some"
}

export const themeReducer = (state = initState, action: changeThemeType): initStateType => {
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, theme: action.value}
        }
        default:
            return state;
    }
};

export const changeThemeC = (value: string) => ({type: "CHANGE_THEME", value}) as const; // fix any

//types
const CHANGE_THEME = "CHANGE_THEME"
export type changeThemeType = ReturnType<typeof changeThemeC>
export type initStateType = {
    theme: string
}

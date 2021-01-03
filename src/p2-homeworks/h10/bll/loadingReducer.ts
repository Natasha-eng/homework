export type initStateType = {
    loading: boolean
}

const initState = {
    loading: false
};

const SET_LOADING = 'SET_LOADING';

export type ActionType = ReturnType<typeof loadingAC>

export const loadingReducer = (state = initState, action: ActionType): initStateType => {
    switch (action.type) {
        case "SET_LOADING": {
            return {
                ...state,
                loading: action.loading
            };
        }
        default:
            return state;
    }
};

export const loadingAC = (loading: boolean) => {
    return {
        type: SET_LOADING,
        loading
    }
}; // fix any
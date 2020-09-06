const SET_START_VALUE = "SET_START_VALUE";
const CHANGE_COUNT_VALUE = "CHANGE_COUNT_VALUE";
const ON_CHANGE_INPUT = "ON_CHANGE_INPUT";
const CHECKED_INCORRECT_VALUE = "CHECKED_INCORRECT_VALUE";


export type LcStateType = {
    maxValue: number
    startValue: number
}

export type CounterStateType = {
    countValue: number | "enter values and press set" | "incorrect value",
    maxValue: number,
    startValue: number
}

type SetStartValueAcType = {
    type: "SET_START_VALUE"
}
type ChangeCountValueAcType = {
    type: "CHANGE_COUNT_VALUE"
    value: number
}
type OnChangeInputAcType = {
    type: "ON_CHANGE_INPUT"
    value: string
    title: string
}

type CheckedIncorrectValue = {
    type: "CHECKED_INCORRECT_VALUE"
}

type ActionsTypes = SetStartValueAcType
    | ChangeCountValueAcType
    | OnChangeInputAcType
    | CheckedIncorrectValue

function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}

const state: LcStateType = restoreState<LcStateType>("value", {maxValue: 0, startValue: 0});


const initialState: CounterStateType = {
    countValue: "enter values and press set",
    maxValue: state.maxValue,
    startValue: state.startValue,
}

const counterReducer = (state: CounterStateType = initialState, action: ActionsTypes): CounterStateType => {
    switch (action.type) {
        case SET_START_VALUE:
            return {
                ...state, countValue: state.startValue
            }
        case CHANGE_COUNT_VALUE:
            return {
                ...state, countValue: action.value
            }
        case ON_CHANGE_INPUT: {
            if (action.title === "max") {
                return {
                    ...state, maxValue: +action.value
                }
            } else if (action.title === "min") {
                return {
                    ...state, startValue: +action.value
                }
            } else return state
        }
        case CHECKED_INCORRECT_VALUE:
            if (state.maxValue === state.startValue
                || state.maxValue < state.startValue
                || state.maxValue < 0
                || state.startValue < 0) {
                return {...state, countValue: "incorrect value"}
            } else {
                return {...state, countValue: "enter values and press set"}
            }
        default:
            return state
    }


}

export const setStartValueAC = (): SetStartValueAcType => {
    return {type: SET_START_VALUE}
}
export const changeCountValueAC = (value: number): ChangeCountValueAcType => {
    return {type: CHANGE_COUNT_VALUE, value}
}
export const onChangeInputAC = (value: string, title: string): OnChangeInputAcType => {
    return {type: "ON_CHANGE_INPUT", value, title}
}
export const checkedIncorrectValueAC = (): CheckedIncorrectValue => {
    return {type: "CHECKED_INCORRECT_VALUE"}
}

export default counterReducer;
import React from "react";
import s from "./Button.module.scss"
import {CounterStateType} from "../../App";

type ButtonTypeProps = {
    name: string
    counterState: CounterStateType
    setStateBtn?: () => void
}

export const Button = (props: ButtonTypeProps) => {

    function saveStateToLC<T> (key: string, state: T) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

    function setAndSave() {
        saveStateToLC ("value", {maxValue: props.counterState.maxValue, startValue: props.counterState.startValue});
        if(props.setStateBtn) props.setStateBtn();
    }

    return (
        <>
            <button
                className={s.btn}
                onClick={setAndSave}
                disabled={props.counterState.countValue === "incorrect value"}>
                {props.name}
            </button>
        </>
    );
}
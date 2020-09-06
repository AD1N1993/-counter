import React from "react";
import s from "./Counter.module.scss"
import {CounterStateType} from "../App";
import {Button} from "../common/Button/Button";


type CountValueTypeProps = {
    counterState: CounterStateType
    resetCountValue: (value: number) => void
}

export const Counter = (props: CountValueTypeProps) => {
    let completed = props.counterState.countValue === props.counterState.maxValue
        || props.counterState.countValue === "incorrect value"

    let disabledInc = props.counterState.countValue === props.counterState.maxValue
        || props.counterState.countValue === "enter values and press set"
        || props.counterState.countValue === "incorrect value"

    let disabledReset = props.counterState.countValue === 0
        || props.counterState.countValue === props.counterState.startValue
        || props.counterState.countValue === "enter values and press set"
        || props.counterState.countValue === "incorrect value"

    const inc = () => {
        let newCountValue = props.counterState.countValue;
        if (typeof (newCountValue) === "number") props.resetCountValue(newCountValue + 1);
    }
    const reset = () => {
        props.resetCountValue(props.counterState.startValue);
    }
    return (
        <div className={s.wrapper}>
            <div className={s.display}>
                <span className={`${s.value} ${completed ? s.completed : "" || completed ? s.completed : ""}`}>
                    {props.counterState.countValue}
                </span>
            </div>
            <div className={s.tools}>
                <Button name={"inc"} onClick={inc} disabled={disabledInc}/>
                <Button name={"reset"} onClick={reset} disabled={disabledReset}/>
            </div>
        </div>
    );
}
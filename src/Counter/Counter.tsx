import React from "react";
import s from "./Counter.module.scss"
import {Button} from "./Button/Button";
import {CounterStateType} from "../App";

type CountValueTypeProps = {
    counterState: CounterStateType
    setCountValue: (value: number) => void
}

export const Counter = (props: CountValueTypeProps) => {

    const inc = () => {
        let newCountValue = props.counterState.countValue;
        if(typeof (newCountValue) ==="number") props.setCountValue(newCountValue + 1);
    }
    const reset = () => {
        props.setCountValue(props.counterState.startValue);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.display}>
                <span className={`${s.value} ${props.counterState.countValue === props.counterState.maxValue ? s.completed : ""}`}>
                    {props.counterState.countValue}
                </span>
            </div>
            <div className={s.tools}>
                <Button name={"inc"}
                        countValue={props.counterState.countValue}
                        setStateBtn={inc}
                        maxValue={props.counterState.maxValue}
                />
                <Button name={"reset"}
                        countValue={props.counterState.countValue}
                        setStateBtn={reset}
                />
            </div>
        </div>
    );
}
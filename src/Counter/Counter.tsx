import React from "react";
import s from "./Counter.module.scss"
import {Button} from "./Button/Button";

type CountValueTypeProps = {
    countValue: number
    setCountValue: (value: number) => void
}

export const Counter = (props: CountValueTypeProps) => {

    const inc = () => {
        let newCountValue = props.countValue;
        props.setCountValue(newCountValue + 1);
    }
    const reset = () => {
        props.setCountValue(0);
    }
    return (
        <div className={s.wrapper}>
            <div className={s.display}>
                <span className={`${s.value} ${props.countValue === 5 ? s.completed : ""}`}>
                    {props.countValue}
                </span>
            </div>
            <div className={s.tools}>
                <Button name={"inc"} countValue={props.countValue} setStateBtn={inc}/>
                <Button name={"reset"} countValue={props.countValue} setStateBtn={reset}/>
            </div>
        </div>
    );
}
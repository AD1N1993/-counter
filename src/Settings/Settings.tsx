import React, {ChangeEvent} from "react";
import s from "./Settings.module.scss"
import {Button} from "./Button/Button";
import {CounterStateType} from "../App";

type CountValueTypeProps = {
    counterState: CounterStateType
    setStartValue: () => void
    onChangeInputMaxValue: (inputValue: string) => void
    onChangeInputStartValue: (inputValue: string) => void

}

export const Settings = (props: CountValueTypeProps) => {

    const onChangeInputMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeInputMaxValue(e.currentTarget.value)

    }
    const onChangeInputStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeInputStartValue(e.currentTarget.value)
    }
    const setStartValue = () => {
        props.setStartValue();
    }

    return (
        <div className={s.wrapper}>
            <div className={s.display}>
                <label className={s.label}>max value:
                    <input className={`${s.input} 
                                       ${props.counterState.maxValue <= 0 ? s.error : ""}
                                       ${props.counterState.maxValue <= props.counterState.startValue ? s.error : ""}
                                       `}
                           type="number"
                           value={props.counterState.maxValue}
                           onChange={onChangeInputMaxValue}
                    />
                </label>
                <label className={s.label}>start value:
                    <input className={`${s.input} 
                                       ${props.counterState.startValue < 0 ? s.error : ""} 
                                       ${props.counterState.maxValue < 0 ? s.error : ""}
                                       ${props.counterState.maxValue <= props.counterState.startValue ? s.error : ""}`}
                           type="number"
                           value={props.counterState.startValue}
                           onChange={onChangeInputStartValue}
                    />
                </label>
            </div>
            <div className={s.tools}>
                <Button name={"set"} counterState={props.counterState} setStateBtn={setStartValue}/>
            </div>
        </div>
    );
}
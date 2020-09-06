import React from "react";
import s from "./Settings.module.scss"
import {CounterStateType} from "../App";
import {Button} from "../common/Button/Button";
import {InputText} from "../common/InputText/InputText";

type CountValueTypeProps = {
    counterState: CounterStateType
    setStartValue: () => void
    onChangeInput: (inputValue: string, title: string) => void
}

export const Settings = (props: CountValueTypeProps) => {

    let disabledSet = props.counterState.countValue === "incorrect value"
        || props.counterState.countValue < props.counterState.maxValue
    let errorMax = props.counterState.maxValue <= 0
        || props.counterState.maxValue <= props.counterState.startValue
    let errorMin = props.counterState.startValue < 0
        || props.counterState.maxValue < 0
        || props.counterState.maxValue <= props.counterState.startValue

    const onChangeInput = (inputValue: string, title: string) => {
        props.onChangeInput(inputValue, title)
    }

    function saveStateToLC<T>(key: string, state: T) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

    const setStartValue = () => {
        props.setStartValue();
        saveStateToLC("value", {maxValue: props.counterState.maxValue, startValue: props.counterState.startValue})
    }

    return (
        <div className={s.wrapper}>
            <div className={s.display}>
                <label className={s.label}>max value:
                    <InputText value={props.counterState.maxValue}
                               onChange={onChangeInput}
                               type={"number"}
                               error={errorMax}
                               title={"max"}
                    />
                </label>

                <label className={s.label}>start value:
                    <InputText value={props.counterState.startValue}
                               onChange={onChangeInput}
                               type={"number"}
                               error={errorMin}
                               title={"min"}
                    />
                </label>
            </div>
            <div className={s.tools}>
                <Button name={"set"} onClick={setStartValue} disabled={disabledSet}/>
            </div>
        </div>
    );
}
import React, {ChangeEvent} from "react";
import s from "./Settings.module.scss"
import {Button} from "./Button/Button";
import {CounterStateType} from "../App";

type CountValueTypeProps = {
    counterState: CounterStateType
    setCountValue: (value: number) => void
    set: () => void
    onChangeInputMaxValue:(inputValue:string) => void
    onChangeInputStartValue:(inputValue:string) => void

}

export const Settings = (props: CountValueTypeProps) => {



    const onChangeInputMaxValue = (e:ChangeEvent<HTMLInputElement>) => {
        props.onChangeInputMaxValue(e.currentTarget.value)
    }
    const onChangeInputStartValue = (e:ChangeEvent<HTMLInputElement>) => {
        props.onChangeInputStartValue(e.currentTarget.value)
    }
    const set = () => {
        props.set();
    }
    return (
        <div className={s.wrapper}>
            <div className={s.display}>
                <label className={s.label}>max value: <input className={s.input} type="number"
                                                             value={props.counterState.maxValue}
                                                             onChange={onChangeInputMaxValue}
                                                        />
                </label>
                <label className={s.label}>start value: <input className={s.input} type="number"
                                                               value={props.counterState.startValue}
                                                                onChange={onChangeInputStartValue}
                /></label>
            </div>
            <div className={s.tools}>
                <Button name={"set"} countValue={props.counterState.startValue} setStateBtn={set}/>

            </div>
        </div>
    );
}
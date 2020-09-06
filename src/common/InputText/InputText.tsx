import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./InputText.module.scss"

type InputTextTypeProps = {
    value: string | number
    onChange: (inputValue: string,title:string) => void
    actionEnter?: () => void;
    error?: boolean
    type: "text" | "number"
    title: "max"|"min"
}

export const InputText = (props: InputTextTypeProps) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.currentTarget.value;
        props.onChange(inputValue,props.title);
    }
    const actionEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if(props.actionEnter && e.key === 'Enter') props.actionEnter();
    }
    return (
        <>
            <input className={`${s.inputText} ${props.error && props.value !=="" ? s.error : ""}`}
                   type={props.type}
                   value={props.value}
                   onChange={onChange}
                   onKeyPress={actionEnter}
            />
            <span>{}</span>
        </>
    );
}
import React from "react";
import s from "./Button.module.scss"

type ButtonTypeProps = {
    name: string
    countValue: number | string
    setStateBtn: () => void
    maxValue?:number
}

export const Button = (props: ButtonTypeProps) => {

    return (
        <>
            <button
                className={s.btn}
                onClick={props.setStateBtn}
                disabled={(props.name === "inc" && props.countValue === props.maxValue)
                ||(props.name === "reset" && props.countValue === 0)
                    ||(props.countValue ==="enter values and press set")
                    ||(props.countValue ==="incorrect value")
                }>
                {props.name}
            </button>
        </>
    );
}
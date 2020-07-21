import React from "react";
import s from "./Button.module.scss"

type ButtonTypeProps = {
    name: string
    countValue: number
    setStateBtn: () => void
}

export const Button = (props: ButtonTypeProps) => {

    return (
        <>
            <button
                className={s.btn}
                onClick={props.setStateBtn}
                disabled={(props.name === "inc" && props.countValue === 5) ||(props.name === "reset" && props.countValue === 0) }>
                {props.name}
            </button>
        </>
    );
}
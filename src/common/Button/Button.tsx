import React from "react";
import s from "./Button.module.scss"

type ButtonTypeProps = {
    name: string
    onClick: () => void
    disabled: (boolean)
}

export const Button = (props:ButtonTypeProps)=> {

    const onClick = () =>{
        props.onClick();
    }

    return(
        <>
            <button onClick={onClick} disabled={props.disabled} className={s.btn}>
                {props.name}
            </button>
        </>
    );
}

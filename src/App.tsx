import React, {useEffect, useState} from 'react';
import './App.scss';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Settings/Settings";

export type CounterStateType = {
    countValue: number | "enter values and press set" | "incorrect value",
    maxValue: number,
    startValue: number
}
export type LcStateType = {
    maxValue: number
    startValue: number
}

function App() {

    function restoreState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
        return defaultState;
    }

    const state: LcStateType = restoreState<LcStateType>("value", {maxValue: 0, startValue: 0});

    let [counterState, setCounterState] = useState<CounterStateType>({
        countValue: "enter values and press set",
        maxValue: state.maxValue,
        startValue: state.startValue,
    })

    // useEffect(() => {
    //     checkedIncorrectValues();
    // }, [counterState.countValue])

    function changeCountValue(value: number) {
        counterState.countValue = value;
        setCounterState({...counterState})
    }

    function checkedIncorrectValues() {
        if (counterState.maxValue === counterState.startValue
            || counterState.maxValue < counterState.startValue
            || counterState.maxValue < 0
            || counterState.startValue < 0) {
            counterState.countValue = "incorrect value";
            debugger
            setCounterState({...counterState});
        }
    }


    //  function onChangeInput(value: string, title: string) {
    //     let copyState = {...counterState};
    //     console.log(copyState )
    //     if (title === "max") {
    //         copyState.maxValue = +value
    //     } else if (title === "min") {
    //         copyState.startValue = +value
    //     } else {
    //         alert("Get Error Title")
    //     }
    //     copyState.countValue = "enter values and press set";
    //     setCounterState(copyState)
    //     console.log(counterState);
    // }
    function onChangeInput(value: string, title: string) {
        if (title === "max") {
            counterState.maxValue = +value
        } else if (title === "min") {
            counterState.startValue = +value
        } else {
            alert("Get Error Title")
        }
        counterState.countValue = "enter values and press set";
        setCounterState({... counterState})
        checkedIncorrectValues();
    }


    function setStartValue() {
        counterState.countValue = counterState.startValue
        setCounterState({...counterState})
    }


    return (
        <div className="App">
            <Settings
                setStartValue={setStartValue}
                counterState={counterState}
                onChangeInput={onChangeInput}
            />
            <Counter
                counterState={counterState}
                resetCountValue={changeCountValue}
            />
        </div>
    );
}

export default App;

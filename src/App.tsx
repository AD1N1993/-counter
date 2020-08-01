import React, {useState} from 'react';
import './App.scss';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Settings/Settings";

export type CounterStateType = {
    countValue: number | "enter values and press set" | "incorrect value",
    maxValue: number,
    startValue: number
}
type LcStateType = {
    maxValue: number
    startValue: number
}

function App() {

    function restoreState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
        return defaultState;
    }

    const state: LcStateType = restoreState<LcStateType>("value", {maxValue: 0, startValue:0});


    let [counterState, setCounterState] = useState<CounterStateType>({
        countValue: "enter values and press set",
        maxValue: state.maxValue,
        startValue: state.startValue,
    })

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
            setCounterState({...counterState});
        }
    }

    function onChangeInputMaxValue(value: string) {
        counterState.maxValue = +value
        counterState.countValue = "enter values and press set";
        setCounterState({...counterState})
        checkedIncorrectValues();
    }

    function onChangeInputStartValue(value: string) {
        counterState.startValue = +value
        counterState.countValue = "enter values and press set";
        setCounterState({...counterState})
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
                onChangeInputMaxValue={onChangeInputMaxValue}
                onChangeInputStartValue={onChangeInputStartValue}
            />
            <Counter
                counterState={counterState}
                resetCountValue={changeCountValue}
            />
        </div>
    );
}

export default App;

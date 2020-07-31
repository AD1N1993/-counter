import React, {useState} from 'react';
import './App.scss';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Settings/Settings";

export type CounterStateType = {
    countValue: number | "enter values and press set",
    maxValue: number,
    startValue: number
}


function App() {
    let [counterState, setCounterState] = useState<CounterStateType>({
        countValue: "enter values and press set",
        maxValue: 5,
        startValue: 0,
    })

    function changeCountValue(value: number) {
        counterState.countValue = value;
        setCounterState({...counterState})
    }

    function onChangeInputMaxValue(value: string) {
        counterState.maxValue = +value
        setCounterState({...counterState})
        counterState.countValue = "enter values and press set";
        setCounterState({...counterState})
    }

    function onChangeInputStartValue(value: string) {
        counterState.startValue = +value
        setCounterState({...counterState})
        counterState.countValue = "enter values and press set";
        setCounterState({...counterState})
    }

    function setStartValue() {
        counterState.countValue = counterState.startValue
        setCounterState({...counterState})
    }


    return (
        <div className="App">
            <Settings
                setCountValue={changeCountValue}
                set={setStartValue}
                counterState={counterState}
                onChangeInputMaxValue={onChangeInputMaxValue}
                onChangeInputStartValue={onChangeInputStartValue}
            />
            <Counter counterState={counterState}
                     setCountValue={changeCountValue}

            />

        </div>
    );
}

export default App;

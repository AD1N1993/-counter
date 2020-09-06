import React from 'react';
import './App.scss';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./state/store";
import {
    changeCountValueAC,
    checkedIncorrectValueAC,
    CounterStateType,
    onChangeInputAC,
    setStartValueAC
} from "./state/counterReducer";




function AppWithRedux() {

    const counterState = useSelector<RootStateType, CounterStateType>(state => state.counterState)
    const dispatch = useDispatch();

    function changeCountValue(value: number) {
        dispatch(changeCountValueAC(value));
    }

    function onChangeInput(value: string, title: string) {
       dispatch(onChangeInputAC(value, title));
       dispatch(checkedIncorrectValueAC())
    }

    function setStartValue() {
      dispatch(setStartValueAC())
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

export default AppWithRedux;

import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";

function App() {
    let [countValue, setCountValue] = useState<number>(0)
    function changeCountValue(value:number) {
        setCountValue(value)
    }
  return (
    <div className="App">
        <Counter countValue={countValue} setCountValue={changeCountValue}/>
    </div>
  );
}

export default App;

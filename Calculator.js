import React from "react";
import {useState} from "react";

import Result from "./components/result";
import Calculation from "./components/input";



export default function App() {

    const [enteredNumber, setEnteredNumber] = useState({
        first: 0,
        second: 0
    });

    const [chosenOperation, setChosenOperation] = useState("add")

    function changeFirstNumberHandler(event) {
        setEnteredNumber(function(prevNumber) {
            return {
                ...prevNumber,
                first: +event.target.value
            }
        })

    }

    function changeSecondNumberHandler(event) {
        setEnteredNumber(function(prevNumber) {
            return {
                ...prevNumber,
                second: +event.target.value
            }
        })
    }

    function updateOperation(event) {
        setChosenOperation(event.target.value);

    }

    let result = "";

    if (chosenOperation == "add") {
        result = enteredNumber.first + enteredNumber.second;
    } else if (chosenOperation == "subtract") {
        result = enteredNumber.first - enteredNumber.second;
    } else if (chosenOperation == "multiply") {
        result = enteredNumber.first * enteredNumber.second;
    } else {
        result = enteredNumber.first / enteredNumber.second;
    }

    return (
        <>
            <Result result={result} />
            <Calculation Change1={changeFirstNumberHandler} Change2={changeSecondNumberHandler} update={updateOperation} />
        </>
    )

}
import React from "react";
import { useState } from "react";
import Result from "./Result";

function GetClick()
{
    const [clicks, setclicks]= useState(0)
    const Click = ()=>{
        setclicks(clicks+1)
    }
    const Click1 = ()=>{
        setclicks(clicks+10)
    }
    const Click2 = ()=>{
        setclicks(clicks+100)
    }
    const Click3 = ()=>{
        setclicks(clicks-30)
    }
    return<div>
        <button type="Submit" onClick={Click}>+1</button>
        <button type="Submit" onClick={Click1}>+10</button>
        <button type="Submit" onClick={Click2}>+100</button>
        <button type="Submit" onClick={Click3}>-30</button>
        <Result clicks={clicks}/>
    </div>
}
export default GetClick
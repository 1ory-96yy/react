import React from "react";
import { useState } from "react";
import Result from "./Result";

function GetClick()
{
    const [clicks, setclicks]= useState(0)
    const Click = ()=>{
        setclicks(clicks+1)
    }
    return<div>
        <button type="Submit" onClick={Click}>+1</button>
        <Result clicks={clicks}/>
    </div>
}
export default GetClick
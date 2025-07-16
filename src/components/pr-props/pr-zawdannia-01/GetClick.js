import React from "react";
import { useState } from "react";

function GetClick()
{
    const [clicks, setclicks]= useState(0)
    const Click = ()=>{
        setclicks(clicks+1)
    }
    return<div>
        <button type="Submit" onClick={Click}>+1</button>
        <h1 name='cl'>{clicks}</h1>
    </div>
}
export default GetClick
import React from "react";

const d =new Date()
let time_y = d.getUTCFullYear()
let time_m = d.getUTCMonth()
let time_d = d.getUTCDay()
let time_h = d.getUTCHours()
let time_min = d.getUTCMinutes()
let time_sec = d.getUTCSeconds()


function Time (){
    return(<div>
        <h1>Curent date:{time_y}/{time_m+1}/{time_d+13}</h1>   
        <h1>Curent time: {time_h+2}:{time_min}:{time_sec}</h1>     
    </div>)
}
export default Time
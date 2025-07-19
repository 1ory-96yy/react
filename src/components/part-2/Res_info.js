import React from "react";
import { useState } from "react";
import "./Res_info.css"
function Res_Info(){
    const [name ,setname] = useState('alamy');
    const [adres ,setadres] = useState('Алея свободи 10');
    const [ocinka ,setocinka] = useState('5');
    const [cookType ,setcookType] = useState('Українська');
    return(<div>
        <img src="https://c7.alamy.com/comp/2H2DYDH/cozy-outdoor-restaurant-area-in-the-old-town-lviv-ukraine-05152019-2H2DYDH.jpg" alt ="error"/>
        <h1>{name}</h1>
        <p>Адрес: {adres}</p>
        <p>Оцінка: {ocinka}/5</p>
        <p>кухня: {cookType}</p>
        <h1>зміни можна внести тут</h1>
        <input type="text" value={name} onChange={e=>setname(e.target.value)}/>
        <input type="text" value={adres} onChange={e=>setadres(e.target.value)}/>
        <input type="number" max={5} min={1} value={ocinka} onChange={e=>setocinka(e.target.value)}/>
        <input type="text" class = "mb" value={cookType} onChange={e=>setcookType(e.target.value)}/>
        <p>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
    </div>)
}
export default Res_Info
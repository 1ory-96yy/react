import React from "react";
import './Info.css'

let tel = '+380 123 456 9870'
let Pib = 'Коваль Ігор Степанович'
let Email = 'qwerty@gmail.com'
let place_of_living = 'lviv'
let skils = 'HTML, CSS, C++, C#'


function Info(){
    return(<div>
        <img src = "https://ru.visafoto.com/img/foto-na-pasport-ochki.webp" alt = "error" />
        <h1>{Pib}</h1>
        <p>Telephone number: {tel}</p>
        <p>Email: {Email}</p>
        <p>City: {place_of_living}</p>
        <p>Skils: {skils}</p>
        
    </div>)
}
export default Info
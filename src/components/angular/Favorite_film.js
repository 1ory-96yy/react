import React from "react";
import './Favorite_film.css'

let name_f = "The Lion King"
let directed_by_autor = "Roger Allers"
let year = "2019"
let directed_by_studia = "Disney"


function Favorite_film() {
    return<div>
        <img src="https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg" alt = "error"></img>
        <h1>Name: {name_f}</h1>
        <p>Directed by: {directed_by_autor}</p>
        <p>Studio: {directed_by_studia}</p>
        <p>Year of creating: {year}</p>
    </div>
}

export default Favorite_film
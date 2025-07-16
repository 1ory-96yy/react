import React from "react"
import './Welcome.css'
function Welcome (){
    return (
        <div>
            <img src='https://habrastorage.org/r/w1560/files/b58/8ec/9ac/b588ec9acf7b41b196ba8dc9735eb943.png' alt='error'></img>
            <div class='plus'>
            <div>
                <h1>Плюси:</h1>
                <h2>1. Компонентна архітектура</h2>
                <h2>2. Віртуальний DOM</h2>
                <h2>3. Швидкість розробки</h2>
                <h2>4. Гарна інтеграція з іншими технологіями</h2>
                <h2>5. Активна спільнота та підтримка Facebook</h2>
            </div>
            <div class='minus'>
                <h1>Мінуси:</h1>
                <h2>1. Високий поріг входу для новачків</h2>
                <h2>2. Часта зміна підходів</h2>
                <h2>3. Неповний фреймворк</h2>
                <h2>4. Продуктивність може страждати без оптимізації</h2>
            </div>
            </div>
        </div>
    )
}
export default Welcome
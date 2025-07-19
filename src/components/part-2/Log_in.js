import React from "react"
import { useState } from "react"

function Log_in()
{
    const [login, Setlogin] = useState('')
    const [password, Setpassword] = useState('')

    return(<div>
        <input type="text" value={login} onChange={e=>Setlogin(e.target.value)}/>
        <input type="password" value={password} onChange={e=>Setpassword(e.target.value)}/>
        <p>Логін: {login}</p>
        <p>Пароль: {password}</p>
    </div>)
}
export default Log_in
import React from "react";
import { useState } from "react";

/*const [num1, Setnumber1] = useState('')
const [num2, Setnumber2] = useState('')
const [dija, Setdija] = useState('+')*/
let sum;

function Calculator(){
    const [num1, Setnumber1] = useState('')
    const [num2, Setnumber2] = useState('')
    const [dija, Setdija] = useState('+')
    
    
    const handleSubmit = e =>{
        e.preventDefault();
        result(num1, num2, dija);
    }
    
    return<div>
        <input type="text" value={num1} onChange={e=>Setnumber1(e.target.value)}/>
        <input type="text" value={num2} onChange={e=>Setnumber2(e.target.value)}/>
        <div>
            <label>
                <input type="radio" name="d" value='+' onChange={e=>Setdija(e.target.value)}/>
                +
            </label>
            <label>
                <input type="radio" name="d" value='-' onChange={e=>Setdija(e.target.value)}/>
                -
            </label>
            <label>
                <input type="radio" name="d" value='*' onChange={e=>Setdija(e.target.value)}/>
                *
            </label>
            <label>
                <input type="radio" name="d" value='/' onChange={e=>Setdija(e.target.value)}/>
                /
            </label>
        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        
    </div>
}

function result(num1, num2, dija){
    if (dija==='+')
        {
            sum=num1+num2
            alert (sum);
        }else if (dija==='-'){
            sum=num1-num2
            alert (sum);
        }else if (dija==='*'){
            sum=num1*num2
            alert (sum);
        }else if (dija==='/'&& num2!=0){     
                sum=num1/num2
                alert (sum);
        }else
            {
                alert ('error');
            }
}
export default Calculator
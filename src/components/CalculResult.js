import React from "react";
import { useState } from "react";

/*const [num1, Setnumber1] = useState('')
const [num2, Setnumber2] = useState('')
const [dija, Setdija] = useState('+')*/
let sum;

function Calculresult(){
    const [numA, SetnumberA] = useState('')
    const [numB, SetnumberB] = useState('')
    const [dija2, Setdija2] = useState('+')
    
    
    const handleSubmit = e =>{
        e.preventDefault();
        result2(numA, numB, dija2);
    }
    
    return<div>
        <input type="text" value={numA} onChange={e=>SetnumberA(e.target.value)}/>
        <input type="text" value={numB} onChange={e=>SetnumberB(e.target.value)}/>
        <select value={dija2} onChange={e=>Setdija2(e.target.value)}>
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
        </select>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        
    </div>
}

function result2(numA, numB, dija2){
    console.log(numA);
        console.log(numA);

            console.log(dija2);

    if (dija2==='+')
        {
            sum=numA+numB
            alert (sum);
        }else if (dija2==='-'){
            sum=numA-numB
            alert (sum);
        }else if (dija2==='*'){
            sum=numA*numB
            alert (sum);
        }else if (dija2==='/'&& numB!=0){     
                sum=numA/numB
                alert (sum);
        }else
            {
                alert ('error');
            }
}
export default Calculresult
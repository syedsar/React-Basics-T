import React from 'react'

function Calculator() {

    const add = (a, b)=>{
        let sum = a + b;
        return sum;
    }

    const substract = (a,b)=>{
        let subs = a -b ;
        return subs
    }

    const multiplication = (a, b)=>{
        let mult = a * b;
        return mult;
    }

    const division = (a, b)=>{
        let divi = a / b;
        return divi.toFixed(2);
    }
    return (
        <div>
            <ul>
                <li>Addition : {add(13,26)}</li>
                <li>Substraction : {substract(16,4)}</li>
                <li>Multiplication : {multiplication(17,3)}</li>
                <li>Division : {division(77,10)}</li>
            </ul>
        </div>
    )
}

export default Calculator

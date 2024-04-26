// Code Keypad Component Here
import React from "react";

function handleChange(){
    const Change = 'Entering password...'
console.log(Change)
}

function Keypad (){
    return (
        <div>
            <input onChange={handleChange} type="password"></input>
        </div>
    )
}

export default Keypad;
import React from "react";

let bentoBox = "🍱"

function BentoEmoji({min}){
    let num = Math.floor(min/10)
        for (let i = 1; i <= num; i++){
        bentoBox = bentoBox + "🍱"
    } 
    return(
        <small>{bentoBox}</small>
    )
}

export default BentoEmoji;
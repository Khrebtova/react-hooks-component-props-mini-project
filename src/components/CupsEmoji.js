import React from "react";

let cup = "☕️";
 
function CupsEmoji({min}){
    let num = Math.floor(min/5)
    for (let i = 1; i < num; i++){
        cup = cup + "☕️"
    } 
    return(
        <small>{cup}</small>
    )
}

export default CupsEmoji;
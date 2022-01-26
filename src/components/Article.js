import React from "react";

import CupsEmoji from "./CupsEmoji";
import BentoEmoji from "./BentoEmoji";

function Article({title, date = "January 1, 1970", minutes, preview}){
    console.log(minutes)
    return(
        <article>
            <h3>{title}</h3>
            <small>{date + "•"}</small>
            {minutes < 30 ? <CupsEmoji min ={minutes}/> : <BentoEmoji min ={minutes}/>}
            <small>{"" + minutes + "min read"}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;
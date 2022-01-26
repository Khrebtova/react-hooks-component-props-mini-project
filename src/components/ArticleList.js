import React from "react";
import Article from "./Article"

function ArticleList({posts}){
    const allArticles = posts.map((post) => {
        return (
            <Article key={post.id} title = {post.title} date={post.date} minutes={post.minutes} preview={post.preview} />
        )
    })
    return(
        <main>
            {allArticles}
        </main>
    )
}

export default ArticleList;
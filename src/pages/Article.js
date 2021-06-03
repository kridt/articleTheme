import { Link } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Article.css"

export default function Article(props) {
    
    var [article, setArticle] = useState({});


    useEffect(
        function() {
            axios(`https://article-api-christian.herokuapp.com/articles/${props.id}`)
            .then(response => setArticle(response))
        },[setArticle, props]
    )

    console.log(article);
    
    return (
        <article>
            <Link to="/">Home</Link>
            <h1>{article.data?.Title}</h1>
            <div className="articleImage">
                <img src={"https://article-api-christian.herokuapp.com" + article.data?.image.url} alt="" /> 
            </div>
            <p>{article.data?.content}</p>
        </article>
    )
}

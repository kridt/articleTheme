import { Link } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Article(props) {
    
    var [article, setArticle] = useState({});


    useEffect(
        function() {
            axios(`http://localhost:1337/articles/${props.id}`)
            .then(response => setArticle(response))
        },[setArticle, props]
    )

    console.log(article);
    
    return (
        <article>
            <Link to="/">Home</Link>
            <h1>{article.data?.Title}</h1>
            <div>
                <img src={"http://localhost:1337" + article.data?.image.url} alt="" /> 
            </div>
            <p>{article.data?.content}</p>
        </article>
    )
}

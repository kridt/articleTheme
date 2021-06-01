import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ArticleTemp from '../components/ArticleTemp'

export default function Index() {
    var [articles, setArticles] = useState({});
    useEffect(
        function() {
            axios(`http://localhost:1337/articles`)
            .then(response => setArticles(response.data))
        },[setArticles]
    )
        console.log(articles);
    return (
        <div>
            <h1>hello</h1>

            <section className="allArticles">
                {articles.map(function(article) {

                    return(
                        
                        <ArticleTemp title={article.Title} thumb="https://via.placeholder.com/212x156" />
                    )
                })}
            </section>

        </div>
    )
    
    
}
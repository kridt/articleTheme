import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ArticleTemp from '../components/ArticleTemp';

export default function Articles(props) {
    
    var [articles, setArticles] = useState({});


    useEffect(
        function() {
            axios(`http://localhost:1337/categories/${props.id}`)
            .then(response => setArticles(response))
        },[setArticles, props]
    )

    console.log(articles);
    
    return (
        <>
            <h1>{articles.data && articles.data.Name}</h1>

            <section className="allArticles">
                {articles.data && articles.data.articles?.map(function(article) {
                    var path = article.image.formats.thumbnail.url;
                    
                    return(
                        
                        <ArticleTemp id={article.id} key={article.id} title={article.Title} thumb={`http://localhost:1337${path}`}  />
                    )
                })}
            </section>

        </>
    )
}

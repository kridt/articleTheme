import { Link } from '@reach/router';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ArticleTemp from '../components/ArticleTemp';




export default function Index() {
    var [sections, setSections] = useState({});

    
    useEffect(
        function() {
            axios(`https://article-api-christian.herokuapp.com/sections `)
            .then(response => setSections(response))
        },[setSections]
    )


    var [allArticles, setAllArticles] = useState({});

    
    useEffect(
        function() {
            axios(`https://article-api-christian.herokuapp.com/articles `)
            .then(response => setAllArticles(response))
        },[setAllArticles]
    )
    

    console.log(allArticles);

    return (
        <div>
            <h1>hello</h1>
            
            <nav>
                <ul>
                    {sections && sections.data?.map(function(section) {
                        
                        return(
                            <li key={section.id} ><Link key={section.id} to={`category/${section.id}`}>{section.SectionName}</Link></li>
                        )
                    })}
                </ul>
            </nav>


           <section>
                    {allArticles && allArticles.data?.map(function(allArticle) {

                        console.log(allArticle);
                        return(

                            <ArticleTemp title={allArticle.Title}  thumb={"https://article-api-christian.herokuapp.com"+allArticle.image.formats.thumbnail.url}  id={allArticle.id} />
                        )
                    })}
           </section>

        </div>
    )
    
    
}
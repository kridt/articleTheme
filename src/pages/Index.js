import { Link } from '@reach/router';
import axios from 'axios'
import React, { useEffect, useState } from 'react'




export default function Index() {
    var [sections, setSections] = useState({});

    
    useEffect(
        function() {
            axios(`http://localhost:1337/sections `)
            .then(response => setSections(response))
        },[setSections]
    )
    
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
           {/*  <section className="allArticles">
                {articles && articles.data?.map(function(article) {
                    console.log(article);
                    return(
                        
                        <ArticleTemp key={article.id} title={article.Title} thumb={article.image.url} />
                    )
                })}
            </section> */}

        </div>
    )
    
    
}
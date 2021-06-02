import { Link } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Categories(props) {


    var [categories, setCategories] = useState({});


    useEffect(
        function() {
            axios(`http://localhost:1337/sections/${props.id}`)
            .then(response => setCategories(response))
        },[setCategories]
    )
        var categoryList = categories && categories.data;
    
        
    return (
        <>
         <h1>{categories.data && categories.data.SectionName} section</h1>

         <nav>
             <ul>
                 {categoryList?.categories.map(function(category) {
                     console.log(category);
                     return(
                         <li key={category.id}><Link key={category.id} to={`/articles/${category.id}`}>{category.Name}</Link></li>
                     )
                 })}
             </ul>
         </nav>
        </>
    )
}

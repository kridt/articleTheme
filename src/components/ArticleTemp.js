import React from 'react'
import {Link} from "@reach/router";


export default function ArticleTemp({title, thumb, id}) {
    
    
    return (
        <Link to={"/article/"+ id}>
            <h1>{title}</h1>
            <img src={thumb} alt={title} />
        </Link>
        
    )
}
 
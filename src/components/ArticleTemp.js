import React from 'react'

export default function ArticleTemp({title, thumb, }) {
    return (
        <div>
            <h1>{title}</h1>
            <img src={thumb} alt={title} />
        </div>
    )
}

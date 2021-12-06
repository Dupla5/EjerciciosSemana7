import React from 'react'

export const PostGridItem = ({ descripcion, fechaPublicacion, likes, dislikes }) => {
    return (
        <div className="post-grid-item">
            <p>{descripcion}</p>
            <p>{fechaPublicacion}</p>
            <button>{likes}</button>
            <button>{dislikes}</button>
        </div>
    )
}
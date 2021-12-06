import React from 'react'
import { useFetchPosts } from '../hooks/useFetchPosts';
import { PostGridItem } from './PostGridItem';

export const PostPublicados = () => {


    const {data,loading} = useFetchPosts();



    return (
        <>
            <div>
                {loading && <p>Cargando...</p>}
                {
                    data.map(post => (
                        <PostGridItem
                            key={post.id}
                            {...post}
                        />
                    ))
                }
            </div>
        </>
    )
}

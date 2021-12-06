import { useState, useEffect } from "react";
import { getPosts } from '../helpers/getPosts';

export const useFetchPosts = () => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getPosts()
            .then(post => {
                setState({
                    data: post,
                    loading: false
                })
            })
    }, []);

    return state;


};
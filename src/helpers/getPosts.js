export const getPosts = async () => {
    const URL = 'https://backend-dupla5.herokuapp.com/posts/get-all-posts';
    const resp = await fetch(URL);
    const { data } = await resp.json();

    const posts = data.map(post => {
        return {
            id: post.id_Post,
            descripcion: post.Descripcion,
            fechaPublicacion: post.FechaDePublicacion,
            likes: post.Contador_Likes,
            dislikes: post.Contador_Dislikes,
        }
    });
    return posts;
}
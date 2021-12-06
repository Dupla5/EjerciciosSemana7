import React, { useState } from 'react'
import { PostPublicados } from './PostPublicados';

export const ContenidoPrincipal = () => {

    const inputDescripcion = (e)=>{
        setDescripcion(e.target.value);
    }

    const [descripcion, setDescripcion] = useState();

    const agregarPost = (e) => {
        e.preventDefault();
        fetch('https://backend-dupla5.herokuapp.com/posts/add-post',
            {
                method: 'POST', // *GET, POST, PUT, DELETE, etc
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify({
                    descripcion: descripcion,
                    idUsuario: 1,
                })
            })
            .then((data) => {
                    return data.json();
                
            }
            ).then(({ data }) => {
                if (data === 'Post hecho correctamente') {
                    alert('Se ha publicado correctamente correctamente');
                    console.log(data);

                } else {
                    alert("Publicacion fallida");
                }

            })
            .catch((err) => { console.log(err) })
    }
    

    return (
        <>
            <div id="subtitle"><h3>Publicaciones</h3></div>
            
            <div id="add-post">
                <div>
                    <form id="formulario" onSubmit = {agregarPost}>
                        <legend>Escribe un post</legend>
                        <textarea name="post" rows="6" cols="80" onChange={inputDescripcion} required></textarea>
                        <input type="submit" value="Postear" />
                    </form>
                </div>
            </div>

            <div id="post-publicados">
                <PostPublicados />
            </div>

        </>
    )
}

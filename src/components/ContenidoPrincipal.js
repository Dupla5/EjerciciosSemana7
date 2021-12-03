import React, { useState } from 'react'

export const ContenidoPrincipal = () => {

    const inputDescripcion = (e)=>{
        setDescripcion(e.target.value);
    }

    const [descripcion, setDescripcion] = useState();

    const agregarPost = (e) => {
        e.preventDefault();
        console.log(descripcion);
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

                } else {
                    alert("Publicacion fallida");
                }

            })
            .catch((err) => { console.log(err) })
    }
    

    return (
        <>
            <h3>Publicaciones</h3>
            <div id="add-post">
                <div>
                    <form id="formulario" onSubmit = {agregarPost}>
                        <legend>Escribe un post</legend>
                        <textarea name="post" rows="6" cols="50" onChange={inputDescripcion} required></textarea>
                        <input type="submit" value="Postear" />
                    </form>
                </div>
            </div>

        </>
    )
}

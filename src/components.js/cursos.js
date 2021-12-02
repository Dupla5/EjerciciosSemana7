import React, {Fragment, useState} from 'react';

const Cursos = () => {


    const [datos, setDatos] = useState({
        nombre_curso: '',
        lugar_curso: '',
        fecha_curso: ''

    })

    const handleInputChange = (event) => {
        
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
const enviarDatos = (event) => {
    event.preventDefault()
    console.log('enviando datos del curso...' + datos.nombre_curso + ' ' + datos.lugar_curso + ' '+ datos.fecha_curso)
}

return (
    <>
        <h1>Nuevo Curso</h1>
        <form className="row" onSubmit={enviarDatos}>
            <div className="col-md-3">
                <input type="text" placeholder="Nombre de curso" className="form-control" onChange={handleInputChange} name="nombre_curso"></input>
            </div>
            <div className="col-md-3">
                <input type="text" placeholder="Lugar donde se realizó" className="form-control" onChange={handleInputChange} name="lugar_curso"></input>
            </div>
            <div className="col-md-3">
                <input type="date" placeholder="Fecha de comienzo" className="form-control" onChange={handleInputChange} name="fecha_curso"></input>
            </div>
            
               <button type="submit" className="btn btn-primary">SAVE</button>
            <div className="col-md-3">
                <input type="date" id="start" className="form-control" value="2018-07-22" min="2018-01-01" max="2018-12-31"></input>
            </div>
        </form>
        <ul>
            <li>{datos.nombre_curso}</li>
            <li>{datos.lugar_curso}</li>
            <li>{datos.fecha_curso}</li>
        </ul>
    </>
);
}

export default Cursos;
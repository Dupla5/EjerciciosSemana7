
import React, {useState} from 'react';


const App = () => {


  const [datos, setDatos] = useState({
      nombre_curso: '',
      lugar_curso: '',
      fecha_inicio: '',
      fecha_fin: ''

  })

  const handleInputChange = (event) => {
      
      setDatos({
          ...datos,
          [event.target.name] : event.target.value
      })
  }
const enviarDatos = (event) => {
  event.preventDefault()
  // eslint-disable-next-line
  console.log('DATOS DE CURSO \n' +'Nombre: '+ datos.nombre_curso + '\n' + 'Lugar: '+datos.lugar_curso + '\n'+ 'Fecha de inicio: '+ datos.fecha_inicio + '\n'+ 'Fecha de Finalización: '+datos.fecha_fin)
}

return (
  <>
     
      <div className="segment">
      <h1>Nuevo Curso</h1>
      </div>
    
      <form  onSubmit={enviarDatos}>
          
          <label >
              <input type="text" placeholder="Nombre del curso:" onChange={handleInputChange} name="nombre_curso"></input>
              </label>
          
          <label >
              <input type="text" placeholder="Lugar donde se realizó:"  onChange={handleInputChange} name="lugar_curso"></input>
              </label>
         
          <label >
              <input type="date" placeholder="Fecha de comienzo:" value="2021-12-02" onChange={handleInputChange} name="fecha_inicio"></input>
              </label>
        
          <label >
              <input type="date" placeholder="Fecha de finalización:" value="2021-12-02" onChange={handleInputChange} name="fecha_fin"></input>
              </label>       
          <button type="submit" className="red">SAVE</button>
        
      </form>
   

   
 

  </>
);
}

export default App;

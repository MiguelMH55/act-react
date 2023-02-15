import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import { Fragment } from 'react';



function Form() {
  const [Nombre, setNombre]     = useState('');
  const [Apellido, setApellido] = useState('');
  const [Estado, setEstado]     = useState([]);

  function agregarUser(e){
    e.preventDefault();
    
    let usuario = {
      Nombre:   Nombre,
      Apellido: Apellido
    }
    
    setEstado([...Estado, usuario]);
  }
  // const  mostrarUsuario = () =>{
  //   Estado.map(item =>(
  //     <li key={item.Nombre}>{item.Nombre} - {item.Apellido}</li>
  //   ))
  // }

  return (
    
    <Fragment>
    <form action="" onSubmit={(e) => agregarUser(e)}>
      <label>Nombre</label>
      <br />
      <input onChange={(e) => setNombre(e.target.value)} name="Nombre" id="Nombre" type="text" />
      <br />
      <br />
      <label>Apellido</label>
      <br />
      <input onChange={(e) => setApellido(e.target.value)} name="Apellido" id="Apellido" type="text" />
      <br />
      <br />
      <input type="submit" value="Aceptar" />
      
    </form>
    <div>
      <h1>Lista de datos</h1>
      <ul>
      { 
      
       Estado.map(item => (
        <li key={item.Nombre}> {item.Nombre +" "+ item.Apellido} </li>
       ))
        
      }
      </ul>
    </div>
    </Fragment>
    
  )
}
export default Form
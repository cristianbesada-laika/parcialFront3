import './App.css';
import Card from "./components/Card";
import { useState } from 'react';

function App() {
  const [usuario, setUsuario]= useState({
    nombre: "",
    autor: "",
  })
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState(false)

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (usuario.nombre.trim().length > 2 && usuario.autor.length > 5) {
      setEnviado(true)
      setError(false)
    } else {
      setError(true)
      setEnviado(false)
    }
  }

  return (
    <>
    <div className="App">
      <h1>Autores</h1>
      <form onSubmit={onSubmitForm} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <label>Ingresa tu nombre</label>
        <input type="text" onChange={(event) => setUsuario({...usuario, nombre: event.target.value})}/>

        <label>Ingresa tu autor favorito</label>
        <input type="text" onChange={(event) => setUsuario({...usuario, autor: event.target.value})}/>

        <button type='submit'>Enviar</button>
          {enviado && <Card usuario={usuario}/>}
          {error && <h3 style={{color: 'red'}}>“Por favor chequea que la información sea correcta”.</h3>}
      </form>
    </div>
    </>
  );
}

export default App;

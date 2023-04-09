
import React, { useState } from 'react';
import "./Contacto.css"
import Card from "./Card/Card";

/*  validacion  */

  const handleChange = (e, propiedad) => {
    setdatos({ ...datos, [propiedad]: e.target.value });
  };

function Contacto() {

  const [datos, setdatos] = useState({
    
  });

  const handleChange = (e, propiedad) => {
    setdatos({ ...datos, [propiedad]: e.target.value });
  };
  
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogged, setIsLogged] = useState(false);



  const handleSubmit = (event) => {
    event.preventDefault();
    const nombreinvalido = datos.nombre.length > 3;
    const emailInvalida = datos.email.length > 3;

    if (!nombreinvalido || !emailInvalida) {
      setError(true);
      if (!nombreinvalido && !emailInvalida) {
      } else {
        setErrorMessage("POR FAVOR CHEQUEAR QUE LA INFORMACION SEA CORRECTA");
      }
      return;
    }
    setIsLogged(true);
    console.log("data: ", datos);
  }

  return (
    <div className='Container-Contacto'>
      <h1 className='quiero'>Quiero que me contacten!</h1>

    <form className='form' onSubmit={handleSubmit}>
      
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          placeholder="Escribe tu Nombre"
          onChange={(event) => setNombre(event.target.value)}
          />
      
    
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Escribe tu Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          />
     
     
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          placeholder="Escribe un Mensaje"
          value={mensaje}
          onChange={(event) => setMensaje(event.target.value)}
          ></textarea>
      
      <button className='enviardatos' type="submit">Enviar</button>
      {error &&
          errorMessage.includes(
            "POR FAVOR CHEQUEAR QUE LA INFORMACION SEA CORRECTA"
          ) && (
            <span
              style={{
                color: "red",
                fontSize: "1.0rem",
                textAlign: "center",
              }}
            >
              {errorMessage}
            </span>
          )}
    </form>

    {isLogged && (
        <Card
          email={datos.email}
          nombre={datos.nombre} 
          
        />
      )}




      </div>
  );
}

export default Contacto;
import React from "react";
import "../hojas-de-estilo/Boton.css"

//en vez de utilizar props uso desestructuracion,en vez de pasarle props.texto//
function Boton({texto, esBotonDeClick, manejarClick}){
  return(
    <button
    className={ esBotonDeClick ? "boton-click" : "boton-reiniciar" } 
    onClick={manejarClick}>
      {texto}
    </button>
  );
}
export default Boton;
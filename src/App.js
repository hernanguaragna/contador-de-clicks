import './App.css';
import Boton from './componentes/Boton';
//import abaco from "./imagenes/abaco.jpg"
import Contador from './componentes/Contador';
import {useState} from "react";

function App() {

    const [numClicks, setnumClicks] = useState(0);
    const manejarClick = () => {
      setnumClicks(numClicks + 1);
    }
    const reiniciarContador = () => {
      setnumClicks(0);
    }

  return (
    <div className="App">
      <div className='imagen-logo-contenedor'>
        <img
        className='contador-logo'
        //src={abaco}
        alt="Contador Imagen" />

      </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks} />
        <Boton
          texto = "Click"
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        <Boton
         texto = "Reiniciar"
         esBotonDeClick={false}
         manejarClick={reiniciarContador} />
        


      </div>
      
    </div>
  );
}

export default App;

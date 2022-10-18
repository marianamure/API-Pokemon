import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ComponenteApi from "./Componentes/ComponenteApi/ComponenteApi";



/* 
Inicializar proyecto: npm start
Detener proyecto: Ctrl +C
*/

class App extends React.Component {
  render(){
    return(
      <div className= "container justify-content-center align-items-center">
        <ComponenteApi/>
      </div>
    );

  }

}

export default App;

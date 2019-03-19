import React, { Component } from 'react';
import Navegador from './Components/navegador';
import Contenido from './Components/Contenido';
import MenuLateral from './Components/MenuLateral';
import './App.css';
import './dashboard.css';

class App extends Component {
  
  render() {
    return (
     <React.Fragment>
       <Navegador/>
       <div className="container-fluid">
       <div className="row">
       <MenuLateral/>
       <Contenido/>
       </div>
       </div>
       </React.Fragment>
    );
  }
}

export default App;

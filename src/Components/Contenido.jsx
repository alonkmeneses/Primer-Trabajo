import React, { Component } from "react";
import { ListaPersona } from '../Service/PersonaService';

class Contenido extends Component{
    state = {
      Datos:ListaPersona(),
    };
    render() {
      if(this.state.Datos.length===0)
      {
          return(<h2 id="vacio" className="text">Lista de Personas Vacio:  {this.state.Datos.length}<br/><br/>
          <button id="btn" onClick={this.handlerAgregar} className="btn btn-success">Agregar Persona</button></h2>
          );

      }
      return (
            <div  role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <h3 className="container">Lista de Personas </h3>
            <h3 className="container">Total: {this.state.Datos.length}</h3>
            <br/>
            <div className="table-responsive container">
            <button onClick={this.handlerAgregar} className="btn btn-info">Agregar Persona</button>
            <br/>
            <br/>
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>Identificador</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Deporte</th>
                  <th>Municipio</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              {this.state.Datos.map(persona=>(<tbody className="">    
              <tr>
                <td  key={persona.id}>{ persona.id} </td>
                <td>{persona.Nombre}</td>
                <td>{persona.Apellido}</td>
                <td>{persona.Deporte}</td>
                <td>{persona.Municipio}</td>
                <td><button onClick={()=>this.handlerdelete(persona)} className="btn btn-warning pull-rigth btn-sx">Eliminar</button></td>
              </tr>
              </tbody>))}
            </table>

          </div>
        </div>
        );
    }

  handlerdelete=(persona)=>{
    const Datos= this.state.Datos.filter(p=>p.id!==persona.id);
    this.setState({Datos})
    console.log(persona);

  };

  handlerAgregar=()=>{
      const Datos= this.state.Datos;
      const newPersona= {id:Math.random()*100,Nombre:'Persona Nueva',Apellido:"Persona Nueva",Deporte:"Futbol",Municipio:"Jinotepe"};
      Datos.push(newPersona);
      this.setState({Datos});
  }
}



export default Contenido;
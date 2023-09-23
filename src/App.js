import React, { Component } from 'react';
import './App.css';
import Tabla from './Tabla';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      telefono: '',
      tablaUsuarios: []
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    // Validación para campos que solo deben aceptar letras o números
    if ((name === 'nombre' || name === 'apellidoPaterno' || name === 'apellidoMaterno') && !/^[a-zA-Z]+$/.test(value)) {
      return;
    }
    if (name === 'telefono' && !/^\d+$/.test(value)) {
      return;
    }
    this.setState({
      [name]: value,
    });
  };

  handleSave = () => {
   
    const nuevoUsuario = {
      nombre: this.state.nombre,
      apellidoPaterno: this.state.apellidoPaterno,
      apellidoMaterno: this.state.apellidoMaterno,
      telefono: this.state.telefono,
    };
  
    // Agregar el nuevo usuario al arreglo tablaUsuarios
    this.setState((prevState) => ({
      tablaUsuarios: [...prevState.tablaUsuarios, nuevoUsuario],
    }));

    console.log('Datos guardados:', this.state);

    // Limpia los campos después de guardar
    this.setState({
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      telefono: '',
      
    });
  };

  handleCancel = () => {
  
    this.setState({
      tablaUsuarios: [],
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      telefono: '',
    });

    
  };

  render() {
    return (
      <div className="App">
        <h1>Formulario</h1>
        <form>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={this.state.nombre}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Apellido Paterno:</label>
            <input
              type="text"
              name="apellidoPaterno"
              value={this.state.apellidoPaterno}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Apellido Materno:</label>
            <input
              type="text"
              name="apellidoMaterno"
              value={this.state.apellidoMaterno}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Teléfono:</label>
            <input
              type="text"
              name="telefono"
              value={this.state.telefono}
              onChange={this.handleInputChange}
            />
          </div>
           <div></div>
          <div>
            <button type="button" onClick={this.handleSave}>Guardar</button>
            <button type="button" onClick={this.handleCancel}>Cancelar</button>
              <Tabla tablaUsuarios={this.state.tablaUsuarios} />
          </div>
        </form>
      </div>
    );
  }
}

export default App;

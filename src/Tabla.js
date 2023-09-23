import React from 'react';

function Tabla({ tablaUsuarios }) {
  return (
    <div>
      <h2>Tabla de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {tablaUsuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellidoPaterno}</td>
              <td>{usuario.apellidoMaterno}</td>
              <td>{usuario.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;

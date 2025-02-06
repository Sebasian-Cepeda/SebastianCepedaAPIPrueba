import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/usuarios')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:8080/usuarios/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error(error));
  };

  const updateUser = (id) => {
    const userToUpdate = users.find(user => user.id === id);
    if (userToUpdate) {
      navigate('/create', { state: { user: userToUpdate, isUpdate: true } });
    }
  };
  return (
    <div>
      <h2>Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Identificación</th>
            <th>Dirección</th>
            <th>TELEFONO</th>
            <th>CIUDAD</th>
            <th>ESTADO</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.identificacion}</td>
              <td>{user.direccion}</td>
              <td>{user.telefono}</td>
              <td>{user.ciudad}</td>
              <td>{user.estado ? 'Activo' : 'Inactivo'}</td>
              <td>
                <button onClick={() => updateUser(user.id)}>Actualizar</button>
                <button onClick={() => deleteUser(user.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;

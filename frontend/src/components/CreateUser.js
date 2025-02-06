import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function CreateUser() {
    const { state } = useLocation();
    const navigate = useNavigate();
    
    const [user, setUser] = useState({
      nombre: state?.user?.nombre || '',
      identificacion: state?.user?.identificacion || '',
      direccion: state?.user?.direccion || '',
      telefono: state?.user?.telefono || '',
      ciudad: state?.user?.ciudad || '',
      estado: state?.user?.estado !== undefined ? state.user.estado : true

    });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.nombre || !user.identificacion || !user.direccion || !user.telefono || !user.ciudad) {
      setError('Por favor, complete todos los campos');
      return;
    }

    setError(''); 

    const request = state?.isUpdate
      ? axios.put(`http://localhost:8080/usuarios/${state.user.id}`, user) // Actualizar
      : axios.post('http://localhost:8080/usuarios', user); // Crear

    request
      .then(response => {
        alert(state?.isUpdate ? 'Usuario actualizado' : 'Usuario creado');
        setUser({
          nombre: '',
          identificacion: '',
          direccion: '',
          telefono: '',
          ciudad: '',
          estado: true,
        });
        navigate('/');
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>
            {state?.isUpdate ? 'Actualizar Usuario' : 'Crear Usuario'}
        </h2>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={user.nombre}
          onChange={handleChange}
        />
        <label>Identificación:</label>
        <input
          type="text"
          name="identificacion"
          value={user.identificacion}
          onChange={handleChange}
        />
        <label>Dirección:</label>
        <input
          type="text"
          name="direccion"
          value={user.direccion}
          onChange={handleChange}
        />
        <label>Teléfono:</label>
        <input
          type="text"
          name="telefono"
          value={user.telefono}
          onChange={handleChange}
        />
        <label>Ciudad:</label>
        <input
          type="text"
          name="ciudad"
          value={user.ciudad}
          onChange={handleChange}
        />
        <label>Estado:</label>
        <select
          name="estado"
          value={user.estado}
          onChange={handleChange}
        >
          <option value={true}>Activo</option>
          <option value={false}>Inactivo</option>
        </select>
        <button type="submit" className="form-button">
          {state?.isUpdate ? 'Actualizar' : 'Crear'}
        </button>
      </form>

      {error && (
        <div className="error-message" style={{ color: 'red', marginTop: '1rem' }}>
          {error}
        </div>
      )}
    </div>
  );
}

export default CreateUser;
package com.example.juan.service;

import com.example.juan.model.Usuario;
import com.example.juan.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> getAllUsers() {
        return usuarioRepository.findAll();
    }

    public Usuario createUser(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public void deleteUser(Long id) {
        usuarioRepository.deleteById(id);
    }

    public Usuario updateUser(Long id, Usuario userDetails) {
        return usuarioRepository.findById(id)
                .map(usuario -> {
                    usuario.setNombre(userDetails.getNombre());
                    usuario.setIdentificacion(userDetails.getIdentificacion());
                    usuario.setDireccion(userDetails.getDireccion());
                    usuario.setTelefono(userDetails.getTelefono());
                    usuario.setCiudad(userDetails.getCiudad());
                    usuario.setEstado(userDetails.getEstado());
                    return usuarioRepository.save(usuario);
                })
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado con id " + id));
    }

}
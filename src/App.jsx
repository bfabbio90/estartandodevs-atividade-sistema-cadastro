import { useState, useEffect } from "react";
import Form from "./components/form/Form";
import UserList from './components/userList/UserList';
import "./App.css";

const carregarUsuarios = () => {
    const data = localStorage.getItem('usuariosCadastrados');
    return data ? JSON.parse(data) : [];
};

export default function App() {
  const [usuarios, setUsuarios] = useState(carregarUsuarios);
  const [modoEdicao, setModoEdicao] = useState(null);
  const [usuarioEdicao, setUsuarioEdicao] = useState(null);
  const [termoBusca, setTermoBusca] = useState(''); 

  useEffect(() => {
    localStorage.setItem('usuariosCadastrados', JSON.stringify(usuarios));
  }, [usuarios]);

  const handleAddUsuario = (novoUsuario) => {
    if (modoEdicao !== null) {
      const listaAtualizada = usuarios.map((u, i) =>
        i === modoEdicao ? novoUsuario : u
      );
      setUsuarios(listaAtualizada);
      setModoEdicao(null); 
      setUsuarioEdicao(null);
    } else {
      setUsuarios([...usuarios, novoUsuario]);
    }
  };

  const handleRemoverUsuario = (index) => {
    setUsuarios(usuarios.filter((_, i) => i !== index));
    if (modoEdicao === index) {
      setModoEdicao(null);
      setUsuarioEdicao(null);
    }
  };

  const handleEditarUsuario = (index) => {
    setModoEdicao(index);
    setUsuarioEdicao(usuarios[index]);
  };

  return (
    <div className="app-container">
      <h1>Sistema de Cadastro de Usuários</h1>

      <p>Total de Usuários Cadastrados: <strong>{usuarios.length}</strong></p>

      <Form
        onSubmit={handleAddUsuario}
        usuarios={usuarios}
        modoEdicao={modoEdicao}
        usuarioEdicao={usuarioEdicao}
      />
      
      <div className="busca-container">
        <input 
          type="text" 
          placeholder="Buscar usuário por nome..."
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
        />
      </div>

      <UserList
        usuarios={usuarios}
        onRemover={handleRemoverUsuario}
        onEditar={handleEditarUsuario}
        termoBusca={termoBusca} 
      />
    </div>
  );
}
import UserItem from "../userItem/UserItem";

export default function UserList({ usuarios, onRemover, onEditar, termoBusca }) {
  const usuariosFiltrados = usuarios.filter(
    (usuario) =>
      usuario &&
      usuario.nome.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <ul className="listaUsuarios">
      {usuariosFiltrados.length > 0 ? (
        usuariosFiltrados.map((usuario, index) => (
          <UserItem
            key={index}
            usuario={usuario}
            onRemover={() => onRemover(index)}
            onEditar={() => onEditar(index)}
          />
        ))
      ) : (
        <li>Nenhum usuário encontrado</li>
      )}
    </ul>
  );
}

import UserItem from "../userItem/UserItem";

export default function UserList({ usuarios, onRemover, onEditar }) {
  return (
    <ul className="listaUsuarios">
      {usuarios.map((usuario, index) => (
        usuario && (
          <UserItem
            key={index} 
            usuario={usuario}
            onRemover={() => onRemover(index)}
            onEditar={() => onEditar(index)}
          />
        )
      ))}
    </ul>
  );
}

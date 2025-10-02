import UsuarioItem from "./UsuarioItem";

export default function ListaUsuarios({ usuarios, onRemover, onEditar }) {
  return (
    <ul className="listaUsuarios">
      {usuarios.map((usuario, item) => (
        <UsuarioItem
          key={item}
          usuario={usuario}
          onRemover={() => onRemover(item)}
          onEditar={() => onEditar(item)}
        />
      ))}
    </ul>
  );
}

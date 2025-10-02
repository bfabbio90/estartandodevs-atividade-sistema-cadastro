export default function UserItem({ usuario, onRemover, onEditar }) {
  if (!usuario) return null;

  return (
    <li className="usuarioItem">
      <span>
        {usuario.nome} ({usuario.email}) - {usuario.idade} anos - {usuario.cidade}
      </span>
      <div>
        <button onClick={onEditar} className="btnEditar">Editar</button>
        <button onClick={onRemover} className="btnRemover">Remover</button>
      </div>
    </li>
  );
}
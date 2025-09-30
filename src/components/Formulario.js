import { useState, useEffect } from "react";

export default function Formulario({
  onSubmit,
  usuarios,
  modoEdicao,
  usuarioEdicao,
}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (usuarioEdicao) {
      setNome(usuarioEdicao.nome);
      setEmail(usuarioEdicao.email);
      setIdade(usuarioEdicao.idade);
      setCidade(usuarioEdicao.cidade);
    }
  }, [usuarioEdicao]);

  const validar = () => {
    if (!nome || !email || !idade || !cidade) {
      return "Preencha todos os campos.";
    }
    if (!email.includes("@")) {
      return "Digite um email válido.";
    }
    if (usuarios.some((u) => u.email === email) && modoEdicao === null) {
      return "Email já cadastrado.";
    }
    if (isNaN(idade) || Number(idade) <= 0) {
      return "Idade deve ser maior que 0.";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroMsg = validar();
    if (erroMsg) {
      setErro(erroMsg);
      return;
    }

    const novoUsuario = { nome, email, idade: Number(idade), cidade };
    onSubmit(novoUsuario);

    setNome("");
    setEmail("");
    setIdade("");
    setCidade("");
    setErro("");
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />

      <button type="submit">
        {modoEdicao !== null ? "Salvar Alterações" : "Cadastrar"}
      </button>

      {erro && <p className="erro">{erro}</p>}
    </form>
  );
}
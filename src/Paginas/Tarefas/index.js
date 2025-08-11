import { Navigate, useNavigate } from "react-router-dom";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import { use, useEffect, useState } from "react";
import { deletarUsuario } from "../../servicos/usuarios";
import { listarTarefas } from "../../servicos/tarefas";

function Tarefas() {
  const navigate = useNavigate();
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    listarTarefas(setTarefas);
  }, []);

  const redirecionarParaNovaTarefa = () => {
    navigate("/tarefas/novo");
  };

  const excluirUsuario = async (id) => {
    await deletarUsuario(id);

    window.location.reload();
  };

  return (
    <div>
      <Cabecalho />
      <section className="container mt-3" id="tarefas">
        <div className="d-flex justify-content-between">
          <h1>Tarefas Cadastradas</h1>

          <div className="align-self-center">
            <button
              className="btn btn-primary"
              onClick={redirecionarParaNovaTarefa}
            >
              Nova Tarefa
            </button>
          </div>
        </div>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Titulo</th>
              <th>Data de Criação</th>
              <th>Data de Conclusão</th>
              <th>Prioridade</th>
              <th>Status</th>
              <th>Projeto</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {tarefas.map((tarefa) => (
              <tr key={tarefa.id}>
                <td>{tarefa.id}</td>
                <td>{tarefa.titulo}</td>
                <td>{tarefa.dataCriacao}</td>
                <td>{tarefa.dataConclusao}</td>
                <td>{tarefa.prioridade}</td>
                <td>{tarefa.status}</td>
                <td>{tarefa.projeto.nome}</td>
                <td>
                  <div className="btn-group">
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate(`/tarefas/${tarefa.id}`)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => excluirUsuario(tarefa.id)}
                    >
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Rodape />
    </div>
  );
}

export default Tarefas;
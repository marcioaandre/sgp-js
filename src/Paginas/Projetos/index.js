import { useNavigate } from "react-router-dom";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import { useEffect, useState } from "react";
import { listarProjetos } from "../../servicos/projetos";

function Projetos() {
  const navigate = useNavigate();
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    listarProjetos(setProjetos);
  }, []);

  const redirecionarParaNovoProjeto = () => {
    navigate("/projetos/novo");
  };

  return (
    <>
      <Cabecalho />
      <section className="container mt-3" id="projetos">
        <div className="d-flex justify-content-between">
          <h1>Projetos Cadastrados</h1>
          <div className="align-self-center">
            <button
              className="btn btn-primary"
              onClick={redirecionarParaNovoProjeto}
            >
              Novo Projeto
            </button>
          </div>
        </div>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Responsável</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {projetos.map((projeto) => (
              <tr key={projeto.id}>
                <td>{projeto.id}</td>
                <td>{projeto.nome}</td>
                <td>{projeto.descricao}</td>
                <td>{projeto.responsavel.nome}</td>
           
                <td>
                  <div className="btn-group">
                    <button className="btn btn-primary" onClick={() => {}}>
                      Editar
                    </button>
                    <button className="btn btn-danger" onClick={() => {}}>
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
    </>
  );
}

export default Projetos;
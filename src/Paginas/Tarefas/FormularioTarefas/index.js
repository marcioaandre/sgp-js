import { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscarUsuarioPeloId, listarUsuarios } from "../../../servicos/usuarios";
import { atualizarTarefa, cadastrarTarefa } from "../../../servicos/tarefas";
import Cabecalho from "../../../componentes/Cabecalho";
import Rodape from "../../../componentes/Rodape";

function FormularioTarefas() {
    const { id } = useParams();
    const [usuarios, setUsuarios] = useState([]);
    const [projetos, setProjetos] = useState([]);
    useEffect(() => {
        if (id) {
            buscarUsuarioPeloId(
                id,
                setTitulo,
                setDataCriacao,
                setDataConclusao,
                setPrioridade,
                setStatus,
                setProjeto
            );
        }
        listarUsuarios(setUsuarios);
    }, []);

    const [titulo, setTitulo] = useState("");
    const [dataCriacao, setDataCriacao] = useState("");
    const [dataConclusao, setDataConclusao] = useState("");
    const [atribuirPara, setAtribuirPara] = useState("");
    const [prioridade, setPrioridade] = useState("");
    const [status, setStatus] = useState("");
    const [projeto, setProjeto] = useState("");

    const enviarFormulario = async (e) => {
        e.preventDefault();
        const tarefa = {
            titulo,
            dataCriacao,
            dataConclusao,
            prioridade,
            status,
            projeto,
        };

        if (id) {
            await atualizarTarefa(id, tarefa, navigate);
        } else {
            await cadastrarTarefa(tarefa, navigate);
        }
    };

    const navigate = useNavigate();

    const cancelarFormulario = () => {
        navigate("/tarefas");
    };

    return (
        <>
            <Cabecalho />

            <section className="container mt-3" id="nova-tarefa">
                <h1>Dados da Tarefa</h1>
                <form className="row g-3" onSubmit={enviarFormulario}>
                    <div className="col-12">
                        <label htmlFor="titulo">Titulo</label>
                        <input
                            type="text"
                            className="form-control"
                            id="projeto"
                            placeholder="Digite o título da tarefa"
                            value={projeto}
                            onChange={(e) => setProjeto(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-4 col-12">
                        <label htmlFor="dataCriacao" className="form-label">
                            Data de Criação
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="dataCriacao"
                            value={dataCriacao}
                            onChange={(e) => setDataCriacao(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-4 col-12">
                        <label htmlFor="dataConclusao" className="form-label">
                            Data de Conclusão
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="dataConclusao"
                            value={dataConclusao}
                            onChange={(e) => setDataConclusao(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4 col-12">
                        <label htmlFor="atribuirPara" className="form-label">
                            Atribuir para:
                        </label>
                        <select
                            id="atribuirPara"
                            className="form-select"
                            value={atribuirPara}
                            onChange={(e) => setAtribuirPara(e.target.value)}
                            required
                        >
                            <option disabled value="">
                                Escolha a opção...
                            </option>
                            {usuarios.length === 0 ? (
                                <option disabled value="">Nenhum usuário cadastrado</option>
                            ) : (
                                usuarios.map((usuario) => (
                                    <option key={usuario.id} value={usuario.id}>
                                        {usuario.nome} ({usuario.email})
                                    </option>
                                ))
                            )}
                        </select>
                    </div>
                    <div className="col-md-4 col-12">
                        <label htmlFor="prioridade" className="form-label">
                            Prioridade:
                        </label>
                        <select
                            id="Prioridade"
                            className="form-select"
                            value={prioridade}
                            onChange={(e) => setPrioridade(e.target.value)}
                            required
                        >
                            <option disabled value="">
                                Escolha uma opção...
                            </option>
                            <option value={"BAIXA"}>Baixa</option>
                            <option value={"MEDIA"}>Média</option>
                            <option value={"ALTA"}>Alta</option>
                        </select>
                    </div>
                    <div className="col-md-4 col-12">
                        <label htmlFor="status" className="form-label">
                            Status:
                        </label>
                        <select
                            id="status"
                            className="form-select"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                        >
                            <option disabled value="">
                                Escolha uma opção...
                            </option>
                            <option value={"PENDENTE"}>Pendente</option>
                            <option value={"FAZENDO"}>Fazendo</option>
                            <option value={"CONCLUIDO"}>Concluido</option>
                        </select>
                    </div>
                    <div className="col-md-4 col-12">
                        <label htmlFor="Projeto" className="form-label">
                            Projeto:
                        </label>
                        <select
                            id="projeto"
                            className="form-select"
                            value={projeto}
                            onChange={(e) => setProjeto(e.target.value)}
                            required
                        >
                            <option disabled value="">
                                Escolha uma opção...
                            </option>
                            {projetos.length === 0 ? (
                                <option disabled value="">Nenhum projeto cadastrado</option>
                            ) : (
                                projetos.map((projeto) => (
                                    <option key={projeto.id} value={projeto.id}>
                                        {projeto.titulo}
                                    </option>
                                ))
                            )}
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Salvar
                        </button>
                        <button
                            className="btn btn-outline-primary ms-2"
                            onClick={cancelarFormulario}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </section>

            <Rodape />
        </>
    );
}

export default FormularioTarefas;
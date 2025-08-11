import { useState, useEffect } from "react";
import { listarUsuarios } from "../../../servicos/usuarios";
import Cabecalho from "../../../componentes/Cabecalho";
import Rodape from "../../../componentes/Rodape";
import { useNavigate, useParams } from "react-router-dom";
import { atualizarProjeto, buscarProjetoPeloId, cadastrarProjeto } from "../../../servicos/projetos";

function FormularioProjeto() {
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            buscarProjetoPeloId(id, setNome, setDescricao, setResponsavel);
        }
        listarUsuarios(setUsuarios);
    }, []);

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [responsavel, setResponsavel] = useState("");
    const [usuarios, setUsuarios] = useState([]);

    const enviarFormulario = async (e) => {
        e.preventDefault();
        const dataCriacao = new Date().toISOString().slice(0, 10);
        const projeto = {
            nome,
            descricao,
            responsavel: responsavel ? { id: Number(responsavel) } : undefined,
            dataCriacao
        };

        if (id) {
            await atualizarProjeto(id, projeto, navigate);
        } else {
            await cadastrarProjeto(projeto, navigate);
        }
    }

    const navigate = useNavigate();

    const cancelarFormulario = () => {
        navigate("/projetos");
    };


    return (
        <>
            <Cabecalho />
            <section className="container mt-3" id="novo-projeto">
                <h1>Dados do Projeto</h1>
                <form className="row g-3" onSubmit={enviarFormulario}>
                    <div className="col-md-12">
                        <label htmlFor="nome" className="form-label">
                            Nome
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            placeholder="Digite o nome do projeto"
                            defaultValue={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="descricao" className="form-label">
                            Descrição
                        </label>
                        <textarea
                            className="form-control"
                            id="descricao"
                            placeholder="Descreva o projeto"
                            rows={5}
                            defaultValue={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                        />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="responsavel" className="form-label">
                            Responsável
                        </label>
                        <select
                            id="responsavel"
                            className="form-select"
                            value={responsavel}
                            onChange={(e) => setResponsavel(e.target.value)}
                            required
                        >
                            <option disabled value="">
                                Escolha um usuário...
                            </option>
                            {usuarios.length === 0 ? (
                                <option disabled value="">Nenhum usuário cadastrado</option>
                            ) : (
                                usuarios.map((usuario) => (
                                    <option key={usuario.id} value={usuario.id}>
                                        {usuario.nome}
                                    </option>
                                ))
                            )}
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Salvar
                        </button>
                        <button className="btn btn-outline-primary ms-2" onClick={cancelarFormulario}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </section>
            <Rodape />
        </>
    );
}

export default FormularioProjeto;
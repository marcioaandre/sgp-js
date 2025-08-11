import { api } from "./api";

export async function listarProjetos(setProjetos) {
    await api
        .get("/projetos")
        .then((response) => setProjetos(response.data.content))
        .catch((error) => console.error(error));
}

export async function buscarProjetoPeloId(
    id,
    setNome,
    setDescricao,
    setResponsavel
) {
    await api
        .get(`/projetos/${id}`)
        .then((response) => {
            setNome(response.data.nome);
            setDescricao(response.data.descricao);
            setResponsavel(response.data.responsavel);
        })
        .catch((error) => console.error(error));
}

export async function cadastrarProjeto(projeto, navigate) {
    await api
        .post("/projetos", projeto)
        .then(() => navigate("/projetos"))
        .catch((error) => console.error(error));
}

export async function atualizarProjeto(id, projeto, navigate) {
    await api
        .put(`/projetos/${id}`, projeto)
        .then(() => navigate("/projetos"))
        .catch((error) => console.error(error));
}

export async function deletarProjeto(id) {
    await api
        .delete(`projeto/${id}`)
        .then(() => { })
        .catch((error) => console.error(error));
}
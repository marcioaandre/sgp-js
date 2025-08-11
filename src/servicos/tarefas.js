import { api } from "./api";

export async function listarTarefas(setTarefas) {
    await api
        .get("/tarefas")
        .then((response) => setTarefas(response.data.content))
        .catch((error) => console.error(error));
}

export async function buscarTarefaPeloId(
    id,
    setTitulo,
    setDataCriacao,
    setDataConclusao,
    setPrioridade,
    setStatus,
    setProjeto
) {
    await api
        .get(`/tarefas/${id}`)
        .then((response) => {
            setTitulo(response.data.titulo);
            setDataCriacao(response.data.dataCriacao);
            setDataConclusao(response.data.dataConclusao);
            setPrioridade(response.data.prioridade);
            setStatus(response.data.status);
            setProjeto(response.data.projeto);
        })
        .catch((error) => console.error(error));
}

export async function cadastrarTarefa(tarefa, navigate) {
    await api
        .post("/tarefas", tarefa)
        .then(() => navigate("/tarefas"))
        .catch((error) => console.error(error));
}

export async function atualizarTarefa(id, tarefa, navigate) {
    await api
        .put(`/tarefas/${id}`, tarefa)
        .then(() => navigate("/tarefas"))
        .catch((error) => console.error(error));
}

export async function deletarTarefa(id) {
    await api
        .delete(`/tarefas/${id}`)
        .then(() => { })
        .catch((error) => console.error(error));
}
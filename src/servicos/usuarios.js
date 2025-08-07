import { api } from "./api";

export async function listarUsuarios(setUsuarios) {
    await api.get("/usuarios")
        .then((resposta) => setUsuarios(resposta.data.content))
        .catch((error) => console.error(error));
}

export async function buscarUsuarioPeloId(
    id,
    setNome,
    setCpf,
    setEmail,
    setSenha,
    setDataNascimento,
    setStatus
) {
    await api.get(`/usuarios/${id}`)
        .then((resposta) => {
            setNome(resposta.data.nome)
            setCpf(resposta.data.cpf)
            setEmail(resposta.data.email)
            setSenha(resposta.data.senha)
            setDataNascimento(resposta.data.dataNascimento)
            setStatus(resposta.data.status)
        })

        .catch((erro) => console.error(erro));
}

export async function cadastraUsuario(usuario, navigate) {
    await api.post("/usuarios", usuario)

        .then(() => navigate("/usuarios"))
        .catch((erro) => console.error(erro))

}

export async function atualizarUsuario(id, usuario, navigate) {
    await api.put(`/usuarios/${id}`, usuario)
        .then(() => navigate("/usuarios"))
        .catch((erro) => console.error(erro))

}

export async function deletarUsuario(id) {
    await api.delete(`/usuarios/${id}`)
        .then(() => { })
        .catch((erro) => console.error(erro))

}

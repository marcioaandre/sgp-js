import { api } from "./api";

export async function listarUsuarios(setUsuarios) {
    await api.get("/usuarios")
    .then((resposta) => setUsuarios(resposta.data))
    .catch((error) => console.error(error));
}

export async function buscarUsuarioPeloId(id, setUsuario){
    await api.get(`/usuarios/${id}`)
        .then((resposta) => setUsuario(resposta.data))
        .catch((erro) => console.error(erro));  
}

export async function cadastraUsuario(usuario){
    await api.post("/usuarios", usuario)
             
        .then(() => {})
        .catch((erro) => console.error(erro))

}

export async function atualizarUsuario(id, usuario){
    await api.put(`/usuarios/${id}` , usuario)
        .then(() => {})
        .catch((erro) => console.error(erro))

}

export async function deletarUsuario(id){
    await api.delete(`/usuarios/${id}`)
        .then(() => {})
        .catch((erro) => console.error(erro))

}

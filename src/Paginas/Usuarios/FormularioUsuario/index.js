import { useState } from "react";

function FormularioUsuario() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [DataNascimento, setDataNascimento] = useState("");
    const [status, setStatus] = useState("");


    return (
        <>
            {/* <Cabecalho /> */}
            <section className="container mt-3" id="novo-usuario">
                <h1>Ddos do Usuário</h1>

                <form className="row g-3" onSubmit={() => { }}>
                    <div className="col-md-6 col-12">
                        <label htmlFor="nome" className="form-label">CPF</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cpf"
                            placeholder="XXX.XXX.XXX-XX"
                            defaultValue={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            required
                        />
                        <div className="col-md-6 col-12">
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                placeholder="Digite seu Nome"
                                defaultValue={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                            <div className="col-md-6 col-12">
                                <label htmlFor="nome" className="form-label">Senha</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="senha"

                                    defaultValue={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    required
                                />
                                <div className="col-md-6 col-12">
                                    <label htmlFor="nome" className="form-label">Nascimento</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="datanascimento"
                                        defaultValue={DataNascimento}
                                        onChange={(e) => setDataNascimento(e.target.value)}
                                        required
                                    />
                                    <div className="col-md-6 col-12">
                                        <label htmlFor="status" className="form-label">Status</label>
                                        <select
                                            id="status"
                                            className="form-select"
                                            defaultValue={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                            required
                                        >
                                            <option disabled value="">Escolha uma opção</option>
                                            <option value={"ATIVO"}>Ativo</option>
                                            <option value={"INATIVO"}>Inativo</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <button type="submite" className="btn btn-primary">Salvar</button>
                                        <button className="btn btn-outline-primary" onClick={() =>{}}>Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            {/* <Rodape /> */}
        </>
    );
}

export default FormularioUsuario;
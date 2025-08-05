import { useEffect, useState } from "react";
import { listarUsuarios } from "../../servicos/usuarios";
import { useNavigate } from "react-router-dom";

function Usuarios() {
    const navigate = useNavigate()
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
            listarUsuarios(setUsuarios);
    }, []);       

    const redirecionarParaNovoUsuario = () => {
            navigate("/usuarios/novo");
    }

    return (
        <>

         
            <section className="container mt-3" id="usuarios">
                <div className="d-flex justify-content-between">
                    <h1>Usuários Cadastrados</h1>
                    <div className="align-self-center">
                        <button className="btn btn-primary" onClick={redirecionarParaNovoUsuario}>
                            Novo Usuário
                        </button>
                    </div>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Email</th>
                            <th>Idade</th>
                            <th>Status</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.nome}</td>
                                <td>{usuario.cpf}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.idade}</td>
                                <td>{usuario.status}</td>
                                <td>
                                    <div className="btn-group">
                                        <button className="btn btn-warning" onClick={() => { }}>
                                            Editar
                                        </button>
                                        <button className="btn btn-danger" onClick={() => { }}>
                                            Excluir
                                        </button>"
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </section>
                        
        </>
    );

}

export default Usuarios;
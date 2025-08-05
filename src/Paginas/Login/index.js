import logo from "../../assets/sgp_logo_vertical.png";
import "./login.css";

function Login() {
  return (
    <div className="bg-container">
      <div className="col-4 login-container">
        <div className="col-8">
          <img src={logo} alt="Sistema de gerenciamento de projetos" width="250px" />

          <div className="mb-2">
            <input type="email" className="form-control mb-1" id="email-input" placeholder="E-mail" />
          </div>

          <div className="mb-3">
            <input type="password" className="form-control" id="senha-input" placeholder="Senha" />
          </div>


          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="check-input" />
            <label className="form-ckeck-label" htmlFor="check-input">Mantenha-me conectado</label>
          </div>

          <button type="button" className="btn btn-primary mt-3 mb-5 w-50">Acessar</button>
        </div>
      </div>
    </div>
  )
}

export default Login;
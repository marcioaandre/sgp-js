import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Paginas/Login";
import Usuarios from "./Paginas/Usuarios";
import FormularioUsuario from "./Paginas/Usuarios/FormularioUsuario";
import Erro from "./Paginas/Erro"
import Projetos from "./Paginas/Projetos";
import FormularioProjeto from "./Paginas/Projetos/FormularioProjeto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/usuarios/novo' element={<FormularioUsuario />} />
        <Route path='/usuarios/:id' element={<FormularioUsuario />} />
        <Route path='*' element={<Erro />} />
        <Route path='/projetos/:id' element={<Projetos />} />
        <Route path='/projetos/novo' element={<FormularioProjeto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
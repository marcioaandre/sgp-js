import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Paginas/Login";
import Usuarios from "./Paginas/Usuarios";
import FormularioUsuario from "./Paginas/Usuarios/FormularioUsuario";
import Erro from "./Paginas/Erro"
import Projetos from "./Paginas/Projetos";
import FormularioProjeto from "./Paginas/Projetos/FormularioProjeto";
import Tarefas from "./Paginas/Tarefas";
import FormularioTarefas from "./Paginas/Tarefas/FormularioTarefas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/usuarios/novo' element={<FormularioUsuario />} />
        <Route path='/usuarios/:id' element={<FormularioUsuario />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path='/projetos/novo' element={<FormularioProjeto />} />
        <Route path='/projetos/:id' element={<FormularioProjeto />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="/tarefas/novo" element={<FormularioTarefas />} />
        <Route path="/tarefas/:id" element={<FormularioTarefas />} />
        <Route path='*' element={<Erro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Paginas/Login";
import Usuarios from "./Paginas/Usuarios";
import FormularioUsuario from "./Paginas/Usuarios/FormularioUsuario";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/usuarios/novo' element={<FormularioUsuario />} />
        <Route path='/usuarios/:id' element={<FormularioUsuario />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
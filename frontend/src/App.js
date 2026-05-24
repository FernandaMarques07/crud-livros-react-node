import "./App.css"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import MenuSuperior from "./components/MenuSuperior"
import InclusaoLivros from "./components/InclusaoLivros"
import ManutencaoLivros from "./components/ManutencaoLivros"
import ResumoLivros from "./components/ResumoLivros"

function App() {

  return (

    <BrowserRouter>

      <MenuSuperior />

      <div className="container">

        <Routes>

          <Route
            path="/"
            element={<InclusaoLivros />}
          />

          <Route
            path="/editar/:id"
            element={<InclusaoLivros />}
          />

          <Route
            path="/manutencao"
            element={<ManutencaoLivros />}
          />

          <Route
            path="/resumo"
            element={<ResumoLivros />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App
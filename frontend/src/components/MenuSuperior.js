import { Link } from "react-router-dom"

import "./MenuSuperior.css"

function MenuSuperior() {

    return (

        <nav className="menu">

            <Link to="/">
                Inclusão
            </Link>

            <Link to="/manutencao">
                Manutenção
            </Link>

            <Link to="/resumo">
                Resumo
            </Link>

        </nav>
    )
}

export default MenuSuperior
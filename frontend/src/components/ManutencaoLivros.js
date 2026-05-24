import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"

import api from "../config_axios"

import "./ListaLivros.css"

function ManutencaoLivros() {

    const [livros, setLivros] = useState([])

    const navigate = useNavigate()

    async function carregarLivros() {

        const response = await api.get("/livros")

        setLivros(response.data)
    }

    async function excluir(id) {

        await api.delete(`/livros/${id}`)

        carregarLivros()
    }

    function editar(id) {

        navigate(`/editar/${id}`)
    }

    useEffect(() => {

        carregarLivros()

    }, [])

    return (

        <div>

            <h2
                style={{
                    marginBottom: "20px"
                }}
            >
                Manutenção de Livros
            </h2>

            <div className="lista">

                {livros.map(livro => (

                    <div
                        className="card"
                        key={livro.id}
                    >

                        <img
                            src={livro.foto}
                            alt={livro.titulo}
                        />

                        <div className="card-body">

                            <h3>{livro.titulo}</h3>

                            <p>{livro.autor}</p>

                            <p>
                                R$ {livro.preco}
                            </p>

                            <button
                                className="btn-editar"
                                onClick={() =>
                                    editar(livro.id)
                                }
                            >
                                Editar
                            </button>

                            <button
                                className="btn-excluir"
                                onClick={() =>
                                    excluir(livro.id)
                                }
                            >
                                Excluir
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default ManutencaoLivros
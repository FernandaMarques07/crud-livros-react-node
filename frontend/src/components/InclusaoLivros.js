import {
    useEffect
} from "react"

import {
    useForm
} from "react-hook-form"

import {
    useNavigate,
    useParams
} from "react-router-dom"

import api from "../config_axios"

import "./Formulario.css"

function InclusaoLivros() {

    const navigate = useNavigate()

    const { id } = useParams()

    const {
        register,
        handleSubmit,
        reset,
        setValue
    } = useForm()

    async function salvar(data) {

        if (id) {

            await api.put(`/livros/${id}`, data)

            alert("Livro alterado")

        } else {

            await api.post("/livros", data)

            alert("Livro cadastrado")
        }

        reset()

        navigate("/manutencao")
    }

    async function carregarLivro() {

        if (!id) return

        const response = await api.get("/livros")

        const livro = response.data.find(
            item => item.id == id
        )

        if (!livro) return

        setValue("titulo", livro.titulo)

        setValue("autor", livro.autor)

        setValue("preco", livro.preco)

        setValue("foto", livro.foto)
    }

    useEffect(() => {

        carregarLivro()

    }, [])

    return (

        <form
            className="formulario"
            onSubmit={handleSubmit(salvar)}
        >

            <h2>

                {id
                    ? "Editar Livro"
                    : "Cadastro de Livros"
                }

            </h2>

            <input
                placeholder="Título"
                {...register("titulo")}
            />

            <input
                placeholder="Autor"
                {...register("autor")}
            />

            <input
                placeholder="Preço"
                type="number"
                step="0.01"
                {...register("preco")}
            />

            <input
                placeholder="URL da foto"
                {...register("foto")}
            />

            <button type="submit">

                {id
                    ? "Salvar Alterações"
                    : "Cadastrar"
                }

            </button>

        </form>
    )
}

export default InclusaoLivros
const express = require("express")

const router = express.Router()

const db = require("./data/db_config")


// LISTAR
router.get("/", async (req, res) => {

    const livros = await db("livros")

    res.json(livros)
})


// INSERIR
router.post("/", async (req, res) => {

    const { titulo, autor, preco, foto } = req.body

    await db("livros").insert({
        titulo,
        autor,
        preco,
        foto
    })

    res.status(201).json({
        mensagem: "Livro inserido"
    })
})


// EXCLUIR
router.delete("/:id", async (req, res) => {

    const { id } = req.params

    await db("livros")
        .where({ id })
        .del()

    res.json({
        mensagem: "Livro removido"
    })
})


// ALTERAR PREÇO
router.put("/:id", async (req, res) => {

    const { id } = req.params

    const {
        titulo,
        autor,
        preco,
        foto
    } = req.body

    await db("livros")
        .where({ id })
        .update({
            titulo,
            autor,
            preco,
            foto
        })

    res.json({
        mensagem: "Livro alterado"
    })
})


// RESUMO
router.get("/dados/grafico", async (req, res) => {

    const dados = await db("livros")
        .select("autor")
        .count("* as total")
        .groupBy("autor")

    res.json(dados)
})

router.get("/resumo/geral", async (req, res) => {

    const livros = await db("livros")

    const totalLivros = livros.length

    const totalPreco = livros.reduce(
        (acc, livro) =>
            acc + Number(livro.preco),
        0
    )

    const maiorPreco = Math.max(
        ...livros.map(livro =>
            Number(livro.preco)
        )
    )

    const precoMedio =
        totalLivros > 0
            ? totalPreco / totalLivros
            : 0

    res.json({
        totalLivros,
        totalPreco,
        maiorPreco,
        precoMedio
    })
})

module.exports = router
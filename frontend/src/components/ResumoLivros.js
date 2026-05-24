import { useEffect, useState } from "react"

import { Chart } from "react-google-charts"

import api from "../config_axios"

import "./Resumo.css"

function ResumoLivros() {

    const [dados, setDados] = useState([])

    const [resumo, setResumo] = useState({
        totalLivros: 0,
        totalPreco: 0,
        maiorPreco: 0,
        precoMedio: 0
    })

    async function carregarDados() {

        // gráfico
        const responseGrafico =
            await api.get("/livros/dados/grafico")

        const grafico = [
            ["Autor", "Quantidade"]
        ]

        responseGrafico.data.forEach(item => {

            grafico.push([
                item.autor,
                Number(item.total)
            ])
        })

        setDados(grafico)

        // resumo
        const responseResumo =
            await api.get("/livros/resumo/geral")

        setResumo(responseResumo.data)
    }

    useEffect(() => {

        carregarDados()

    }, [])

    return (

        <div>

            <div className="cards-resumo">

                <div className="card-resumo">

                    <h3>Total de Livros</h3>

                    <p>
                        {resumo.totalLivros}
                    </p>

                </div>

                <div className="card-resumo">

                    <h3>Total em Preços</h3>

                    <p>
                        R$
                        {" "}
                        {Number(
                            resumo.totalPreco
                        ).toFixed(2)}
                    </p>

                </div>

                <div className="card-resumo">

                    <h3>Maior Preço</h3>

                    <p>
                        R$
                        {" "}
                        {Number(
                            resumo.maiorPreco
                        ).toFixed(2)}
                    </p>

                </div>

                <div className="card-resumo">

                    <h3>Preço Médio</h3>

                    <p>
                        R$
                        {" "}
                        {Number(
                            resumo.precoMedio
                        ).toFixed(2)}
                    </p>

                </div>

            </div>

          <div className="resumo">

    <Chart
        chartType="BarChart"
        width="100%"
        height="500px"

        data={dados}

        options={{

            title: "Quantidade de livros por autor",

            backgroundColor: "#ffffff",

            chartArea: {
                width: "70%",
                height: "70%"
            },

            colors: ["#2563eb"],

            hAxis: {
                title: "Quantidade"
            },

            vAxis: {
                title: "Autores"
            },

            legend: {
                position: "none"
            },

            bars: "horizontal"
        }}
    />

</div>

        </div>
    )
}

export default ResumoLivros
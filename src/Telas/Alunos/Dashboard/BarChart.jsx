import React, { useEffect, useState } from "react";
import {Chart} from "react-google-charts";
import degrees from '../../../data/degrees.json'
import './BarChart.css'

function BarChart({chartData}){
    
    const options = {
        chart: {
            title: "Alunos por classe"
        },
        backgroundColor: "#292f36",
        bars: "horizontal"
    }

    const filter0 = chartData.filter(alunoTurma => alunoTurma.degreeId == 1 ).length
    const filter1 = chartData.filter(alunoTurma => alunoTurma.degreeId == 2 ).length
    const filter2 = chartData.filter(alunoTurma => alunoTurma.degreeId == 3 ).length
    const filter3 = chartData.filter(alunoTurma => alunoTurma.degreeId == 4 ).length
    const filter4 = chartData.filter(alunoTurma => alunoTurma.degreeId == 5 ).length
    const filter5 = chartData.filter(alunoTurma => alunoTurma.degreeId == 6 ).length
    const filter6 = chartData.filter(alunoTurma => alunoTurma.degreeId == 7 ).length
    const filter7 = chartData.filter(alunoTurma => alunoTurma.degreeId == 8 ).length
    const filter8 = chartData.filter(alunoTurma => alunoTurma.degreeId == 9 ).length
    const filter9 = chartData.filter(alunoTurma => alunoTurma.degreeId == 10 ).length
    const filter10 = chartData.filter(alunoTurma => alunoTurma.degreeId == 11 ).length
    const filter11 = chartData.filter(alunoTurma => alunoTurma.degreeId == 12 ).length
    const filter12 = chartData.filter(alunoTurma => alunoTurma.degreeId == 13 ).length

    const data = [
        ['Quantidade de alunos por classe', "Quantidade de alunos" ],
        [degrees[0].name, filter0],
        [degrees[1].name, filter1],
        [degrees[2].name, filter2],
        [degrees[3].name, filter3],
        [degrees[4].name, filter4],
        [degrees[5].name, filter5],
        [degrees[6].name, filter6],
        [degrees[7].name, filter7],
        [degrees[8].name, filter8],
        [degrees[9].name, filter9],
        [degrees[10].name, filter10],
        [degrees[11].name, filter11],
        [degrees[12].name, filter12],
    ]
    return(
        <>
            <Chart 
            chartType="Bar"
            width="100%"
            height="400px"
            data={data}
            options={options}
             />
        </>
    )
}

export default BarChart;
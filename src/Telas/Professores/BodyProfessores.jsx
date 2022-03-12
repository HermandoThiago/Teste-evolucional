import React, { useState } from "react";
import './BodyProfessores.css'
import relationships from '../../data/relationships.json'
import professores from '../../data/teachers.json'
import matters from '../../data/matters.json'
import classes from '../../data/classes.json'
import degrees from '../../data/degrees.json'

function BodyProfessores({DadosAlunos}){

    const [search, setSearch] = useState('')
    const [alunos, setAlunos] = useState(DadosAlunos)
    const [teachers, setTeachers] = useState(professores)
    const [relacoes, setRelacoes] = useState(relationships)
    const [materia, setMateria] = useState(matters)
    const [turma, setTurma] = useState(degrees)
    const [classe, setClasse] = useState(classes)

    const pesquisa = (e) => {
        setSearch(e.target.value)
    }

    const teachersName = teachers.filter(name => name.name )

    return(

        <>
            <main>
                <div className="pesquisa">
                    <h2>Pesquisar professores</h2>
                    <input 
                    placeholder="Pesquisar professores"
                    type="text"
                    onChange={pesquisa}
                    />
                </div>
                <div className="professores">
                    {
                        relacoes.map((relacao) => {

                            return(
                                <div className="box-professores">
                                    <h3 className="professor-name">{teachers[relacao.teacherId - 1].name}</h3>
                                    <p>Matéria: {materia[relacao.matterId - 1].name}</p>
                                    <h3 className="turmas">Turmas </h3>
                                    {
                                        relacao.degrees.map((degree) => {
                                            return(
                                                
                                                    <p className="turma">{turma[degree.degreeId - 1].name}</p>
                                                
                                            );
                                        })
                                    }
                                </div>
                            );

                        })

                    }
                </div>
            </main>
        </>

    );

}   

export default BodyProfessores;
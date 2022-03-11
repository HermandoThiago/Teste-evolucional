import React, { useEffect, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import './BodyAlunos.css';
import students from '../../../data/students.json';
import classes from '../../../data/classes.json';
import degrees from '../../../data/degrees.json';
import BarChart from "../../Dashboard/BarChart";

Modal.setAppElement("#root")

function BodyAlunos(){

    const [search, setSearch] = useState('')
    const [alunos, setAlunos] = useState(students)
    const [Degrees, setDegrees] = useState(degrees)
    const [Classes, setClasses] = useState(classes)
    const [id, setId] = useState('0')
    const [editName, setEditName] = useState('')
    const [editTurma, setEditTurma] = useState('')
    const [editClas, setEditClas] = useState('')
    const [modal, setModal] = useState(false)

    useEffect(() => {
        console.log(alunos[id])
    })
    const pesquisa = (e) => {
        setSearch(e.target.value);
    }

    const formatarEstudantes = () => {
        return alunos.map(aluno => ({
            ...aluno, degreeName: Degrees[aluno.degreeId - 1].name,
            className: Classes.classes[aluno.classId - 1].name
        }))
    }

    const bua = formatarEstudantes()

    const setarEdição = () => {
        
        let alunosNovo = [...alunos];
        const juncao = () => {
            return alunosNovo.map(aluno => ({
                ...aluno, degreeName: Degrees[aluno.degreeId - 1].name,
            className: Classes.classes[aluno.classId - 1].name
            }))
        }

        alunosNovo = [...juncao()]

        const dadosAntigos = juncao()[id -1]
        const dadosNovos = {name: editName, degreeName: editClas,className: editTurma}
        alunosNovo[id] = {...dadosAntigos, ...dadosNovos}
        setAlunos(alunosNovo)
        console.log(alunosNovo)
        setModal(false)
    }

    

    const filtroAlunos = bua.filter(aluno => 
        aluno.name.toLowerCase().includes(search.toLocaleLowerCase())
        ||
        aluno.degreeName.toLowerCase().includes(search.toLocaleLowerCase())
        ||
        aluno.className.toLowerCase().includes("Turma" + search.toLocaleLowerCase())
    )
    
    function removerAluno(id){
        let alunosRemovidos = alunos.filter( e => e.id != id );
        setAlunos(alunosRemovidos)
    }

    function editarAluno(id){
        setModal(true)
        setId(id - 1)
        console.log(id)
    }

    function generate(){
        for(let i = 0; i < 300; i++){
            gerarAlunos(i)
        }
    }

    function gerarAlunos(msg){

        setAlunos(oldList => [...oldList, {
            "id":parseInt(alunos[alunos.length - 1].id + parseInt(msg) + 1),
            "ra":alunos[alunos.length - 1].ra + parseInt(msg) + 1,
            "name":"Nome do aluno " + parseInt(alunos[alunos.length - 1].id + parseInt(msg) + 1),
            "degreeId": Math.floor(Math.random() * 13 + 1),
            "classId": Math.floor(Math.random() * 6 + 1)
        }]);
    
    }

    return(
        <main>
            <BarChart chartData={formatarEstudantes()} />
            <Modal
                className="modal"
                isOpen={modal}
            >
            <div className="box-modal">
                <label>Nome do aluno:</label>
                <input className="modal-input" type="text" placeholder={bua[id].name} value={bua[id].name} onChange={(text) => setEditName(text.target.value)}/>
                <label >Classe:</label>
                <input className="modal-input" type="text" placeholder={bua[id].degreeName} onChange={(text) => setEditClas(text.target.value)}/>
                <label>Turma:</label>
                <input className="modal-input" type="text" placeholder={bua[id].className} onChange={(text) => setEditTurma(text.target.value)}/>
                <button className="btn-modal" onClick={() => setarEdição()}>Editar aluno</button>
            </div>
            </Modal>
            <button className="btn-generate" onClick={() => generate()}>Gerar alunos</button>
            <div className="pesquisa">
                <h2>Pesquisar alunos</h2>
                <input 
                placeholder="Pesquisar alunos"
                type="text"
                onChange={pesquisa}
                />
            </div>
            <div className="alunos">
                {

                    filtroAlunos == '' ?

                    <p className="search-null">Nenhum aluno encontrado</p>
                    
                    :

                    filtroAlunos.map((aluno) => {
                        return(
                            <div className="aluno">
                                <h3 className="student-name">{aluno.name}</h3>
                                <p className="student-degree">{aluno.degreeName}</p>
                                <p className="student-name">Turma: {aluno.className}</p>
                                <button className="btn-editar" onClick={() => editarAluno(aluno.id)}>Editar</button>
                                <button className="btn-remover" onClick={() => removerAluno(aluno.id)}>Remover</button>
                            </div>
                        );
                    })
                }
            </div>
        </main>
    );

}

export default BodyAlunos;
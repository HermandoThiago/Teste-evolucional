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
    const [editTurma, setEditTurma] = useState(1)
    const [editClas, setEditClas] = useState(1)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        console.log(Degrees[editTurma - 1].id)
    })

    const pesquisa = (e) => {
        setSearch(e.target.value);
    }

    //const formatarEstudantes = () => {
      //  return alunos.map(aluno => ({
        //    ...aluno, degreeName: Degrees[aluno.degreeId - 1].name,
          //  className: Classes.classes[aluno.classId - 1].name
//        }))
  //  }

    const setarEdição = () => {
        
        const alunosNovo = [...alunos];
        const dadosAntigos = alunos[id]
        const dadosNovos = {name: editName, degreeId: editTurma,classId: parseInt(Classes.classes[editClas - 1].id) }
        alunosNovo[id] = {...dadosAntigos, ...dadosNovos}
        setAlunos(alunosNovo)
        setEditClas(1)
        setEditTurma(1)
        console.log(alunosNovo)
        setModal(false)
    }

    

    const filtroAlunos = alunos.filter(aluno => 
        aluno.name.toLowerCase().includes(search.toLocaleLowerCase())
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
            <BarChart chartData={alunos} />
            <Modal
                className="modal"
                isOpen={modal}
            >
            <div className="box-modal">
                <label>Nome do aluno:</label>
                <input className="modal-input" type="text" placeholder="Nome do aluno" onChange={(text) => setEditName(text.target.value)}/>
                <label >Classe:</label>
                <div className="custom-select">
                    <select onChange={(event) => setEditClas(event.target.value)}>
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="3">C</option>
                        <option value="4">D</option>
                        <option value="5">E</option>
                        <option value="6">F</option>
                    </select>
                </div>
                <label>Turma:</label>
                <div className="custom-select">
                    <select onChange={(text) => setEditTurma(text.target.value)}>
                        <option value="1">Ensino Fundamental</option>
                        <option value="2">1° ano do ensino médio</option>
                        <option value="3">2° ano ensino médio</option>
                        <option value="4">3° ano do ensino médio</option>
                        <option value="5">Cursinho</option>
                        <option value="6">4º ano do ensino fundamental</option>
                        <option value="7">5º ano do ensino fundamental</option>
                        <option value="8">6º ano do ensino fundamental</option>
                        <option value="9">7º ano do ensino fundamental</option>
                        <option value="10">8º ano do ensino fundamental</option>
                        <option value="11">9º ano do ensino fundamental</option>
                        <option value="12">Estudo em casa</option>
                        <option value="13">Outros</option>
                    </select>
                </div>
                <button className="btn-modal" onClick={() => setarEdição()}>Editar aluno</button>
                <button className="btn-moda-false" onClick={() => setModal(false)}>x</button>
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
                                <p className="student-degree">{Degrees[aluno.degreeId - 1].name}</p>
                                <p className="student-name">Classe: {Classes.classes[aluno.classId - 1].name}</p>
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
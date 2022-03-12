import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import BodyAlunos from './Telas/Alunos/BodyAlunos';
import BodyProfessores from './Telas/Professores/BodyProfessores'
import alunos from './data/students.json'

function App() {
  return (
    <Router className="App">
      <header >
        <div className="logo">
          <h1>Painel de controle evolucional</h1>
        </div>
        <nav>
          <Link style={{padding: 20}} to="/">Alunos</Link>
          <Link to="/professores">Professores</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<BodyAlunos DadosAlunos={alunos}/>}/>
        <Route path='/professores' element={<BodyProfessores DadosAlunos={alunos} />}/>
      </Routes>
    </Router>
  );
}

export default App;

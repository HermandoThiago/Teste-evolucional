import React from "react";
import './Header.css'

function Header(){

    return(
        <header >
            <div className="logo">
                <h1>Painel de controle evolucional</h1>
            </div>
            <nav>
                <ul className="desktop-menu">
                    <li><a href="">Alunos</a></li>
                    <li><a href="">Professores</a></li>
                </ul>
            </nav>
        </header>
    );

}

export default Header;
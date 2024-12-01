import logo from '../../assets/logo.png'
import lupa from '../../assets/lupa.png'
import { Link } from "react-router-dom";
import S from './header.modules.scss'

export default function header() {
    return (
        
        <header>
            <section className={S.boxlogo}>
                <img src={logo} alt="imagem de um livro" />
                <h1>Livros Vai na Web</h1>
            </section>

            <nav className={S.boxMenu}>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/doados">Livros Doados</Link></li>
                    <li><Link to="/queroDoar">Quero Doar</Link></li>
                </ul>
            </nav>

            <div>
                <input type="text" />
                <img src={lupa} alt="imagem de uma lupa" />
            </div>
        </header>
    )
}
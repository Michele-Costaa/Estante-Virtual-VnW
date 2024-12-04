import S from "./header.module.scss";
import logo from "../../assets/logo.png";
import lupa from "../../assets/lupa.png";
import { Link } from "react-router-dom";

export default function Header() {
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

      <div className={S.boxInput}>
        <input type="text" placeholder="O que voçe procura?"/>
        <img src={lupa} alt="icone de uma lupa" />
      </div>
    </header>
  );
}

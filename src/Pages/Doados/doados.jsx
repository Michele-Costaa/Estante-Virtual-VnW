import livro from "../../assets/O_protagonista.png";
import S from "./doados.module.scss";

export default function Doados() {
  return (
    <section className={S.boxDoados}>
      <h2>Livros Doados</h2>
      <section className={S.boxBooks}>
        <article>
          <img src={livro} alt="imagem do livro o protagonista" />
          <h3>O protagonista</h3>
          <p>Susane Andrade</p>
          <p>Ficção</p>
        </article>
        <article>
          <img src={livro} alt="imagem do livro o protagonista" />
          <h3>O protagonista</h3>
          <p>Susane Andrade</p>
          <p>Ficção</p>
        </article>
        <article>
          <img src={livro} alt="imagem do livro o protagonista" />
          <h3>O protagonista</h3>
          <p>Susane Andrade</p>
          <p>Ficção</p>
        </article>
        <article>
          <img src={livro} alt="imagem do livro o protagonista" />
          <h3>O protagonista</h3>
          <p>Susane Andrade</p>
          <p>Ficção</p>
        </article>
        <article>
          <img src={livro} alt="imagem do livro o protagonista" />
          <h3>O protagonista</h3>
          <p>Susane Andrade</p>
          <p>Ficção</p>
        </article>
        <article>
          <img src={livro} alt="imagem do livro o protagonista" />
          <h3>O protagonista</h3>
          <p>Susane Andrade</p>
          <p>Ficção</p>
        </article>
      </section>
    </section>
  );
}
import S from './footer.module.scss'
import face from '../../assets/facebook.png'
import insta from '../../assets/instagram.png'
import twitt from '../../assets/Twitter.png'
import linkedin from '../../assets/linkedin.png'
import youtube from '../../assets/youtube.png'

export default function footer() {
    return(
        <footer>
            <section className={S.boxSocial}>
                <h3>4002-8922</h3>
                <nav>
                    <a href=""><img src={face} alt="icone facebook" /></a>
                    <a href=""><img src={twitt} alt="icone twitter" /></a>
                    <a href=""><img src={youtube} alt="icone youtube" /></a>
                    <a href=""><img src={linkedin} alt="icone linkedin" /></a>
                    <a href=""><img src={insta} alt="icone instagram" /></a>
                </nav>
            </section>
            <section className={S.boxEnd}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}
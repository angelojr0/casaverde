import styles from './index.module.css'
import HeroImg from "../../images/hero-image.png"

export function AssinarNewsletter () {
    return (
        <div>
            <div>
                <img src={HeroImg} id={styles.imgHero} alt='Imagem de uma planta' />
            </div>
            <div id={styles.divNewsletter}>
                <h2>Sua casa com as </h2>
                <h1 className={styles.h1}>melhores plantas</h1>
                <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. 
                    Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>

                <form id="emailDiv">
                    <input type="email" placeholder="Insira seu e-mail" id={styles.emailInput} autoComplete="off"/>
                    <button type="submit"  id={styles.emailButton} >Assinar newsletter</button>
                </form>
            </div>
            
        </div>
    )
}
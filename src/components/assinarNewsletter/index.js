import styles from './index.module.css'

export function AssinarNewsletter () {
    return (
        <div className={styles.divNewsletter}>
            <h2>Sua casa com as </h2>
            <h1 className={styles.h1}>melhores plantas</h1>
            <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. 
                Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
        </div>
    )
}
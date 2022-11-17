import logo from '../../images/logo.svg'
import styles from './index.module.css'

export function Menu() {
    return (
      <header className={styles.Menu}>
        <nav className={styles.navBar}>
            <img src={logo} className={styles.logo} />
            <ul className={styles.navUl}>
                <li className={styles.navList}>
                    <a href='#' className={styles.navAnchor}> Como fazer</a>
                    /
                </li>
                <li className={styles.navList}>
                    <a href='#' className={styles.navAnchor}> Ofertas</a>
                    /
                </li>
                <li className={styles.navList}>
                    <a href='#' className={styles.navAnchor}> Depoimentos</a>
                    /
                </li>
                <li className={styles.navList}>
                    <a href='#' className={styles.navAnchor}> Videos</a>
                    /
                </li>
                <li className={styles.navList}>
                    <a href='#' className={styles.navAnchor}> Meu carrinho</a>
                    
                </li>
            </ul> 
        </nav>
      </header>
    );
  }
    
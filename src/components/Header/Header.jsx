import styles from "./styles.module.css"
import Logo from "../../assets/portfolio.png"

export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.img} src={Logo} />
            <div className={ styles.links }>
                <p className={styles.p}>Sobre</p>
                <p className={styles.p}>Stack</p>
                <p className={styles.p}>Projetos</p>
            </div>
            <button className={styles.button}>Contato</button>
        </header>
    )
}


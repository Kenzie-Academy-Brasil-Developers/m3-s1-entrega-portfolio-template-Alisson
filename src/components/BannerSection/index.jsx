import styles from "./styles.module.css"
import Banner from "../../assets/banner-img.png"

export const BannerSection = () => {
    return (
        <section className= {styles.section}>
            <div className={styles.bannerDiv}>
                <p className={styles.username}>JOSEDASILVA</p>
                <h1 className= {styles.bannerH1}>Bem vindo ao meu portfólio</h1>
                <p className={styles.userinfos}>Uma frase interessante sobre mim</p>
                <button>Saiba mais</button>
            </div>
            <img className={styles.img} src= {Banner} />
        </section>
    )

}
import styles from "./styles.module.css"
import Githubicon from "../../assets/git-icon.png"

export const Projects = () => {
    return (
        <section className= {styles.section}>
            <h1 className= {styles.h1}>Projetos</h1>
            <ul className={styles.ul}>
                <li className= {styles.li}>
                    <h3>Projeto 1</h3>
                    <p>Descrição do projeto</p>
                    <span>Saiba mais</span>
                    <img src= {Githubicon}/>
                </li>
                <li className= {styles.li}>
                    <h3>Projeto 2</h3>
                    <p>Descrição do projeto</p>
                    <span>Saiba mais</span>
                    <img src= {Githubicon}/>
                </li>
                <li className= {styles.li}>
                    <h3>Projeto 3</h3>
                    <p>Descrição do projeto</p>
                    <span>Saiba mais</span>
                    <img src= {Githubicon}/>
                </li>
                <li className= {styles.li}>
                    <h3>Projeto 4</h3>
                    <p>Descrição do projeto</p>
                    <span>Saiba mais</span>
                    <img src= {Githubicon}/>
                </li>
            </ul>
        </section>
    )
}
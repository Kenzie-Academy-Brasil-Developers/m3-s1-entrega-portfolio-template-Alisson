import styles from "./styles.module.css"
import Githubicon from "../../assets/git-icon.png"

export const Projects = ({ projects }) => {
    console.log(projects)
    const projectsList = projects.map(project =>
        <li className= {styles.li} key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span>Saiba mais</span>
            <img src= {Githubicon}/>
        </li>)

    return (
        <section className= {styles.section}>
            <h1 className= {styles.h1}>Projetos</h1>
            <ul className={styles.ul}>
               {projectsList}
            </ul>
        </section>
    )
}
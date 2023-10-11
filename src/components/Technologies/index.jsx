import styles from "./styles.module.css"
import HTMLicon from "../../assets/html-icon.png"
import CSSicon from "../../assets/css-icon.png"
import Javascripticon from "../../assets/js-icon.png"
import Reacticon from "../../assets/react-icon.png"

export const Technologies = ( technologies ) => {
    const array = technologies.technologies
    const technologiesList = array.map(tech => 
        <div className= {styles.tech} key={tech.name}>
            <img src= {tech.img} />
            <h4>{tech.name}</h4>
        </div>
    )

    return (
        <section className= {styles.section}>
            <h1 className= {styles.h1}>Tecnologias</h1>
            <ul className= {styles.ul}>
            {technologiesList}
            </ul>
            
        </section>
    )
}
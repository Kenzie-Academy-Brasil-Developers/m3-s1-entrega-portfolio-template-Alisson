import styles from "./styles.module.css"
import HTMLicon from "../../assets/html-icon.png"
import CSSicon from "../../assets/css-icon.png"
import Javascripticon from "../../assets/js-icon.png"
import Reacticon from "../../assets/react-icon.png"

export const Technologies = () => {
    return (
        <section className= {styles.section}>
            <h1 className= {styles.h1}>Tecnologias</h1>
            <ul className= {styles.ul}>
            <div className= {styles.tech}>
                <img src= {HTMLicon} />
                <h4>HTML</h4>
            </div>
            <div className= {styles.tech}>
                <img src= {CSSicon} />
                <h4>CSS</h4>
            </div>
            <div className= {styles.tech}>
                <img src= {Javascripticon} />
                <h4>Javascript</h4>
            </div>
            <div className= {styles.tech}>
                <img src= {Reacticon} />
                <h4>React</h4>
            </div>
            </ul>
            
        </section>
    )
}
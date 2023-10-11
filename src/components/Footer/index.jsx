import styles from "./styles.module.css"
import Whatsappicon from "../../assets/whatsapp-icon.png"
import Linkedinicon from "../../assets/linkedin-icon.png"
import Githubicon from "../../assets/github-icon.png"

export const Footer = () => {
    return (
        <footer className= {styles.footer}>
            <div className= {styles.div}>
                <h1 className= {styles.h1}>Contatos</h1>
                <div className= {styles.contacts}>
                    <img src= {Whatsappicon}/>
                    <img src= {Linkedinicon}/>
                    <img src= {Githubicon}/>
                </div>
            </div>
            <p>Todos os direitos reservados - José da Silva</p>
        </footer>
    )
}

export default Footer
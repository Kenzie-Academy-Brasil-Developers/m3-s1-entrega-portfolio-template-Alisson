import Footer from "../Footer"
import Header from "../Header/Header"


const PageTemplate = ({ children }) => {

  return (
    <>
    <Header />
      <main>
        { children }
      </main>
      <Footer />
    </>
  )
}

export default PageTemplate

import { BannerSection } from "./components/BannerSection"
import { AboutMe } from "./components/AboutMe"
import { Technologies } from "./components/Technologies"
import { Projects } from "./components/Projects"
import PageTemplate from "./components/PageTemplate"
import { projects } from "./data/projects.js";
import { technologies } from "./data/technologies.js"

const App = () => {
  return (
    <>
    <PageTemplate>
    <BannerSection />
    <AboutMe />
    <Technologies technologies={ technologies } />
    <Projects projects={ projects }/>
    </PageTemplate>
    </>
  )
}

export default App

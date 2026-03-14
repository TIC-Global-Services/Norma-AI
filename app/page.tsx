import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutNorma from "./components/AboutNorma"
import HowItWorks from "./components/HowItWorks"
import ExperienceNorma from "./components/ExperienceNorma"
import NormaCore from "./components/NormCore"
import ScrollNorma from "./components/ScrollNorma"
import Questions from "./components/Questions"
import Footer from "./components/Footer"

export default function Home(){

    return(
        <div className="w-full overflow-hidden relative bg-black">
            <Navbar />
            <Hero />
            <AboutNorma />
            <HowItWorks />
            <ExperienceNorma />
            <NormaCore />
            <ScrollNorma />
            <Questions />
            <Footer />
        </div>
    )
}
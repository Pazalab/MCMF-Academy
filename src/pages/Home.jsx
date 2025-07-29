import Navbar from "../components/common/navigation/Navbar"
import HeroSection from "../components/home/HeroSection"
import AboutSection from "../components/home/AboutSection"
import "../css/home.css"
import ProgramsSection from "../components/home/ProgramsSection"

const Home = () => {
  return (
    <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ProgramsSection />
    </>
  )
}

export default Home
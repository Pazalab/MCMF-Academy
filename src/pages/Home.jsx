import Navbar from "../components/common/navigation/Navbar"
import HeroSection from "../components/home/HeroSection"
import AboutSection from "../components/home/AboutSection"
import "../css/home.css"
import ProgramsSection from "../components/home/ProgramsSection"
import BenefitsSection from "../components/home/BenefitsSection"
import CampsSection from "../components/home/CampsSection"
import BlogSection from "../components/home/BlogSection"
import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"

const Home = () => {
  return (
    <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ProgramsSection />
          <BenefitsSection />
          <CampsSection />
          <BlogSection />
          <CallToAction />
          <Footer />
    </>
  )
}

export default Home
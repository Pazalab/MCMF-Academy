import AboutHero from "../components/about/AboutHero"
import AboutStatements from "../components/about/AboutStatements"
import AboutStory from "../components/about/AboutStory"
import ValuesSection from "../components/about/ValuesSection"
import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import "../css/about.css"
const Academy = () => {
  return (
    <>
          <Navbar />
          <AboutHero />
          <AboutStory />
          <AboutStatements />
          <ValuesSection />
          <CallToAction />
          <Footer />
    </>
  )
}

export default Academy
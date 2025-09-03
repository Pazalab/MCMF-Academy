import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import ProgramsBody from "../components/programs/ProgramsBody"
import "../css/programs.css"

const Programs = () => {
  return (
    <>
            <Navbar />
            <ProgramsBody />
            <CallToAction />
            <Footer />
    </>
  )
}

export default Programs
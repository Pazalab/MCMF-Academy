import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import ContactForm from "../components/contact/ContactForm"
import ContactHero from "../components/contact/ContactHero"
import "../css/contact.css"

const Contact = () => {
  return (
    <>
           <Navbar />
           <ContactHero />
            <ContactForm />
           <Footer />
    </>
  )
}

export default Contact
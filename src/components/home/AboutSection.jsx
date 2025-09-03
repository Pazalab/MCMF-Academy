import { Link } from "react-router-dom"
import players from "../../assets/players.jpg"
import { RxArrowTopRight } from "react-icons/rx";

const AboutSection = () => {
  return (
    <div className="about-section">
            <div className="inner-row">
                      <div className="about-section-content">
                               <div className="about-section-intro">
                                       <h3>Who We Are</h3>
                                       <h2>Nurturing young Talent for a Brighter Future</h2>
                               </div>
                               <div className="about-section-split">
                                         <img src={players} alt="" />
                                         <div className="about-section-col">
                                                <p>At the heart of MCMF football academy is a mission far greater than the game. We are committed to empowering children to grow into disciplined, goal-oriented, and responsible individuals, on and off the pitch. We equip every child with the mindset and tools they need to confidently navigate life into adulthood.</p>
                                                <p>We do this through expert coaching and values-driven mentorship, instilling life skills that go far beyond the pitch — building character, leadership, and resilience for every stage of life.</p>

                                                <Link to="/academy">Learn more <span><RxArrowTopRight /></span></Link>
                                         </div>
                               </div>
                      </div>
            </div>
    </div>
  )
}

export default AboutSection
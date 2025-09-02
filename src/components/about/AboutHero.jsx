import about1 from "../../assets/about1.avif"
import about2 from "../../assets/about2.jpg"
const AboutHero = () => {
  return (
    <div className="about-hero">
               <div className="inner-row">
                        <div className="about-hero-content">
                                  <div className="about-hero-intro">
                                            <h3>About MCMF Academy</h3>
                                            <h1>At MCMF Academy, football is more than a sport — it’s a tool for transformation. We go beyond developing players by nurturing leaders, mentors, and role models. Through training, life skills, and community, we instill discipline, teamwork, and resilience, preparing every child for success on the pitch and in life.</h1>
                                  </div>
                                  <div className="about-hero-images">
                                             <img src={about1} alt="" />
                                             <img src={about2} alt="" />
                                  </div>
                        </div>
               </div>
    </div>
  )
}

export default AboutHero
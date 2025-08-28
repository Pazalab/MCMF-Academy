import { Link } from "react-router-dom"
import { RxArrowTopRight } from "react-icons/rx";

const HeroSection = () => {
  return (
    <div className="hero-section">
              <div className="hero-section-wrap">
                         <div className="hero-video">
                               <video autoPlay loop muted>
                                    <source src={"https://files.pazalab.com/mcmf/video/hero-video.mp4"} type="video/mp4" />
                                 </video>
                         </div>
                         <div className="hero-texts">
                                  <div className="hero-texts-specific">
                                              <h1>Beyond the Game: <br></br> Training <span>Talent</span>. Building <span>Character</span>.</h1>
                                              <Link to={"/"}>Join Us <span><RxArrowTopRight /></span></Link>
                                  </div>
                                  <div className="hero-texts-stuff"></div>
                         </div>
              </div>
    </div>
  )
}

export default HeroSection
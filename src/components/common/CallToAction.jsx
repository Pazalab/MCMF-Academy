import { Link } from "react-router-dom"
import tryouts from "../../assets/tryouts.jpg"
const CallToAction = () => {
  return (
    <div className="call-to-action">
             <div className="call-to-action-content">
                       <div className="call-action-image-side">
                                  <img src={tryouts} alt="" />
                       </div>
                       <div className="call-to-action-texts">
                                  <div className="call-to-action-texts-inner">
                                             <h3>Tryouts</h3>
                                             <h2>Would you like to be part of our Academy?</h2>
                                             <Link to={"/"}>Register Today</Link>
                                  </div>
                       </div>
             </div>
    </div>
  )
}

export default CallToAction
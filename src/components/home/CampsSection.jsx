import { Link } from "react-router-dom"
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import camp1 from "../../assets/camp1.avif"
import camp2 from "../../assets/camp2.avif"
import camp3 from "../../assets/camp3.avif"

const CampsSection = () => {
  return (
    <div className="camp-section">
              <div className="inner-row">
                          <div className="camp-section-content">
                                    <div className="camp-section-intro">
                                                 <div className="camp-section-column">
                                                            <h3>Camps & Trips</h3>
                                                            <h2>All-year Camps and Programs Built to Grow Talent at Every Age and Skill Level.</h2>
                                                 </div>
                                                 <div className="camp-section-column">
                                                            <p>MCMF Academy provides a wide range of year-round camps, trips and supplemental training programs for athletes of all ages and skill levels. Registration for our upcoming holiday camp is now open!</p>

                                                            <div className="camp-links">
                                                                     <Link to={"/"}>Registration for Holiday Camp</Link>
                                                                     <Link to={"/"}>All Camps & Trips <span><HiOutlineArrowLongRight /></span></Link>
                                                            </div>
                                                 </div>
                                    </div>
                                    <div className="camp-section-images">
                                                 <img src={camp1} alt="" />
                                                 <img src={camp2} alt="" />
                                                 <img src={camp3} alt="" />
                                    </div>
                          </div>
              </div>
    </div>
  )
}

export default CampsSection
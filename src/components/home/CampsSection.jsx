import { Link } from "react-router-dom"
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import camp1 from "../../assets/camp1.avif"
import camp2 from "../../assets/camp2.avif"
import camp3 from "../../assets/camp3.avif"
import coach from "../../assets/coach.jpg"

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

                                    <div className="camp-section-extra">
                                              <div className="camp-section-donation">
                                                        <div className="camp-section-top">
                                                                 <h3>Donation & Sponsors</h3>
                                                                 <h2>Every contribution to MCMF Academy makes a difference. With multiple ways to give, your support directly strengthens our mission and fuels the academy’s lasting impact.</h2>
                                                        </div>
                                                        <div className="camp-section-bottom">
                                                                  <Link to={"/"}>Donate Now</Link>
                                                        </div>
                                              </div>
                                              <div className="camp-column">
                                                         <div className="call-to-action-camp">
                                                                    <h3>We’d love to hear from you — reach out today and let’s explore the many ways you can support MCMF Academy and be part of our journey.</h3>

                                                                    <Link to={"/"}>Contact Us</Link>
                                                         </div>
                                                         <div className="camp-image">
                                                                   <img src={coach} alt="" />
                                                         </div>
                                              </div>
                                    </div>
                          </div>
              </div>
    </div>
  )
}

export default CampsSection
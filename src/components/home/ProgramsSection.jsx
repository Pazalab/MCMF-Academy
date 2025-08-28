import age1 from "../../assets/kids1.avif"
import age2 from "../../assets/kids2.avif"
import age3 from "../../assets/kids3.avif"
import age4 from "../../assets/kids4.avif"
import { activities } from "../../data/activities"
import ActivityMoja from "../common/ActivityMoja"

const ProgramsSection = () => {
  return (
    <div className="programs-section">
             <div className="inner-row">
                         <div className="programs-section-content">
                                  <div className="programs-section-scroll">
                                             <div className="programs-section-intro">
                                                      <div className="programs-intro-col">
                                                              <h3>Our programs & Activities</h3>
                                                               <h2>Balanced, comprehensive soccer training for emerging players at every level.</h2>
                                                      </div>
                                                      <div className="programs-intro-col">
                                                              <p>Our programs ranging from year-round training to summer camps, are designed to enhance skills, improve game strategies, and prepare players for competitive play.</p>
                                                      </div>
                                             </div>
                                              <div className="programs-age-groups">
                                                      <div className="age-group-moja">
                                                               <img src={age2} alt="" />
                                                                <div className="age-texts">
                                                                    <h3>Under 10</h3>
                                                                    <h4>MCMF Futures</h4>
                                                              </div>
                                                      </div>
                                                  <div className="age-group-moja">
                                                               <img src={age1} alt="" />
                                                                <div className="age-texts">
                                                                    <h3>U8 - U12</h3>
                                                                    <h4>Junior academy</h4>
                                                              </div>
                                                      </div>
                                                      <div className="age-group-moja">
                                                               <img src={age3} alt="" />
                                                                <div className="age-texts">
                                                                    <h3>U13 - U14</h3>
                                                                    <h4>Youth academy</h4>
                                                              </div>
                                                      </div>
                                                      <div className="age-group-moja">
                                                               <img src={age4} alt="" />
                                                                <div className="age-texts">
                                                                    <h3>U15 - U19</h3>
                                                                    <h4>High school</h4>
                                                              </div>
                                                      </div>
                                              </div>
                                  </div>

                                  <div className="programs-listing">
                                          <div className="programs-listing-row">
                                                { activities.map(item => <ActivityMoja key={item.id}  data={item} />)}
                                          </div>
                                  </div>
                         </div>
             </div>
    </div>
  )
}

export default ProgramsSection
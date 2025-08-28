import benefit1 from "../../assets/community.jpg"
import benefit2 from "../../assets/fun.jpg"
import benefit3 from "../../assets/teamwork.jpg"
const BenefitsSection = () => {
  return (
    <div className="benefits-section">
             <div className="inner-row">
                        <div className="benefit-moja-row">
                                  <div className="benefit-texts">
                                              <h2>Community</h2>
                                              <p>We connect players, families, and coaches in an environment built on inclusivity and respect. Through meaningful events and mutual support, we create lasting relationships that transcend the sport itself.</p>
                                  </div>
                                  <div className="benefit-image">
                                             <img src={benefit1} alt="" />
                                  </div>
                        </div>
                         <div className="benefit-moja-row-two">
                                  <div className="benefit-image">
                                             <img src={benefit2} alt="" />
                                  </div>
                                     <div className="benefit-texts">
                                              <h2>Fun</h2>
                                              <p>Enjoying the game creates a positive environment for players to thrive. Through team activities and outings, we foster joyful experiences that build teamwork and lasting memories.</p>
                                  </div>
                        </div>
                         <div className="benefit-moja-row">
                                  <div className="benefit-texts">
                                              <h2>Teamwork</h2>
                                              <p>Teamwork is at the core of our academy’s philosophy. We create an environment where collaboration and trust are nurtured, encouraging players to support, challenge, and inspire one another both on and off the field. Through this unity, they not only sharpen their skills but also form strong bonds and lasting friendships that shape their journey in football and in life.</p>
                                  </div>
                                  <div className="benefit-image">
                                             <img src={benefit3} alt="" />
                                  </div>
                        </div>
             </div>
    </div>
  )
}

export default BenefitsSection
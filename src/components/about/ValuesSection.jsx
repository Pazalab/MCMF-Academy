import values from "../../assets/values.jpg"
const ValuesSection = () => {
  return (
    <div className="values-section">
              <div className="inner-row">
                      <div className="values-section-content">
                                 <div className="values-section-texts">
                                            <div className="values-intro">
                                                         <h3>Values</h3>
                                                         <h2>Our Guiding Principles</h2>
                                                         <p>Here are the five core values that shape our academy's culture and guide every player, coach, and family in our community. These principles are what we live by, on and off the field, to ensure we're not just building greate athletes, but great people.</p>
                                            </div>

                                            <div className="values-section-row">
                                                       <div className="value-moja">
                                                               <h3>The Team is a Family</h3>
                                                               <p>We're a squad, on and off the field. We look out for each other, celebrate wins together, and lift each other up after losses. No one gets left behind</p>
                                                       </div>
                                                       <div className="value-moja">
                                                                <h3>Work Hard, Play Smart</h3>
                                                                <p>Effort beats everything. Give 100% in practice and in games. But also remember that smart decisions and learning the game are just as important as how fast you can run.</p>
                                                       </div>
                                                       <div className="value-moja">
                                                                <h3>Learn from Mistakes</h3>
                                                                <p>Making a mistake isn't a failure, it's a lesson. We don't yell at each other for fumbling a pass or missing a shot. We talk about it, learn from it, and get better for next time.</p>
                                                       </div>
                                                       <div className="value-moja">
                                                              <h3>Respect Everyone</h3>
                                                              <p>This is non-negotiable. Respect your coaches, teammates, opponents, and referees. Show good sportsmanship, no matter what. How you act is a reflection of who you are.</p>
                                                       </div>
                                                       <div className="value-moja">
                                                                <h3>Have Fun!</h3>
                                                                <p>Remember why you started playing in the first place. This is a game. While we take our goals seriously, we also remember to enjoy the process and have fun doing what we love.</p>
                                                       </div>
                                            </div>
                                 </div>
                                 <div className="values-section-image">
                                          <img src={values} alt="" />
                                 </div>
                      </div>
              </div>
    </div>
  )
}

export default ValuesSection
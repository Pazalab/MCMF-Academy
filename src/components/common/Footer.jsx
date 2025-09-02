import { Link } from "react-router-dom"
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { RxInstagramLogo } from "react-icons/rx";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
            <div className="inner-row">
                      <div className="footer-content">
                                  <div className="footer-description">
                                            <Link to={"/"} className="logo">
                                                <h2>MCMF</h2>
                                                <p><span></span>Football Academy</p>
                                          </Link>
                                          <p>At MCMF Academy, we go beyond football — inspiring young athletes to dream bigger, work harder, and grow into champions in sport and in life.</p>
                                  </div>
                                  <div className="footer-column">
                                            <h3>Information</h3>
                                            <ul>
                                                     <li><Link to={"/"}>Home</Link></li>
                                                     <li><Link to={"/"}>Academy</Link></li>
                                                     <li><Link to={"/"}>Camp & Trips</Link></li>
                                                     <li><Link to={"/"}>Experience</Link></li>
                                                     <li><Link to={"/"}>Contact</Link></li>
                                            </ul>
                                  </div>
                                  <div className="footer-column">
                                            <h3>Programs </h3>
                                            <ul>
                                                    <li><Link to={"/"}>Football Training</Link></li>
                                                    <li><Link to={"/"}>Life Skills Training</Link></li>
                                                    <li><Link to={"/"}>Team Building</Link></li>
                                                    <li><Link to={"/"}>Tournaments</Link></li>
                                                    <li><Link to={"/"}>Friendly Matches</Link></li>
                                            </ul>
                                  </div>
                                  <div className="footer-column">
                                             <h3>Get in Touch</h3>
                                             <p>+(254) 7123 567 789</p>
                                             <p>hello@mcmfacademy.org</p>
                                             <p>2200 BN Adhula Blvd. Kasarani, Nairobi, Kenya</p>

                                             <div className="footer-social-links">
                                                     <ul>
                                                              <li><Link to={"/"}><span><GrFacebookOption /></span></Link></li>
                                                              <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                                              <li><Link to={"/"}><span><RxInstagramLogo /></span></Link></li>
                                                              <li><Link to={"/"}><span><FaTiktok/></span></Link></li>
                                                     </ul>
                                             </div>
                                  </div>
                      </div>

                      <div className="footer-copyright">
                              <p>&copy; { new Date().getFullYear() } MCMF Academy. All rights reserved</p>
                              <div className="links">
                                        <Link to={"/"}>Terms</Link>
                                        <Link to={"/"}>Privacy</Link>
                              </div>
                      </div>
            </div>
    </footer>
  )
}

export default Footer
import { Link, NavLink } from "react-router-dom"
import { CgMenuRightAlt } from "react-icons/cg";
import { useContext } from "react";
import { sidebarContext } from "./navcontext";
const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);

  return (
    <header>
             <div className="inner-row">
                     <div className="header-content">
                                <div className="header-column">
                                      <Link to={"/"} className="logo">
                                                <h2>MCMF</h2>
                                                <p><span></span>Football Academy</p>
                                       </Link>
                                         <nav>
                                                    <ul>
                                                             <li><NavLink to={"/"}>Home</NavLink></li>
                                                             <li><NavLink to={"/academy"}>Academy</NavLink></li>
                                                             <li><NavLink to={"/programs"}>Programs</NavLink></li>
                                                             <li><NavLink to={"/gallery"}>Experience</NavLink></li>
                                                             <li><NavLink to={"/camps"}>Camps</NavLink></li>
                                                    </ul>
                                         </nav>
                                </div>
                                <div className="header-actions">
                                          {/* <Link to={"/"}>Book Today</Link> */}
                                          <Link to={"/contact-us"}>Get in Touch</Link>
                                          <span className="menu-btn" onClick={() => setSidebarStatus(true)}>
                                                    <CgMenuRightAlt />
                                          </span>
                                </div>
                     </div>
             </div>
    </header>
  )
}

export default Header
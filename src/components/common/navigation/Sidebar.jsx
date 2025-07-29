import { CgClose } from "react-icons/cg"
import { Link, NavLink } from "react-router-dom"
import gsap from "gsap"
import { useContext, useEffect, useRef } from "react"
import { sidebarContext } from "./navcontext"

const Sidebar = () => {
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);
  const sidebarRef = useRef();

  useEffect(() => {
         if(sidebarStatus){ 
               sidebarRef.current.classList.add("active");
               const tl = gsap.timeline();

               tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                       y: 0,
                       duration: 0.8
               })
               tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                       x: 0,
                       duration: 0.8
               })
         }
  }, [sidebarStatus])

  const closeSidebar = () => {
         const tl = gsap.timeline();
         tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                 x: "-100%",
                duration: 0.8
        })
       tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
               y: "-100%",
              duration: 0.8
       })

       setTimeout(() => {
             sidebarRef.current.classList.remove("active");
             setSidebarStatus(false)
       }, 2000)
  }
  return (
    <div ref={sidebarRef} className="sidebar-section">
             <div className="sidebar-overlay"></div>
             <div className="sidebar-content">
                         <div className="sidebar-header">
                                    <Link to={"/"} className="logo">
                                              <h2>MCMF</h2>
                                              <p><span></span>Football Academy</p>
                                    </Link>
                                    <span className="close-btn" onClick={closeSidebar}><CgClose /></span>
                         </div>
                         <div className="sidebar-nav">
                                   <ul>
                                            <li><NavLink to={"/"}>Home</NavLink></li>
                                            <li><NavLink to={"/academy"}>Academy</NavLink></li>
                                            <li><NavLink to={"/programs"}>Programs</NavLink></li>
                                            <li><NavLink to={"/gallery"}>Experience</NavLink></li>
                                            <li><NavLink to={"/camps"}>Camps</NavLink></li>
                                   </ul>
                         </div>

                         <div className="sidebar-actions">
                                  <Link to={"/contact-us"}>Get in Touch</Link>
                         </div>
             </div>
    </div>
  )
}

export default Sidebar
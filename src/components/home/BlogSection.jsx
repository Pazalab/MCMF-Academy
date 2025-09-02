import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs";
import blog1 from "../../assets/camp4.jpg"
import blog2 from "../../assets/camp5.jpg"

const BlogSection = () => {
  return (
    <div className="blog-section">
               <div className="inner-row">
                        <div className="blog-section-content">
                                 <div className="blog-section-intro">
                                           <h2>MCMF Academy News & Updates</h2>
                                           <Link to={"/"}>Read all Updates <span><BsArrowRight /></span></Link>
                                 </div>

                                 <div className="blog-section-row">
                                           <div className="blog-moja">
                                                      <img src={blog1} alt="" />
                                                      <div className="blog-moja-texts">
                                                                <h4>November 15, 2025</h4>

                                                                <div className="blog-moj-texts-inner">
                                                                          <h3>Beyond Football: How MCMF Academy Shapes Champions On and Off the Field</h3>
                                                                          <Link to={"/"}>Read more <span><BsArrowRight /></span></Link>
                                                                </div>
                                                      </div>
                                           </div>
                                            <div className="blog-moja">
                                                      <img src={blog2} alt="" />
                                                      <div className="blog-moja-texts">
                                                                <h4>November 25, 2025</h4>

                                                                <div className="blog-moj-texts-inner">
                                                                          <h3>Building Skills, Character, and Community: Inside the MCMF Academy Experience</h3>
                                                                          <Link to={"/"}>Read more <span><BsArrowRight /></span></Link>
                                                                </div>
                                                      </div>
                                           </div>
                                 </div>
                        </div>
               </div>
    </div>
  )
}

export default BlogSection
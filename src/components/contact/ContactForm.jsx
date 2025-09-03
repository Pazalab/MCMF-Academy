
const ContactForm = () => {
  return (
    <div className="contact-form">
              <div className="inner-row">
                       <div className="contact-form-content">
                                 <div className="contact-form-box">
                                           <h3>Fill in your Information</h3>
                                          <form>
                                                    <div className="form-row split">
                                                                <div className="form-row-column">
                                                                         <label htmlFor="firstname">Firstname <span>*</span></label>
                                                                         <input type="text" placeholder="John" className="form-control" />
                                                                </div>
                                                                <div className="form-row-column">
                                                                         <label htmlFor="lastname">Lastname <span>*</span></label>
                                                                         <input type="text" placeholder="Doe" className="form-control" />
                                                                </div>
                                                    </div>
                                                   <div className="form-row split">
                                                                <div className="form-row-column">
                                                                         <label htmlFor="email">Email address<span>*</span></label>
                                                                         <input type="email" placeholder="johndoe@email.com" className="form-control" />
                                                                </div>
                                                                <div className="form-row-column">
                                                                         <label htmlFor="phone">Phone Number <span>*</span></label>
                                                                         <input type="number" pattern="+[0, 9]" placeholder="0712345678"  className="form-control" />
                                                                </div>
                                                    </div>
                                                    <div className="form-row">
                                                               <label htmlFor="subject">Subject <span>*</span></label>
                                                               <input type="text" placeholder="Subject of concern" className="form-control" />
                                                    </div>
                                                    <div className="form-row">
                                                               <label htmlFor="message">Your message</label>
                                                               <textarea placeholder="Questions/comments"></textarea>
                                                    </div>

                                                    <div className="form-btn">
                                                              <button type="submit">Submit Message</button>
                                                    </div>
                                          </form>
                                 </div>
                       </div>
              </div>
    </div>
  )
}

export default ContactForm
import React from "react"

const contact = () => {
    return (
        <section className="contact-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="wrapper">
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <div className="contact-wrap w-100 p-lg-5 p-4">
                                        <h3 className="mb-4">Send us a message</h3>
                                        <form id="contactForm" className="contactForm" >
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="name"
                                                            placeholder="Name"
                                                            
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            name="email"
                                                            placeholder="Email"
                                                           
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="subject"
                                                            placeholder="Subject"
                                                         
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea
                                                            type="text"
                                                            className="form-control"
                                                            name="message"
                                                            placeholder="Message"
                                                            cols="30"
                                                            rows="6"
                                                          
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="submit" value="Send Message" className="btn btn-primary" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="info-wrap w-100 p-lg-5 p-4 img">
                                        <h2>Contact us</h2>
                                        <p className="mb-4">We Would Be Happy To Learn All About Your Business</p>
                                        <div className="dbox w-100 d-flex align-items-start">
                                            <div className=" d-flex align-items-center justify-content-center">
                                            </div>
                                            <div className="text pl-3">
                                                <p>
                                                    <span>Our office:</span> Baltonsborough, Glastonbury BA6 8PW
                                                </p>
                                            </div>
                                        </div>
                                       
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className=" d-flex align-items-center justify-content-center">
                                                <span className="fa fa-paper-plane"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p>
                                                    <span>Email:</span>
                                                    <a href="mailto:info@yoursite.com"> info@yoursite.com</a>
                                                </p>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default contact

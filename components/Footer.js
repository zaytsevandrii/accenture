import Link from "next/link"
import React from "react"

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4 mt-3">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 ">
                        <h5 className="text-uppercase">Dimax media</h5>
                        <p>Development and promotion</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Services</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!">Landing page</a>
                            </li>
                            <li>
                                <a href="#!">E-commerce</a>
                            </li>
                            <li>
                                <a href="#!">Corporate WebSites</a>
                            </li>
                            <li>
                                <a href="#!">Business WebSite</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">INFORMATION</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link href="/about">About us</Link>
                            </li>
                            <li>
                                <a href="#!">Services</a>
                            </li>
                            <li>
                                <a href="#!">Portfolio</a>
                            </li>
                            <li>
                                <a href="#!">Marketing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">
                <div >
                    © 2021
                    <span style={{ fontSize: "18px" }}> Dimax media</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer

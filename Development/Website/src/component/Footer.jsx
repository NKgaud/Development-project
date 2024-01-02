import React from 'react'

function Footer() {
    return (
        <div>
            <footer id="footer" className="wthree-footerhny">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-contact pe-lg-5">
                                <div className="footer-logo mb-3">
                                    <a className="navbar-brand" href="index.html"><span>Car</span> Transko</a>
                                </div>
                                <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at
                                    tempufddfel. Lorem ipsum dolor sit amet Semper at elit.</p>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="fas fa-angle-right" /> <a href="#index">Home</a></li>
                                    <li><i className="fas fa-angle-right" /> <a href="#us">About us</a></li>
                                    <li><i className="fas fa-angle-right" /> <a href="#serve">Services</a></li>
                                    <li><i className="fas fa-angle-right" /> <a href="#terms">Terms of service</a></li>
                                    <li><i className="fas fa-angle-right" /> <a href="#privacy">Privacy policy</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="fas fa-angle-right" /> <a href="#blogs">Blog Posts</a></li>
                                    <li><i className="fas fa-angle-right" /> <a href="#stats">Stats</a></li>
                                    <li><i className="fas fa-angle-right" /> <a href="#Plans">Plans</a></li>
                                    <li><i className="fas fa-angle-right" /> <a href="#Deals">Deals</a></li>
                                    <li><i className="fas fa-angle-right" /> <a href="#Offers">Offers</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-newsletter ps-lg-4">
                                <h4>Join Our Newsletter</h4>
                                <p>Get Updates By Subscribe Our Weekly Newsletter</p>
                                <form action className="d-flex" method="post">
                                    <input type="email" name="email" placeholder="Enter Your Email" required />
                                    <button type="submit" className="btn btn-primary btn-style">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container d-md-flex py-4">
                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            <p className="copy-footer-29">© 2021 Car Transko. All rights reserved | Designed by <a href="https://w3layouts.com">W3layouts</a></p>
                        </div>
                    </div>
                    <div className="social-links text-center text-md-end pt-3 pt-md-0">
                        <a href="#" className="twitter"><i className="fab fa-twitter" /></a>
                        <a href="#" className="facebook"><i className="fab fa-facebook-f" /></a>
                        <a href="#" className="instagram"><i className="fab fa-instagram" /></a>
                        <a href="#" className="google-plus"><i className="fab fa-google-plus-g" /></a>
                        <a href="#" className="linkedin"><i className="fab fa-linkedin-in" /></a>
                    </div>
                </div>
                <button onclick="topFunction()" id="movetop" title="Go to top" style={{ display: 'block' }}>
                    <span className="fa fa-angle-up" />
                </button>
                {/* //move top */}
            </footer>{/* End Footer */}
        </div>

    )
}

export default Footer
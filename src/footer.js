const Footer = () => {

    return(
        <>
            <div className='container text-white'>
                <div className='d-block d-md-flex justify-content-evenly p-3'>
                    <div>
                        <h5>Connect with us</h5>
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-facebook"></i> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-instagram"></i> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-twitter"></i> Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5>Quick Links</h5>
                        <ul>
                            <li>
                                <a href="#">F.A.Q</a>
                            </li>
                            <li>
                                <a href="#">Cookies Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms of Service</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5>Subscribe To Newsletters</h5>
                        <form>
                            <div className="form-group mb-2">
                                <input type='email' placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input type='submit' value='Subscribe' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;
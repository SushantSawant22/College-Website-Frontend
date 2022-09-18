import './footer.css';
const Footer = () =>{
    return(
        <>
            <footer>
                <div className='Container'>
                    <div className='row first_row'>
                        <div className='footer_content'>
                               <h6><span>S</span>omaiya</h6>
                               <h5>Subscribe to join Somaiya Community</h5>
                               <div>
                                  <input type="text" className='form-control' placeholder='Enter your email address'></input>
                                  <button className='btn'>Subscribe</button>
                               </div>
                        </div>
                    </div>
                    <div className='row second_row'>
                        <div className='col-sm-3'>
                            <h6>STUDENT HELP</h6>
                            <li>Admissions</li>
                            <li>Programmes</li>
                            <li>Libraries</li>
                            <li>Alumini Portal</li>
                        </div>
                        <div className='col-sm-3'>
                            <h6>QUICK LINKS</h6>
                            <li>My Account Portal</li>
                            <li>Email Login</li>
                            <li>ESS Login</li>
                            <li>FAQ's</li>
                        </div>
                        <div className='col-sm-3'>
                            <h6>EXPLORE</h6>
                            <li>Sports Academy</li>
                            <li>SCEL</li>
                            <li>RIIDL</li>
                        </div>
                        <div className='col-sm-3'>
                            <h6>GET IN TOUCH</h6>
                            <li>Maps & Directions</li>
                            <li>Contact Directory</li>
                            <li>Faculty Directory</li>
                            <li>Social Media Handles</li>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
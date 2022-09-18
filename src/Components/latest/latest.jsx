import './latest.css';
import Course1 from "../../Images/arts.jpg";
import Course2 from "../../Images/science.jpg";
import Course3 from "../../Images/cs.jpg";
import Course4 from "../../Images/literature.jpg";
import { Link } from 'react-router-dom';
const Latest = () => {
    return (
        <>
            <div className="latest container">
                <div className="content">
                    <h6>
                        <span>L</span>atest Course
                    </h6>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>

                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="box">
                            <img src={Course1} className="img_fluid"></img>
                            <div className="boxcontent">
                                <h6>Art</h6>
                                <h5>20 Principles</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <Link to="/">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="box">
                            <img src={Course2} className="img_fluid"></img>
                            <div className="boxcontent">
                                <h6>Physics</h6>
                                <h5>20 Laws of Universe</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    <Link to="/">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="box">
                            <img src={Course3} className="img_fluid"></img>
                            <div className="boxcontent">
                                <h6>Computer Science</h6>
                                <h5>Fundamentals of Computer</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's </p>
                                    <Link to="/">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="box">
                            <img src={Course4} className="img_fluid"></img>
                            <div className="boxcontent">
                                <h6>literature</h6>
                                <h5>100 Rules of Grammar</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    <Link to="/">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Latest;
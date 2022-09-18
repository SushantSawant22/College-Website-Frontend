import './NextCourse.css';
const NextCourse = () => {
    return (
        <>
            <div className="container new_course">
                <div className="content">
                    <h6>
                        <span>N</span>ext Workshop
                    </h6>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>

                </div>
                <div className="row justify-content-center">
                    <div className='col-sm-5'>
                        <div className='box'>
                            <h6>25th September 2022</h6>
                            <h5>Full Stack Development</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                    <div className='col-sm-5'>
                        <div className='box'>
                            <h6>13th October 2022</h6>
                            <h5>Mobile Programming</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                    <div className='col-sm-5'>
                        <div className='box'>
                            <h6>27th October 2022</h6>
                            <h5>Cyber Security</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}

export default NextCourse;
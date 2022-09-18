import { useNavigate } from 'react-router-dom';
import './custom.css';
const Custom = () => {
    const navigate = useNavigate();
    const redirect = ()=>{
        navigate('/Courses');
    }
    
    return (
        <>
            <section className='custom'>
                <div className='content'>
                    <h6>About Us</h6>
                    <h5><span> ज्ञानादेव तु कैवल्यम् । </span><br></br>KNOWLEDGE ALONE LIBERATES</h5>
                    <p>Our motto is: ज्ञानादेव तु कैवल्यम् । Knowledge alone liberates. Liberates from poverty, from hunger.<br></br> Also to liberate one from the attachments that bind us to small-mindedness.<br></br> Knowledge also provides opportunity.To make the life lived more meaningful.</p>
                </div>
                <div className='info'>
                    <h6>Why <span>Somaiya</span> ?</h6>
                    <div className='row justify-content-center'>
                        <div className='row-sm-5'>
                            <div className='box'>
                                <h2>34</h2>
                                <h5>Institutes</h5>
                            </div>
                            <div className='box'>
                                <h2>222</h2>
                                <h5>Programs & Courses</h5>
                            </div>
                            <div className='box'>
                                <h2>39000+</h2>
                                <h5>Students</h5>
                            </div>
                            <div className='box'>
                                <h2>4000+</h2>
                                <h5>Staff</h5>
                            </div>
                        </div>
                    </div>
                    <button className='btn' onClick={redirect}>Find a Course</button>
                </div>
                
            </section>
        </>

    )
}

export default Custom
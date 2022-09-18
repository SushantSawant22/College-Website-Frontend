import './home.css';
import HeaderImg from '../../Images/header.jpg';
import { useAuth } from '../Auth';
const Home = () =>{
    const auth=useAuth();
    return(
        <>
           <div className='header'>
                <div>
                    <div className='image'>
                        <img src={HeaderImg} alt=''></img>
                    </div>
                    <div className='Overlay'>

                    </div>
                </div>
                <div className='HeaderContent'>
                    {!auth.user&&(<h6>Welcome</h6>)}{auth.user && (<h6>Welcome {auth.user}</h6>)}
                    <h5>Somaiya Vidyavihar University</h5>
                    <p>We will strive to provide access and opportunity to build a more inclusive society.</p>
                    <button className='btn'>Discover More</button>
                </div>
           </div>
        </>
    )
}

export default Home;

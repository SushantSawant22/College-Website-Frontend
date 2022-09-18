import "./navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../Auth";
const Navbar = () => {

    const auth = useAuth();
    const navigate=useNavigate();
    const handleLogout=()=>{
        auth.login();
    }

    return (<>
        <nav className="navbar navbar-expand fixed-top">
            <Link to="/" className="navbar-brand">
                <span>S</span>omaiya
            </Link>
            
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Courses" className="nav-link">Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Gallery" className="nav-link">Gallery</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="nav-link">Contact us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Register" className="nav-link">Register</Link>
                    </li>
                    {
                        !auth.user && (
                            <li className="nav-item">
                                <Link to="/LoginPage" className="nav-link">Login</Link>
                            </li>
                        )
                    }
                    {
                        auth.user && (
                            <li className="nav-item">
                                <Link to="/" className="nav-link" onClick={handleLogout}>Logout</Link>
                            </li>


                        )
                    }

                </ul>
            </div>
        </nav>
    </>

    )
}

export default Navbar
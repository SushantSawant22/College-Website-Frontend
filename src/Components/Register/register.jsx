import { useState } from 'react';
import './register.css';
const Register = () => {

    const [user, setUser] = useState({
        name: "", username: "", email: "", password: "", cpassword: ""
    });
   const [emailerror,setEmailerror] = useState("");
   const [passerror,setPasserror] = useState("");
   

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        var {  email, password, cpassword } = document.forms[0];

        if(password.value!==cpassword.value){
            
            setPasserror("Password does not match");
            if(email.value.match(regex)){
                setEmailerror(null);
                
                

            }
            else{
                setEmailerror("Invalid Email Format");
            }
            
            
            
        }

        else if(password.value===cpassword.value){
            setPasserror(null);
            if(email.value.match(regex)){
                setEmailerror(null);
                alert("Registered Successfully!!!");
                
                

            }
            else{
                setEmailerror("Invalid Email Format");
            }
            
            
        
        }



               
    }




    return (
        <>
            <div className="app">
                <div className="login-form">
                    <div className="title">Registration</div>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <div className="input-container">
                                <label>Name </label>
                                <input type="text" name="name" required placeholder='Enter your Name' onChange={handleInputs} autoComplete='off'/>
                                <span className='error'></span>
                            </div>
                            <div className="input-container">
                                <label>Username </label>
                                <input type="text" name="username" required placeholder='Enter your Username' onChange={handleInputs} autoComplete='off'/>
                                <span className='error'></span>
                            </div>
                            <div className="input-container">
                                <label>Email </label>
                                <input type="text" name="email" required placeholder='Enter your Email' onChange={handleInputs} autoComplete='off'/>
                                <span className='error'>{emailerror}</span>
                            </div>
                            <div className="input-container">
                                <label>Password </label>
                                <input type="password" name="password" required placeholder='Enter Password' onChange={handleInputs} autoComplete='off'/>
                                <span className='error'></span>
                            </div>
                            <div className="input-container">
                                <label>Confirm Password </label>
                                <input type="password" name="cpassword" required placeholder='Re-enter Password' onChange={handleInputs} autoComplete='off'/>
                                <span className='error'>{passerror}</span>
                            </div>
                            <div className="button-container">
                                <input type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register;
import React from 'react';
import './contact.css';
import {useState} from 'react';
const Contact = () => { 

    const [user, setUser] = useState({
        name: "", email: ""
    });
    const [emailerror,setEmailerror] = useState("");


    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }


    const handleSubmit = () => {
        const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        var {  email } = document.forms[0];

        if(email.value.match(regex)){
            setEmailerror("");
            alert("Your Message has been sent!!!");
        }

        else{
            setEmailerror('Invalid Email format');
        }
        
        

    }
    
    return (
        <>
            <div className="app">
                <div className="login-form">
                    <div className="title">Contact us</div>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <div className="input-container">
                                <label>Name </label>
                                <input type="text" name="name" required placeholder='Enter your Name' onChange={handleInputs} />
                               
                            </div>
                            <div className="input-container">
                                <label>Email </label>
                                <input type="text" name="email" required placeholder='Enter your Email' onChange={handleInputs}/>
                                <span className='error'>{emailerror}</span>
                            </div>
                            <div className="input-container">
                                <label>Message</label>
                                <textarea  type="text" name='message' required placeholder='Enter your Message' rols={200} cols={30} ></textarea>
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

export default Contact;
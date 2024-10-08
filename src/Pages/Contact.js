import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './img/meretheMyrhaugW.png';

export default function Contact() {
    const [toggle, setToggle] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [firstnameError, setFirstnameError] = useState(true);
    const [lastname, setLastname] = useState('');
    const [lastnameError, setLastnameError] = useState(true);
    const [ email, setEmail] = useState('');
    const [ emailError, setEmailError] = useState(true);
    const [ message, setMessage] = useState('');
    const [ messageError, setMessageError] = useState(true);
    const [ phone, setPhone] = useState('');
    const [ phoneError, setPhoneError] = useState(true);

    const handleInput = (input) =>{
        let name = input.target.name;
        let value = input.target.value;
        let emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let phonePattern = /^((0047)?|(\+47)?)\d{8}$/;

        switch (name) {
            case 'firstname':
                (value !== '') ? setFirstnameError(false) : setFirstnameError(true);  setFirstname(value)
                break;
            case 'lastname':
                (value !== '') ? setLastnameError(false) : setLastnameError(true); setLastname(value)
                break;
            case 'phone':
                (phonePattern.test(value)) ? setPhoneError(false) : setPhoneError(true); setPhone(value)
                break;
            case 'email':
                (emailPattern.test(value)) ? setEmailError(false) : setEmailError(true); setEmail(value)
                break;
            case 'message':
                (value !== '') ? setMessageError(false) : setMessageError(true); setMessage(value)
                 break;
            default:
                break;
        }
    }
    
    const toggleFunc = () =>{
        setToggle(!toggle)
    }

    return(
        <div className="container" id="contact-page">
            <div className="row col-sm-12 header">    
                    <h1>Contact me:</h1> 
            </div>
            <form className="row col-sm-10 container-form"  action="http://merethem.com/my-form-processor.php" method="post" name="contact-form">
                <div className="row"> 
                    <div className="col-sm-5">
                        <h4>Enter your firstname</h4>
                        <input type="text"
                                name="firstname"
                                onChange={handleInput}
                                className="form-control"
                        />
                        <p className={(lastnameError) ? 'error' : 'error__hide'}>Error on firstname</p>
                    </div>
                    <div className="col-sm-5">
                        <h4> Enter your lastname</h4>
                        <input type="text"
                                name="lastname"
                                onChange={handleInput}
                                className="form-control"
                                />
                        <p className={(lastnameError) ? 'error' : 'error__hide'}>Error on lastname</p>
                    </div>
                    <div className="col-sm-5">
                        <h4>Enter your email</h4>
                        <input type="text"
                                name="email"
                                onChange={handleInput}
                                className="form-control"
                        />
                        <p className={(emailError) ? 'error' : 'error__hide'}>Error on email</p>
                    </div>
                    <div className="col-sm-5">
                        <h4>Enter your phonenumber</h4>
                        <input type="text"
                                name="phone"
                                onChange={handleInput}
                                className="form-control"
                        />
                        <p className={(phoneError) ? 'error' : 'error__hide'}>Error on phonenumber</p>
                    </div>
                    <div className="col-sm-10">
                        <h4>Enter your message</h4>
                        <textarea 
                                name="message"
                                onChange={handleInput}
                                className="form-control"
                        />
                        <p className={(messageError) ? 'error' : 'error__hide'}>Please enter a message</p>
                        <br/>
                        <input type="submit" onClick={toggleFunc} disabled={firstnameError || lastnameError || emailError || messageError} className="btn"></input>
                    </div>
                </div>
            </form>
            <div className={(toggle) ?  'col-sm-12' && 'popup_container' : 'hide'}>
                <div className="col-sm-8 popup_content">
                    <i onClick={toggleFunc} className="fas fa-times"></i>
                    <h3>Thank you for your message. <br/> <br/> 
                        I will get back to you, as soon as possible!<br/> <br/> 
                         <NavLink className="back" to="/">Back to home</NavLink>
                    </h3>
                    <img className="logo-thank" alt="Merethe M logo" src={Logo}/>
                </div>
            </div>
    </div>
    )
}
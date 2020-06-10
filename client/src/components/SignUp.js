import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from 'axios';

function SignUp() {
    const [buttonText, changeButtonText] = useState('register');

    const changeText = (text) => {
        changeButtonText(`Loading... Please Wait`)
    }

    const firstNameRef = React.useRef();
    const lastNameRef = React.useRef();
    const emailRef = React.useRef();
    const phoneNumberRef = React.useRef();
    const addressRef = React.useRef();
    const passwordRef = React.useRef();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            phoneNumber: phoneNumberRef.current.value,
            address: addressRef.current.value,
            password: passwordRef.current.value
        }

        // this is for demo, unfortunately for us, the developer couldn't complete this feature
        // an extention would be nice

        let email = "";
        let password = ""

        await localStorage.setItem("currentEmail", formData.email);
        await localStorage.setItem("currentPassword", formData.password);

        await setTimeout(() => {
            changeButtonText(`register`)
        }, 2000);

        window.location = "/login"
    };

    return (
        <div className="signin">

            <div className="container containers " >
                <p className="float-left"><a href="/">&larr; Back Home</a></p>
                <div className="row">
                    <form className="col s12 white p-5" id="reg-form" onSubmit={handleSubmit}>
                        <div className="row">
                            <h2 className='blue-text lighten-2 center '> Register</h2>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <label >First Name</label>
                                <input name="firstName" type="text" className="validate" ref={firstNameRef} />

                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <label >Last Name</label>
                                <input name="lastName" type="text" className="validate" ref={lastNameRef} />

                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <label >Email</label>
                                <input name="email" type="email" className="validate" ref={emailRef} />

                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <label >Phone Number</label>
                                <input name="phoneNumber" type="number" className="validate" ref={phoneNumberRef} />

                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor="address">Address</label>
                                <input name="address" type="text" className="validate" minLength="6" ref={addressRef} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input name="password" type="password" className="validate" minLength="6" ref={passwordRef} />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field center">
                                <button onClick={ () => { changeText()}  } className="btn btn-register blue lighten-2 waves-effect waves-light" type="submit" >
                                    {buttonText}
                                    </button>
                            </div>
                        </div>
                        <div className="center-align blue-text">Already have an account? <a href="/login" className="red-text">Login</a></div>
                    </form>
                </div>
            </div>
        </div>

    );
}



export default withRouter(SignUp);

import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./Login.css";
import axios from 'axios';

function Login() {
    const [buttonText, changeButtonText] = useState('login');
    const [errorText, changeErr] = useState('');

    const changeError = () => {
        setTimeout(() => {
            changeErr('')
        }, 2000)
    }
    const changeText = () => { 
        changeButtonText(`Loading... Please Wait`);
        setTimeout(() => {
            changeButtonText(`login`)
        }, 2000)
    }

    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    // this is for demo, unfortunately for us, the developer couldn't complete this feature
    // an extention would be nice
    let email = localStorage.getItem("currentEmail");
    let password = localStorage.getItem("currentPassword");

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        if (formData.email === email) {
            if (formData.password === password) {
                window.location = "/dashboard"
            } else {
                changeErr(`Password error`);
                changeError();
            }
        } else {
            changeErr(`Email not found`)
            changeError();
        }


        // axios({
        //     method: 'post',
        //     url: 'https://jsonplaceholder.typicode.com/users',
        //     withCredentials: false,
        //     crossorigin: true,
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        //     },
        //     data: formData,
        // }).then(res => {
        //     console.log('success', res);
        //     console.log(res.data);
        // })

    }

    return (
        <div className="signin">

            <div className="container containers " >
                <p className="float-left"><a href="/">&larr; Back Home</a></p>

                <div className="row">

                    <form className="col s12 white p-5" id="reg-form" onSubmit={handleSubmit} >
                        <span className="h3 red-text">{errorText}</span>
                        <div className="row">
                            <h2 className='blue-text lighten-2 center '> Login</h2>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <label >Email</label>
                                <input name="email" type="email" className="validate" ref={emailRef} />

                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" minLength="6" ref={passwordRef} />
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
                    </form>

                </div>

                <div className="center-align blue-text">New user? Sign up <a to="/signup" className="red-text">here</a></div>
            </div>
        </div>
    );


}

export default withRouter(Login);

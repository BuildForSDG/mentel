import React, { Component } from "react"
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

 class Login extends Component  {

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
     
      }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.history.push('/')
    }
    
     render () { 
        return (
            <div className="signin">

               <div className="container containers " >
           <div className="row">
               <form className="col s12 white" id="reg-form" onSubmit={this.handleSubmit} >
               <div className="row">
           
               <h2 className='blue-text lighten-2 center '> Login</h2>
               </div>
               <div className="row">
                   <div className="input-field col s12">
                   <label >UserName</label>
                   <input id="username" type="text" className="validate"  onChange={this.handleChange} />
                   
                   </div>
               </div>
               <div className="row">
                   <div className="input-field col s12">
                   <input id="password" type="password" className="validate" minLength="6" onChange={this.handleChange}  />
                   <label htmlFor="password">Password</label>
                   </div>
               </div>
               <div className="row">
               

                   <div className="input-field center">
                   <button className="btn btn-register blue lighten-2 waves-effect waves-light" type="submit" >
                      Login
                   </button>
                   </div>
               </div>
               </form>
           </div>

           <div className="center-align blue-text">New user? Sign up <Link to="/signup" className="red-text">here</Link></div>
           </div>
            </div>
        )

     }

    }
    
    export default withRouter(Login);

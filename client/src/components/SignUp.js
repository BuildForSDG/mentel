import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";


class SignUp extends Component {
    

    onChange = e => {this.setState({
        [e.target.name] : e.target.value
    });
}

    handleSubmit = e => {
        e.preventDefault();
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="signin">

            <div className="container containers " >
        <div className="row">
            <form className="col s12 white" id="reg-form" onSubmit={this.handleSubmit} >
            <div className="row">
        
            <h2 className='blue-text lighten-2 center '> Register</h2>
            </div>
            <div className="row">
                <div className="input-field col s12">
                <label >Email</label>
                <input id="email" type="email" className="validate"  onChange={this.handleChange} />
                
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                <label >Username</label>
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
            <div className="center-align blue-text">Already have an account? <Link to="/signup" className="red-text">Login</Link></div>
            </form>
        </div>
</div>
</div>
            
        );
    }
}



export default withRouter (SignUp);

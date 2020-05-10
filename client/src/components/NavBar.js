import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <header>
                <nav className="nav_wrapper white">
                  <div className="container">
                    <h3 className=" center brand-logo black-text " style={{paddingRight: "70vw"}}>Mentel</h3>
                    <ul className="right">
                        <li ><Link to="/" className="black-text">Home</Link></li>
                        <li className="black-text"><Link to="/" className="black-text">About</Link></li>
                        <li className="black-text"><Link to="/" className="black-text">Contact</Link></li>
                      <li>  <Link to="/Login" className="btn blue lighten-2 wave-effect wave-light" > Login</Link></li>
                    </ul>
                 </div>
                </nav>
            </header>
        </div>
    )
}



export default NavBar; 
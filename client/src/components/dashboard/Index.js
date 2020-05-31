import React, { Component } from 'react';
import DashboardPage from './DashboardPage';
import FooterPage from '../FooterPage';
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
     active = {
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: "10px",
        fontFamily: "Arial"
    };
    "white-text" = {
        color: "white"
    }

    render() {
        return (
            <main>
                <div className="row">
                    <div className="col-md-2 info-color">
                        <h3 className="white-text font-weight-bold py-3">
                            Mentel
                        </h3>
                        <ul>
                            <li style={{color: "white"}}><Link style={this["white-text"]} to="/">Home</Link></li>
                            <li style={this.active}><Link style={this["white-text"]} to="/dashboard">Dashboard</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-10">
                        <DashboardPage />
                    </div>
                </div>

                <FooterPage />
            </main>
        )
    }
}
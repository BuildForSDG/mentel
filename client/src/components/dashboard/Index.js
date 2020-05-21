import React, { Component } from 'react';
import DashboardPage from './DashboardPage';
import FooterPage from '../FooterPage';

export default class Dashboard extends Component {
    render() {
        return (
            <main>
                <div className="row">
                    <div className="col-md-2">
                        Navigation
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
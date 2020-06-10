import React, { useState, useEffect } from "react";
import 'whatwg-fetch';

const PatientsConnect = () => {
    const [healthProfessionals, healthLength] = useState(0);
    const [users, usersLength] = useState(0);

    useEffect(() => {
        // fetch health prfessionals
        fetch('https://mentel-health.herokuapp.com/api/gethealth')
            .then(function (response) {
                return response.json()
            }).then(function (json) {
                const { getHealth } = json;
                healthLength(getHealth.length)
            }).catch(function (err) {
                console.log('failed', err)
            })

        // fetch users
        fetch('https://mentel-health.herokuapp.com/api/user')
            .then(function (response) {
                return response.json()
            }).then(function (json) {
                const { data } = json;
                usersLength(data.length)
            }).catch(function (err) {
                console.log('failed', err)
            })
    })

    return (
        <div>
            <section className="section blue lighten-5">
                <h6>Mental In Numbers</h6>
                <div className="row">
                    <div className="col s12 l4 offset-l1">
                        {healthProfessionals}
                        <p>Health Professionals</p>
                    </div>

                    <div className="col s12 l4 offset-l2">
                        {users}
                        <p>Patients connected</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default PatientsConnect;

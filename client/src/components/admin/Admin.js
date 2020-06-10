import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'whatwg-fetch';

import {
    MDBContainer,
    MDBCol,
    MDBCollapse,
    MDBCard,
    MDBCardBody,
    MDBCollapseHeader,
    MDBRow,
    MDBCardTitle,
    MDBCardText,
    MDBCardUp,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBBtn
} from 'mdbreact';

import Footer from '../FooterPage';

export default class Admin extends Component {
    state = {
        collapseID: 'collapse1',
        healthProfessionals: [],
        users: [],
        usersLength: 0,
        healthLength: 0
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));

    active = {
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "10px",
        fontFamily: "Arial"
    };
    "white-text" = {
        color: "white"
    }

    componentDidMount() {

        let currentComponent = this;

        // fetch health prfessionals
        fetch('https://mentel-health.herokuapp.com/api/gethealth')
            .then(function (response) {
                return response.json()
            }).then(function (json) {
                const { getHealth } = json;
                currentComponent.setState({ healthProfessionals: getHealth })
                currentComponent.setState({ healthLength: getHealth.length })
            }).catch(function (err) {
                console.log('failed', err)
            })

        // fetch users
        fetch('https://mentel-health.herokuapp.com/api/user')
            .then(function (response) {
                return response.json()
            }).then(function (json) {
                const { data } = json;
                currentComponent.setState({ users: data })
                currentComponent.setState({ usersLength: data.length })
            }).catch(function (err) {
                console.log('failed', err)
            })


    }

    render() {
        const { collapseID } = this.state;

        const healthP = this.state.healthProfessionals;
        const users = this.state.users;

        return (
            <main>
                <div className="row">
                    <div className="col-md-2 blue lighten-2">
                        <h3 className="white-text font-weight-bold py-3">
                            Mentel
                        </h3>
                        <ul>
                            <li style={this.active}><Link style={this["white-text"]} to="/admin">Admin Dashboard</Link></li>
                            <li style={{ color: "white" }}><Link style={this["white-text"]} to="/">Home</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-10 lightgrey">
                        <MDBContainer>
                            <h4 className="py-2 text-left">Overview</h4>
                            <hr style={{ border: "2px solid skyblue" }} width="50%" align="left" />

                            <section className="container row">
                                <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
                                    <MDBCardTitle>Health Professionals</MDBCardTitle>
                                    <MDBCardText>
                                        <h3>{this.state.healthLength}</h3>
                                    </MDBCardText>
                                </MDBCard>
                                <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
                                    <MDBCardTitle>Clients</MDBCardTitle>
                                    <MDBCardText>
                                        <h3>{this.state.usersLength}</h3>
                                    </MDBCardText>
                                </MDBCard>
                            </section>

                            <MDBContainer className='accordion md-accordion accordion-1'>
                                <MDBCard style={{ backgroundColor: 'transparent' }}>
                                    <MDBCollapseHeader
                                        onClick={this.toggleCollapse('collapse1')}
                                        className='text-uppercase blue lighten-2 z-depth-1'
                                    >
                                        <span className='white-text font-weight-bold'>
                                            Registered Users
                                        </span>
                                    </MDBCollapseHeader>
                                    <MDBCollapse id='collapse1' isOpen={collapseID}>
                                        <MDBCardBody>
                                            <MDBRow>
                                                <MDBCol md='12'>
                                                    <MDBCard testimonial>
                                                        <MDBCardUp className='indigo lighten-1' />
                                                        <MDBCardBody>
                                                            <MDBContainer>
                                                                <h4 className="my-4">Clients</h4>
                                                                {users ?
                                                                    <div className="table-responsive">
                                                                        <MDBTable bordered striped>
                                                                            <MDBTableHead>
                                                                                <tr>
                                                                                    <th>#</th>
                                                                                    <th>Name</th>
                                                                                    <th>Email</th>
                                                                                    <th>Number</th>
                                                                                    <th>Address</th>
                                                                                    <th>Action</th>
                                                                                </tr>
                                                                            </MDBTableHead>
                                                                            <MDBTableBody>
                                                                                {users.map((obj, i) => {
                                                                                    return <tr key={obj.id}>
                                                                                        <td>{i + 1}</td>
                                                                                        <td>{obj.firstName} {obj.lastName}</td>
                                                                                        <td>{obj.email}</td>
                                                                                        <td>{obj.phoneNumber}</td>
                                                                                        <td>{obj.address}</td>
                                                                                        <td>
                                                                                            <button className="btn btn-sm btn-danger">Delete</button>
                                                                                        </td>
                                                                                    </tr>
                                                                                })}
                                                                            </MDBTableBody>
                                                                        </MDBTable>
                                                                    </div>
                                                                    :
                                                                    <h6 className="text-muted">No Users Registered</h6>
                                                                }
                                                            </MDBContainer>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>

                                <MDBCard style={{ backgroundColor: 'transparent' }}>
                                    <MDBCollapseHeader
                                        onClick={this.toggleCollapse('collapse2')}
                                        className='text-uppercase warning-color lighten-3 z-depth-1'
                                    >
                                        <span className='white-text font-weight-bold'>
                                            Health Professionals
                                        </span>
                                    </MDBCollapseHeader>
                                    <MDBCollapse id='collapse2' isOpen={collapseID}>
                                        <MDBCardBody>
                                            <MDBRow className='my-4'>
                                                <MDBCol md='12'>
                                                    <MDBCard testimonial>
                                                        <MDBCardUp gradient='aqua' />
                                                        <MDBCardBody>
                                                            <MDBContainer>
                                                                <h4 className="my-4">Health Professionals</h4>

                                                                {healthP ?
                                                                    <div className="table-responsive">
                                                                        <MDBTable bordered striped>
                                                                            <MDBTableHead>
                                                                                <tr>
                                                                                    <th>#</th>
                                                                                    <th>Name</th>
                                                                                    <th>Health ID</th>
                                                                                    <th>Number</th>
                                                                                    <th>Action</th>
                                                                                </tr>
                                                                            </MDBTableHead>
                                                                            <MDBTableBody>
                                                                                {healthP.map((obj, i) => {
                                                                                    return <tr key={obj.id}>
                                                                                        <td>{i + 1}</td>
                                                                                        <td>{obj.firstName} {obj.lastName}</td>
                                                                                        <td>{obj.medicalId}</td>
                                                                                        <td>{obj.phoneNumber}</td>
                                                                                        <td>
                                                                                            <MDBBtn color="danger">Delete</MDBBtn>
                                                                                        </td>
                                                                                    </tr>
                                                                                })}
                                                                            </MDBTableBody>
                                                                        </MDBTable>
                                                                    </div>
                                                                    :
                                                                    <h6 className="text-muted">No Health Professionals Registered</h6>
                                                                }


                                                            </MDBContainer>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>

                            </MDBContainer>
                        </MDBContainer>
                    </div>
                </div>

                <Footer />
            </main>
        )
    }
}
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    MDBContainer,
    MDBCol,
    MDBCollapse,
    MDBCard,
    MDBCardBody,
    MDBCollapseHeader,
    MDBCardImage,
    MDBRow,
    MDBView,
    MDBCardTitle,
    MDBCardText,
    MDBCardUp,
    MDBAvatar,
    MDBIcon,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBBtn
} from 'mdbreact';

import Footer from '../FooterPage';

export default class Admin extends Component {
    state = {
        collapseID: 'collapse1'
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



    render() {
        const { collapseID } = this.state;
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
                                        <h3>0</h3>
                                    </MDBCardText>
                                </MDBCard>
                                <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
                                    <MDBCardTitle>Clients</MDBCardTitle>
                                    <MDBCardText>
                                        <h3>0</h3>
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
                                                <MDBCol md='6'>
                                                    <MDBCard testimonial>
                                                        <MDBCardUp className='indigo lighten-1' />
                                                        <MDBCardBody>
                                                            <MDBContainer>
                                                                <h4 className="my-4">Clients</h4>
                                                                <MDBTable bordered striped>
                                                                    <MDBTableHead>
                                                                        <tr>
                                                                            <th>#</th>
                                                                            <th>Name</th>
                                                                            <th>Number</th>
                                                                            <th>Actions</th>
                                                                        </tr>
                                                                    </MDBTableHead>
                                                                    <MDBTableBody>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>Jane Doe</td>
                                                                            <td>07038334703</td>
                                                                            <td>    
                                                                                <MDBBtn color="danger">Delete</MDBBtn>
                                                                            </td>
                                                                        </tr>
                                                                    </MDBTableBody>
                                                                </MDBTable>
                                                            </MDBContainer>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                </MDBCol>
                                                <MDBCol md='6'>
                                                    <MDBCard testimonial>
                                                        <MDBCardUp gradient='aqua' />
                                                        <MDBCardBody>
                                                        <MDBContainer>
                                                                <h4 className="my-4">Health Professionals</h4>
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
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>Dr Sadiq</td>
                                                                            <td>0123456</td>
                                                                            <td>07038334703</td>
                                                                            <td>    
                                                                                <MDBBtn color="danger">Delete</MDBBtn>
                                                                            </td>
                                                                        </tr>
                                                                    </MDBTableBody>
                                                                </MDBTable>
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
                                            Pending requests
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
                                                                <MDBTable bordered striped>
                                                                    <MDBTableHead>
                                                                        <tr>
                                                                            <th>#</th>
                                                                            <th>Name</th>
                                                                            <th>Health ID</th>
                                                                            <th>Email</th>
                                                                            <th>Number</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </MDBTableHead>
                                                                    <MDBTableBody>
                                                                        <tr>
                                                                            <td>1</td>
                                                                            <td>Dr Sadiq</td>
                                                                            <td>sadiq@example.com</td>
                                                                            <td>0123456</td>
                                                                            <td>07038334703</td>
                                                                            <td>
                                                                                <MDBBtn color="success">Approve</MDBBtn>
                                                                                <MDBBtn color="danger">Reject</MDBBtn>
                                                                            </td>
                                                                        </tr>
                                                                    </MDBTableBody>
                                                                </MDBTable>
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
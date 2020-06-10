import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn, MDBContainer, MDBTabPane, MDBTabContent, MDBNav,
    MDBCard, MDBCardBody, MDBRow, MDBCol, MDBView, MDBMask, MDBTable, MDBTableBody, MDBTableHead, MDBModal, MDBModalBody,
    MDBModalHeader, MDBModalFooter
} from "mdbreact";
import { MDBFileInput } from "mdbreact";

export default class DashboardPage extends Component {
    state = {
        isOpen: false,
        activeItem: "1",
        modal6: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    };

    toggleFeedModal = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    };

    render() {
        return (
            <main>
                <MDBNavbar color="white" dark expand="md">
                    <div className="container">
                        <MDBNavbarBrand>
                            <strong className="white-text">Navbar</strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse} />
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                            <MDBNavbarNav left>
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle caret color="info">
                                            Menu
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu basic>
                                            <MDBDropdownItem>Profile</MDBDropdownItem>
                                            <MDBDropdownItem divider />
                                            <MDBDropdownItem>
                                                <MDBBtn color="danger">Logout</MDBBtn>
                                            </MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </div>
                </MDBNavbar>

                <MDBContainer>
                    <MDBNav className="nav-tabs mt-5 d-flex justify-content-center">
                        <MDBNavItem>
                            <MDBNavLink link to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
                                Feed
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
                                Appointment
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNav>
                    <MDBTabContent activeItem={this.state.activeItem} >
                        <MDBTabPane tabId="1" role="tabpanel">

                            <MDBCard
                                className="my-5 px-5 mx-auto"
                                style={{ fontWeight: 300, maxWidth: "90%" }}
                            >
                                <MDBCardBody style={{ paddingTop: 0 }}>
                                    <h5 className="h3-responsive font-weight-bold my-5 text-center">
                                        Message Feed
                                    </h5>

                                    <div className="text-right">
                                        <MDBBtn color="info" onClick={() => { alert('This feature is under development')} }>Add Post</MDBBtn>
                                        <MDBModal isOpen={this.state.modal6} toggle={this.toggleFeedModal(6)} position="top-center">
                                            <MDBModalHeader toggle={this.toggleFeedModal(6)}>New Post</MDBModalHeader>
                                            <MDBModalBody>
                                                <form class="text-center border border-light p-5">

                                                    <div className="form-group">
                                                        <MDBFileInput btnColor="info" />
                                                    </div>    

                                                    <label>Title</label>
                                                    <select className="browser-default custom-select mb-4" name="title">
                                                        <option value="">Choose option</option>
                                                        <option value="1">Anxiety</option>
                                                        <option value="2">Stress</option>
                                                        <option value="3">Depression</option>
                                                    </select>

                                                    <div className="form-group">
                                                        <textarea className="form-control rounded-0" name="description" rows="3" placeholder="Short Description"></textarea>
                                                    </div>

                                                    <button className="btn btn-info btn-block" type="submit">Post</button>

                                                </form>
                                            </MDBModalBody>
                                            <MDBModalFooter>
                                                <MDBBtn color="danger" onClick={this.toggleFeedModal(6)}>Close</MDBBtn>
                                            </MDBModalFooter>
                                        </MDBModal>
                                    </div>

                                    <hr />

                                    <MDBRow>
                                        <MDBCol md="12" lg="10">
                                            <div style={{
                                                borderBottom: "1px solid #e0e0e0",
                                                marginBottom: "1.5rem"
                                            }}>
                                                <MDBRow>
                                                    <MDBCol md="3">
                                                        <MDBView hover rounded className="z-depth-1-half mb-4">
                                                            <img
                                                                className="img-fluid"
                                                                src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg"
                                                                alt=""
                                                            />
                                                            <a href="#!">
                                                                <MDBMask overlay="white-slight" className="waves-light" />
                                                            </a>
                                                        </MDBView>
                                                    </MDBCol>
                                                    <MDBCol md="9">
                                                        <p className="font-weight-bold dark-grey-text">
                                                            26/02/2018
                                                        </p>
                                                        <div className="d-flex justify-content-between">
                                                            <MDBCol size="11" className="text-truncate pl-0 mb-3">
                                                                <a href="#!" className="dark-grey-text">
                                                                    At vero eos et accusamus et iusto odio dignissimos
                                                                    ducimus qui blanditiis
                                                                </a>
                                                            </MDBCol>
                                                            <a href="#!">
                                                                <MDBIcon icon="angle-double-down" />
                                                            </a>
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>
                                            </div>

                                            <div style={{
                                                borderBottom: "1px solid #e0e0e0",
                                                marginBottom: "1.5rem"
                                            }}>
                                                <MDBRow>
                                                    <MDBCol md="3">
                                                        <MDBView hover rounded className="z-depth-1-half mb-4">
                                                            <img
                                                                className="img-fluid"
                                                                src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                                                                alt=""
                                                            />
                                                            <a href="#!">
                                                                <MDBMask overlay="white-slight" className="waves-light" />
                                                            </a>
                                                        </MDBView>
                                                    </MDBCol>
                                                    <MDBCol md="9">
                                                        <p className="font-weight-bold dark-grey-text">
                                                            25/02/2018
                                                        </p>
                                                        <div className="d-flex justify-content-between">
                                                            <MDBCol size="11" className="text-truncate pl-0 mb-3">
                                                                <a href="#!" className="dark-grey-text">
                                                                    Itaque earum rerum hic tenetur a sapiente delectus
                                                        </a>
                                                            </MDBCol>
                                                            <a href="#!">
                                                                <MDBIcon icon="angle-double-down" />
                                                            </a>
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>
                                            </div>

                                            <div style={{
                                                borderBottom: "1px solid #e0e0e0",
                                                marginBottom: "1.5rem"
                                            }}>
                                                <MDBRow>
                                                    <MDBCol md="3">
                                                        <MDBView hover rounded className="z-depth-1-half mb-4">
                                                            <img
                                                                className="img-fluid"
                                                                src="https://mdbootstrap.com/img/Photos/Others/images/87.jpg"
                                                                alt=""
                                                            />
                                                            <a href="#!">
                                                                <MDBMask overlay="white-slight" className="waves-light" />
                                                            </a>
                                                        </MDBView>
                                                    </MDBCol>
                                                    <MDBCol md="9">
                                                        <p className="font-weight-bold dark-grey-text">
                                                            24/03/2018
                                                        </p>
                                                        <div className="d-flex justify-content-between">
                                                            <MDBCol size="11" className="text-truncate pl-0 mb-3">
                                                                <a href="#!" className="dark-grey-text">
                                                                    Soluta nobis est eligendi optio cumque nihil impedit
                                                                    quo minus
                                                                </a>
                                                            </MDBCol>
                                                            <a href="#!">
                                                                <MDBIcon icon="angle-double-down" />
                                                            </a>
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>
                                            </div>

                                            <div className="mb-4">
                                                <MDBRow>
                                                    <MDBCol md="3">
                                                        <MDBView hover rounded className="z-depth-1-half mb-4">
                                                            <img
                                                                className="img-fluid"
                                                                src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                                                                alt=""
                                                            />
                                                            <a href="#!">
                                                                <MDBMask overlay="white-slight" className="waves-light" />
                                                            </a>
                                                        </MDBView>
                                                    </MDBCol>
                                                    <MDBCol md="9">
                                                        <p className="font-weight-bold dark-grey-text">
                                                            23/02/2018
                                                        </p>
                                                        <div className="d-flex justify-content-between">
                                                            <MDBCol size="11" className="text-truncate pl-0 mb-3">
                                                                <a href="#!" className="dark-grey-text">
                                                                    Duis aute irure dolor in reprehenderit in voluptate
                                                        </a>
                                                            </MDBCol>
                                                            <a href="#!">
                                                                <MDBIcon icon="angle-double-down" />
                                                            </a>
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>

                        </MDBTabPane>
                        <MDBTabPane tabId="2" role="tabpanel">

                            <div className="text-right">
                                <MDBBtn color="info" onClick={() => { alert('This feature is under development')} }>Request appointment</MDBBtn>
                            </div>

                            <MDBCard>
                                <MDBContainer>
                                    <h4 className="my-4">Upcoming Appointments</h4>
                                    <MDBTable bordered striped>
                                        <MDBTableHead>
                                            <tr>
                                                <th>#</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Assigned To</th>
                                                <th>Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            <tr>
                                                <td>1</td>
                                                <td>Anxiety Issue</td>
                                                <td>I just want someone to listen to me</td>
                                                <td>Dr Sadiq</td>
                                                <td>01/01/2020</td>
                                                <td><MDBBtn color="info">Mark as Complete</MDBBtn></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Anxiety Issue</td>
                                                <td>I just want someone to listen to me</td>
                                                <td>Dr Sadiq</td>
                                                <td>01/01/2020</td>
                                                <td><MDBBtn color="info">Mark as Complete</MDBBtn></td>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>
                                </MDBContainer>

                            </MDBCard>

                            <MDBCard>
                                <MDBContainer>
                                    <h4 className="my-4">Previous Appointments</h4>
                                    <MDBTable bordered striped>
                                        <MDBTableHead>
                                            <tr>
                                                <th>#</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Assigned To</th>
                                                <th>Date</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            <tr>
                                                <td>1</td>
                                                <td>Anxiety Issue</td>
                                                <td>I just want someone to listen to me</td>
                                                <td>Dr Sadiq</td>
                                                <td>01/01/2020</td>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>
                                </MDBContainer>


                            </MDBCard>

                        </MDBTabPane>
                    </MDBTabContent>

                </MDBContainer>
            </main>
        );
    }
}

import React, { Component } from 'react'
import Navbar from './Navbar'
import PatientsConnect from './PatientsConnect'

export class Landingpage extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <section className='section blue blue lighten-2'>
                    <div>
                        <h3 className='white-text center'>YOUR MENTAL HEALTH COMPANION</h3>
                    </div> 

                </section>
                <div className='container'>
                    <div className='row'>
                        <div className='col s12 l6'>
                           <h4 className='green-text left-align'>About</h4>
                           <div className='left-align'>
                           <p>Mental aims to connect mental health professionals and clients using a confidential and cost effective
                               approach.</p><br/>
                            <p>Mental health is a prevalent problem, even more so today - and the stigma attached to it
                                even makes things worse for those suffering from some form of mental challanges.</p><br/>
                            <p>This app gives you the privacy and closure you need, and connect you to a community of support
                                in your journey to betterment! </p>     
                            </div>  

                           
                        </div>
                        <div className='col s12 l4 offset-l2'>
                            enter your image here

                        </div>
                    </div>
                    <div style={{paddingBottom: '2vw'}}><button className='btn blue center-align'>Get started</button></div>

                </div>
                <PatientsConnect />

                <div className='center'><br/> <br/> <br/> <br/> <br/> <br/> <br/>
                </div>

                <footer className='page-footer blue lighten-2' style={{paddingBottom:'4vw'}}>
                    <div className='row'>
                    &copy; #BuildforSDG. Team 017
                    </div>

                </footer>
            </div>
        )
    }
}

export default Landingpage

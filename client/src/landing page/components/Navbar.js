import React from 'react'

const Navbar = () => {
    return (
        <div>
            <header>
                <nav className='nav_wrapper white'>
                  <div className='container'>
                    <a className=' center brand-logo black-text ' style={{paddingRight: '70vw'}}>Mental</a>
                    <ul className='right'>
                        <li ><a className='black-text'>Home</a></li>
                        <li className='black-text'><a className='black-text'>About</a></li>
                        <li className='black-text'><a className='black-text'>Contact</a></li>
                        <button className='btn blue lighten-2 wave-effect wave-light'>login</button>
                    </ul>
                 </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;
import React from 'react';
import "./Navbar.css"
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
    <div id='navBox'>
        <h3 id='title'>Fash And Style</h3>
        <div className='navIcons'>
        <Link className='link' to="/">
                Home
            </Link>
            <Link className='link' to="/cart">
                Cart
            </Link>
            <Link className='link' to="/account">
                Account
            </Link>
            <Link className='link' to="/login">
                Logout
            </Link>
        </div>
    </div>

    )
}
export default Navbar;
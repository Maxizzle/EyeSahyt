import React from 'react'
import pageTwo from '../../Images/pageTwo.png'
import {NavLink} from 'react-router-dom'


export default function PageTwo() {
    return (

        <div className='second-page'>
            <h3>You did your research on how to promote and grow your business</h3>
            <img src={pageTwo} alt='illustration of icons and digital devices' />
            <h3>But saw no changes in traffic</h3>
            <footer>
            <NavLink exact to="/" active className="back">
                Back
            </NavLink>
            <NavLink exact to="/pagethree" active className="next">
                Next
            </NavLink>
            </footer>
        </div>
    )
}

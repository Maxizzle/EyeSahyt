import React from 'react'
import {NavLink} from 'react-router-dom'
import pageFour from '../../Images/pageFour.png'

export default function PageFour() {
    return (

        <div className='fourth-page'>
            <h3>Here's an idea, Post your business with us</h3>
            <img src={pageFour} alt='illustration of a sad man with glasses' />
            <h3>And watch your business sore to new heights</h3>

            <footer>
            <NavLink exact to="/pagethree" active className="back">
                Back
            </NavLink>
            <NavLink exact to="/pagefive" active className="next">
                Next
            </NavLink>
            </footer>
        </div>
    )
}

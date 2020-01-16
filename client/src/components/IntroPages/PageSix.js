import React from 'react'
import {NavLink} from 'react-router-dom'
import pageSix from '../../Images/pageSix.png'


export default function PageSix() {
    return (
        <div className='sixth-page'>
             <h3> That way you get to spend less time stressing</h3>
            <img src={pageSix} alt='illustration of a sad man with glasses' />
            <h3>And more time letting your drone walk your dog</h3>
            <footer>
            <NavLink exact to="/pagefive" active className="back">
                Back
            </NavLink>
            <NavLink exact to="/home" active className="next">
                Next
            </NavLink>
            </footer>
        </div>
    )
}

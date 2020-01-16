import React from 'react'
import introPage from '../../Images/introPage.png'
import {NavLink} from 'react-router-dom'


export default function PageOne() {
    return (
        <div className='first-page'>
            <h3>So you have your business and it's not going so well</h3>
            <img src= {introPage} alt = 'illustration of a sad man with glasses'/>
            <footer>
            <NavLink exact to="/pagetwo" active className="next">
                Next
            </NavLink>
            </footer>
        </div>
    )
}

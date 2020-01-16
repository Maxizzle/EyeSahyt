import React from 'react'
import {NavLink} from 'react-router-dom'
import pageFive from '../../Images/pageFive.png'

export default function PageFive() {
    return (

        <div className='fifth-page'>
            <h3>All you do is post your shop on our app</h3>
            <img src={pageFive} alt='illustration of a sad man with glasses' />
            <h3>So when your customers are searching , we can point them to you</h3>
            <footer>
            <NavLink exact to="/pagefour" active className="back">
                Back
            </NavLink>
            <NavLink exact to="/pagesix" active className="next">
                Next
            </NavLink>
            </footer>
        </div>
    )
}

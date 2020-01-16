import React from 'react'
import pageThree from '../../Images/pageThree.png'
import {NavLink} from 'react-router-dom'


export default function PageThree() {
    return (

        <div className='third-page'>
            <h3>You even tried posting on social media but the "Likes" were ehhh... not so good.</h3>
            <img src={pageThree} alt='illustration of a sad man with glasses' />
            <footer>
            <NavLink exact to="/pagetwo" active className="back">
                Back
            </NavLink>
            <NavLink exact to="/pagefour" active className="next">
                Next
            </NavLink>
            </footer>
        </div>
    )
}

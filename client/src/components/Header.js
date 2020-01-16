import React, { Component } from 'react'
import hero from '../Images/hero.png'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <nav>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                </nav>

                <h1>EyeSahyt</h1>
                <img src={hero} alt='purple background'/>
            
                
            </div>
        )
    }
}

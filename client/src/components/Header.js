import React, { Component } from 'react'
import hero from '../Images/hero.png'

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <nav>
                  <p>Home</p>
                  <p>About Us</p>
                  <p>Contact Us</p>
                </nav>

                <h1>EyeSahyt</h1>
                <img src={hero} alt='purple background'/>
            
                
            </div>
        )
    }
}

import React, { Component } from 'react'
import Header from './Header'
import business from '../Images/business.png'
import location from '../Images/location.png'
import inventory from '../Images/inventory.png'
import phone from '../Images/phone.png'
import CreatePage from './CreatePage.js'


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
            click: false,
            iconType: ''
        }
    }
    handleClick = (val) => {
        this.setState({
            click: true,
            iconType: val
        })
        console.log('bannann peze', val)
    }
    render() {
        // console.log(this.state.iconType)
        const { stores } = this.props
        return (

            <div>
                <Header />
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                <div className='cards'>
                    {/* {cards} */}
                    <div className='business-card'>
                        <img src={business} alt='building icon' style={{ width: '91px', color: '#fff' }} onClick={() => this.handleClick('business')} />
                        
                    </div>
                    
                    <div className='location-card'>
                        <img src={location} alt='location icon' style={{ width: '60px' }} onClick={() => this.handleClick('location')} />
                    </div>
                    <div className='inventory-card'>
                        <img src={inventory} alt='inventory icon' style={{ width: '60px' }} onClick={() => this.handleClick('inventory')} />
                    </div>
                    <div className='phone-card'>
                        <img src={phone} alt='phone icon' style={{ width: '60px' }} onClick={() => this.handleClick('phone')} />
                    </div>

                </div>
                <CreatePage
                    click={this.state.click}
                    iconType={this.state.iconType}
                />
            </div>
        )

    }


}
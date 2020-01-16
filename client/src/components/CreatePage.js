import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import Form from '../components/Form'

export default class CreatePage extends Component {
    constructor() {
        super()
        this.state = {
            business: '',
            location: '',
            inventory: '',
            phone: '',
            redirect: false

        }

    }

    handleChange = (event) => {
        // console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state)
        const data = {
            name: this.state.business,
            image_url: this.state.inventory,
            address: this.state.location,
            number: this.state.phone
        }

        // console.log(data)
        
        await axios.post("https://eyesahyt.herokuapp.com/stores", data)
            .then(e => {
                console.log(e.data)
                this.setState({
                    redirect: true,
                    id: e.data.id

                })

            })


    }

    render() {

        if (this.state.redirect === true) {
            console.log('yes')
            return <Redirect to={{ pathname: "/store", state: { formData: this.state }, id: this.state.id, fromCreatePage: true}} />
        }
        // console.log(this.state)
        let click = this.props.click ? 'block' : 'none'
        // console.log(click)
        // let values = ['business', 'location', 'inventory', 'phone']
        // let style
        // console.log('hithere', this.state.value)
        // let formFields = values.map(e => {
        //     style = e === this.props.iconType ? '1px solid #fff' : '#4643CB'
        //     return <input style={{ border: style }} type='text' value={this.state.e} placeholder={e} onChange={this.handleChange} name={e} />


        // })
        // console.log(this.state.click)
        return (
            <div style={{ display: click }} className='form'>

                <form onSubmit={this.handleSubmit}>
                    {/* <label>{this.e}</label> */}
                    {/* {formFields} */}
                    <button>Submit</button>
                    <Form 
                    click={this.state.click}
                    formData={this.state}
                    handleChange={this.handleChange}
                    
                    
                    />
                </form>

            </div>
        )
    }
}

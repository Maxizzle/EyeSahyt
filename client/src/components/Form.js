import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        let values = ['business', 'location', 'inventory', 'phone']
        let style 
        let formFields = values.map(e => {
            style = e === this.props.iconType ? '1px solid #fff': '#4643CB'  
            return <input style={{ border: style }} type='text' value={this.props.e} placeholder={e} onChange={this.props.handleChange} name={e} />


        })
        return (
            <div>
          {formFields}
            </div>
        )
    }
}

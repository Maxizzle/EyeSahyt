import React, { Component } from 'react'

export default class Api extends Component {

    componentDidMount() {
        fetch('/stores')
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

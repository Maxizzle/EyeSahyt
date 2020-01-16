import React from 'react'
import axios from 'axios'
import Form from '../components/Form'

class Store extends React.Component {
    constructor() {
        super()
        this.state = {
            stores: [],
            updateClick: false,
            formUpdated: false
        }
    }

    handleDelete = async (id) => {
        // event.preventDefault();
        // console.log(this.state)
        const data = {
            name: this.state.business,
            image_url: this.state.inventory,
            address: this.state.location,
            number: this.state.phone
        }

        // console.log(data)
        await axios.delete(`stores/${id}`, data)

        this.props.history.push('/home');
        this.forceUpdate();

    }

    handleChange = (event) => {
        console.log(event.target.name)
        this.setState({ [event.target.name]: event.target.value })
    }
    handleUpdateStore = (e, id) => {
        this.setState({
            updateClick: true,
            updatedStoreData:{}
        })

    }
    updateStore = (e,id) => {
        
        e.preventDefault()
        const data = {
            name: this.state.business,
            image_url: this.state.inventory,
            address: this.state.location,
            number: this.state.phone
        }
      console.log('hi')
        axios.put(`/stores/${id}`, data)
        .then(e=>{
            // console.log(e)
            this.setState({
            updatedStoreData:{
                business:e.data.name,
                inventory: e.data.image_url,
                location: e.data.address,
                phone: e.data.number
            },
            formUpdated:true
        })
        })
        
        //     .then(updatedStore => {
        //     })
        //     .catch(error => console.log(error))
        // // window.location.reload(false)
    }
    render() {
        console.log(this.state)
        let form = this.state.updateClick && <Form handleChange={this.handleChange}/>
        
       
        // let formData
        // if(this.props.location.fromCreatePage === true){
        //     console.log('there')
        //     formData = this.props.location && this.props.location.state.formData
        // }
        let formData = this.state.formUpdated ? this.state.updatedStoreData : this.props.location && this.props.location.state.formData
        return (
            <div className='new-store'>

                <h1>My store</h1>
                {/* <img src={formData.inventory} /> */}
                <p>{formData.business}</p>
                <p>{formData.location}</p>
                <p>{formData.phone}</p>
                <button onClick={() => this.handleDelete(formData.id)}>DELETE</button>
                <button onClick={this.handleUpdateStore}>UPDATE</button>

                {/* console.log(formData.id) */}
                <form onSubmit={(e) => this.updateStore(e, formData.id)}>
                    {form}
                    <button>Submit</button>
                </form>
            </div>
        )

    }

}

export default Store

/* {stores.map(store => { */
/* return ( */
/* <h3>{store.title}</h3>
                            <img src={store.image} />
                            <p>{store.address}</p>
                            <p>{store.number}</p> */

                            // handleDelete = async (id) => {


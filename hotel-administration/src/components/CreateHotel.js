import React, {Component} from 'react'
import Input from './common/Input'

import {create} from '../api/hotel'

class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            location: '',
            description: '',
            numberOfRooms: '',
            image: '',
            parkingSlots: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitHandler(e) {
        e.preventDefault();

        create(this.state.name, this.state.location, this.state.description, this.state.numberOfRooms, this.state.image, this.state.parkingSlots)
            .then(data => {
                this.props.history.push('/')
            }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <h1>Create hotel</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <Input
                        name="name"
                        value={this.state.name}
                        onChange={this.onChangeHandler}
                        label="Name"
                    />
                    <Input
                        name="location"
                        value={this.state.location}
                        onChange={this.onChangeHandler}
                        label="Location"
                    />
                    <Input
                        name="description"
                        value={this.state.description}
                        onChange={this.onChangeHandler}
                        label="Description"
                    />
                    <Input
                        name="numberOfRooms"
                        type="number"
                        value={this.state.numberOfRooms}
                        onChange={this.onChangeHandler}
                        label="Number of Rooms"
                    />
                    <Input
                        name="image"
                        value={this.state.image}
                        onChange={this.onChangeHandler}
                        label="Image URL"
                    />
                    <Input
                        name="parkingSlots"
                        value={this.state.parkingSlots}
                        onChange={this.onChangeHandler}
                        label="Parking Slots"
                    />

                    <input className="btn btn-primary" type="submit" value="Create"/>
                </form>
            </div>
        )
    }
}

export default Create
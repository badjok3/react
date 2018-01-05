import React, {Component} from 'react'
import ReviewSection from './ReviewSection'

import {getHotelById} from '../api/hotel'

class Details extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            location: '',
            description: '',
            numberOfRooms: '',
            image: '',
            parkingSlots: ''
        };

        this.loadHotel = this.loadHotel.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        this.loadHotel(id)
            .catch(e => {
                console.log(e);
            });
    }

    async loadHotel(id) {
        let data = await getHotelById(id);

        this.setState({
            name: data.name,
            location: data.location,
            description: data.description,
            numberOfRooms: data.numberOfRooms,
            image: data.image,
            parkingSlots: data.parkingSlots
        });
    }

    render() {
        return (
            <div>
                <article className="hotel-details">
                    <h2>Hotel {this.state.name} in {this.state.location}</h2>
                    <img alt="current-hotel" src={this.state.image}/>
                    <p>Additional info: {this.state.description}</p>
                    <p>Number of Rooms: {this.state.numberOfRooms}</p>
                    {this.state.parkingSlots && <p>Parking slots: {this.state.parkingSlots}</p>}
                </article>
                <div className="hotel-reviews">
                    <ReviewSection hotelId={this.props.match.params.id}/>
                </div>
            </div>
        )
    }
}

export default Details
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HotelCard extends Component {
    render() {
        const {id, name, image, location} = this.props.hotel;

        return (
            <article className="card">
                <img alt="hotel-img" src={image} className="card-img-top"/>
                <p className="card-title">{name} in {location}</p>
                <Link to={"/hotels/details/" + id}><button className="btn btn-primary">View Details</button></Link>
            </article>
        )
    }
}

export default HotelCard
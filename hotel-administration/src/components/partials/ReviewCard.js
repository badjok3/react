import React, { Component } from 'react'

class ReviewCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user, rating, comment, createdOn} = this.props.review;
        return (
            <article className="review-card">
                <p>{comment}</p>
                <p>By {user}</p>
                <p>Rating: {rating}/5</p>
                <p>Created on {createdOn}</p>
            </article>
        )
    }
}

export default ReviewCard
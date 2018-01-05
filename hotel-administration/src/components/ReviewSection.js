import React, {Component} from 'react'
import ReviewCard from './partials/ReviewCard'

import { addReview, getReviews } from '../api/hotel'
import toastr from 'toastr'

class CreateReview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: '',
            rating: '',
            reviews: []
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.loadReviews = this.loadReviews.bind(this);
    }

    async loadReviews() {
        let data = await getReviews(this.props.hotelId);
        this.setState({reviews: data})
    }

    componentDidMount() {
        this.loadReviews()
            .catch(e => {
               toastr.error(e);
            })
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitHandler(e) {
        e.preventDefault();
        addReview(this.props.hotelId, this.state.comment, this.state.rating)
            .then(data => {
                this.loadReviews()
            }).catch(err => {
            toastr.error(err);
        })
    }

    render() {
        return (
            <div>
            <form onSubmit={this.onSubmitHandler}>
                <label>Add a review:</label> <br/>
                Rating:
                <select onChange={this.onChangeHandler} value={this.state.rating} name="rating" className="form-control">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select> <br/>
                Comment: <br/>
                <textarea
                    onChange={this.onChangeHandler}
                    name="comment"
                    value={this.state.comment}
                    className="form-control"
                /> <br/>
                <input type="submit" value="Submit Review"/>
            </form>
                {this.state.reviews.map(r => {
                    return <ReviewCard key={r.createdOn} review={r}/>
                })}
            </div>
        )
    }
}

export default CreateReview
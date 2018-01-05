import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { calcTime } from '../utilities'

class Comment extends Component {

    render() {
        return (
            <article className="post post-content">
                <p>{this.props.comment.content}</p>
                <div className="info">
                    submitted {calcTime(this.props.comment._kmd.lmt)} ago by {this.props.comment.author} | <Link to={`/delete/comment/${this.props.comment._id}`} className="deleteLink">delete</Link>
                </div>
            </article>
        )
    }
}

export default Comment
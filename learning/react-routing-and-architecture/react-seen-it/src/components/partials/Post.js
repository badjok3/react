import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {calcTime} from '../utilities'

class Post extends Component {
    constructor() {
        super()

        this.state = {
            time: ''
        }
    }

    componentDidMount() {
        this.setState({ time: calcTime(this.props.post._kmd) })
    }

    render() {
        return (
            <article className="post">
                <div className="col rank">
                    <span>{this.props.number}</span>
                </div>
                <div className="col thumbnail">
                    <a href={this.props.post.url}>
                        <img
                            src={this.props.post.imageUrl}
                            alt={this.props.post.title} />
                    </a>
                </div>
                <div className="post-content">
                    <div className="title">
                        <a href={this.props.post.url}>
                            {this.props.post.title}
                        </a>
                    </div>
                    <div className="details">
                        <div className="info">
                            submitted {this.state.time} ago by {this.props.post.author}
                        </div>
                        <div className="controls">
                            <ul>
                                <li className="action"><Link className="commentsLink"
                                                             to={`/details/${this.props.post._id}`}>comments</Link></li>
                                <li className="action"><Link className="editLink"
                                                             to={`/post/edit/${this.props.post._id}`}>edit</Link></li>
                                <li className="action"><Link className="deleteLink"
                                                             to={`/post/delete/${this.props.post._id}`}>delete</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}

export default Post
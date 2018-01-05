import React, {Component} from 'react'
import {getPostById, calcTime, getCurrentPostComments, dataCollector, createComment} from './utilities'
import Comment from './partials/Comment'
import {Link} from 'react-router-dom'
import '../style/comment.css'

class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: {},
            comments: []
        }

        this.postId = this.props.match.params.id

        this.dataCollector = (e) => {
            this.setState(dataCollector(e))
        }

        this.createComment = (e) => {
            this.setState({ loading: false })

            let payload = {
                postId: this.state.post._id,
                content: this.state.content,
                author: localStorage.getItem('user')
            }

            createComment(e, payload)
                .then(data => {
                    this.setState({ loading: false })
                    this.props.history.push(`/details/${this.state.post._id}`)
                })
        }
    }

    componentDidMount() {
        getPostById(this.postId)
            .then(post => {
                getCurrentPostComments(this.postId)
                    .then(comments => {
                        this.setState({
                            post: post, time: calcTime(post._kmd.lmt),
                            comments: comments
                        })
                    })
            })
    }

    render() {
        return <section id="viewComments">
            <div className="post">
                <div className="col thumbnail">
                    <a href={this.state.post.url}>
                        <img src={this.state.post.imageUrl} alt={this.state.post.title}/>
                    </a>
                </div>
                <div className="post-content">
                    <div className="title">
                        <a href={this.state.post.url}>
                            {this.state.post.title}
                        </a>
                    </div>
                    <div className="details">
                        <p>{this.state.post.description}</p>
                        <div className="info">
                            submitted {this.state.time} ago by {this.state.post.author}
                        </div>
                        <div className="controls">
                            <ul>
                                <li className="action"><Link className="editLink"
                                                             to={`/post/edit/${this.state.post._id}`}>edit</Link></li>
                                <li className="action"><Link className="deleteLink"
                                                             to={`/post/delete/${this.state.post._id}`}>delete</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                {/*<div className="clear"></div>*/}
            </div>
            <div className="post post-content">
                <form id="commentForm" onSubmit={e => this.createComment(e)}>
                    <label>Comment</label>
                    <textarea onChange={e => this.dataCollector(e)} name="content" type="text"/>
                    <input type="submit" value="Add Comment" id="btnPostComment"/>
                </form>
            </div>

            {this.state.comments.map(comment => {
                return <Comment key={comment._id} comment={comment}/>
            })}
        </section>
    }
}

export default Details
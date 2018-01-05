import React, {Component} from 'react'
import Post from './partials/Post'
import { getPosts } from './utilities'
import '../style/post.css'

class Catalog extends Component {
    constructor() {
        super()

        this.count = 0;

        this.state = {
            posts: [{}]
        }
    }

    componentDidMount() {
            getPosts().then(data => {
                this.setState({ posts: data })
            })
    }

    render() {
        return (
            <section id="viewCatalog">
                <div className="posts">
                    {
                        this.state.posts.map(post => {
                            this.count = this.count + 1
                           return <Post key={post._id} post={post} number={this.count}/>
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Catalog
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { dataCollector } from './utilities'
import { createPost } from './utilities'
import '../style/submit.css'

class Submit extends Component {
    constructor() {
        super()

        this.dataCollector = (e) => {
            this.setState(dataCollector(e))
        }

        this.createPost = (e, payload) => {
            this.setState({ loading: true })
            payload.author = localStorage.getItem('user')
            createPost(e, payload)
                .then(data => {
                    this.setState({ loading: false })
                    this.redirectPage()
                })
        }

        this.redirectPage = () => {
            this.props.history.push('/catalog')
        }
    }



    render() {
        return (
            <section id="viewSubmit">
                <div className="submitArea">
                    <h1>Submit Link</h1>
                    <p>Please, fill out the form. A thumbnail image is not required.</p>
                </div>
                <div className="submitArea formContainer">
                    <form id="submitForm" className="submitForm" onSubmit={e => this.createPost(e, this.state)}>
                        <label>Link URL:</label>
                        <input onChange={e => this.dataCollector(e)} name="url" type="text" />
                            <label>Link Title:</label>
                            <input onChange={e => this.dataCollector(e)} name="title" type="text" />
                                <label>Link Thumbnail Image (optional):</label>
                                <input onChange={e => this.dataCollector(e)} name="imageUrl" type="text" />
                                    <label>Comment (optional):</label>
                                    <textarea onChange={e => this.dataCollector(e)} name="description" />
                        <input id="btnSubmitPost" value="Submit" type="submit" />
                    </form>
                </div>
            </section>
        )
    }
}

export default Submit
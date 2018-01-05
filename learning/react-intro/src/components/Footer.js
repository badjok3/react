import React, {Component} from 'react'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <h2>Footer {this.props.year}</h2>
            </div>
        )
    }
}

export default Footer
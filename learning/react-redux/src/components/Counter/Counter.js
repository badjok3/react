import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../store/actions/actions'

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.value}</h1>
                <button onClick={this.props.onIncrementCounter}>+</button>
                <button onClick={this.props.onDecrementCounter}>-</button>
                <button onClick={this.props.onClearCounter}>Clear</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actions.increment()),
        onDecrementCounter: () => dispatch(actions.decrement()),
        onClearCounter: () => dispatch(actions.clear())
    }
}

export default connect(null, mapDispatchToProps)(Counter)
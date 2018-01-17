import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../store/actions/actions'

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.value}</h1>
                <button className='btn' onClick={() => this.props.onIncrementCounter(this.props.index)}>+</button>
                <button className='btn' onClick={() => this.props.onDecrementCounter(this.props.index)}>-</button>
                <button className='btn' onClick={() => this.props.onClearCounter(this.props.index)}>Clear</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: (i) => dispatch(actions.increment(i)),
        onDecrementCounter: (i) => dispatch(actions.decrement(i)),
        onClearCounter: (i) => dispatch(actions.clear(i))
    }
}

export default connect(null, mapDispatchToProps)(Counter)
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.ctr}</h1>
                <button onClick={this.props.onIncrement}>Increment</button>
                <button onClick={this.props.onDecrement}>Decrement</button>
                <button onClick={this.props.onAdd}>Add 5</button>
                <button onClick={this.props.onSubtract}>Subtract 5</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT' }),
        onDecrement: () => dispatch({ type: 'DECREMENT' }),
        onAdd: () => dispatch({ type: 'ADD', value: 5 }),
        onSubtract:() => dispatch({ type: 'SUBTRACT', value: 5 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
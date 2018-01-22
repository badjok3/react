import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.ctr}</h1>
                <button onClick={this.props.onIncrement}>Increment</button>
                <button onClick={this.props.onDecrement}>Decrement</button>
                <button onClick={this.props.onAdd}>Add 5</button>
                <button onClick={this.props.onSubtract}>Subtract 5</button>
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <ul>
                    {this.props.storeResults.map(result => {
                        return <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>                        
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storeResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrement: () => dispatch({ type: actionTypes.DECREMENT }),
        onAdd: () => dispatch({ type: actionTypes.ADD, value: 5 }),
        onSubtract:() => dispatch({ type: actionTypes.SUBTRACT, value: 5 }),
        onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
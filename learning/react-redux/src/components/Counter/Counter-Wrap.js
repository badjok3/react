import React, { Component } from 'react'
import Counter from './Counter'

import { connect } from 'react-redux'
import actions from '../../store/actions/actions'
import { store } from '../../index';

import './Counter.css';

class CounterWrap extends Component {

    render() {
        return (
            <div>
                {this.props.counters.map(c => {
                    return (
                        <div key={c.index + Math.random()} className='counter'>
                            <Counter  value={c.counter} index={c.index}/>
                            <button className='btn' onClick={() => this.props.onRemoveCounter(c.index)}>Remove</button>
                        </div>
                    )
                })}
                
                <button className='btn' onClick={this.props.onAddCounter}>Add</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddCounter: () => dispatch(actions.addCounter()),
        onRemoveCounter: (i) => dispatch(actions.removeCounter(i))
    }
}

const mapStateToProps = state => {
    return {
        counters: store.getState()
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterWrap)
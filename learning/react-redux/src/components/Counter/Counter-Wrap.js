import React, { Component } from 'react'
import Counter from './Counter'

import { connect } from 'react-redux'
import actions from '../../store/actions/actions'

class CounterWrap extends Component {
    render() {
        return (
            <div>
                {/*sadly it only works as a console app.. if you could find my mistake and get it to visualize
                that'd be great. I can't subscribe to ReactDOM.render(), because the only one i've got is in index.js
                and it doesn't re-render the ConterWrap component, just the App one*/}
                {this.props.store.subscribe(() => {
                    this.props.store.getState().map(c => {
                        console.log(c);
                        return <Counter key={c.index} value={c.counter} />
                    })
                })}

                <button onClick={this.props.onAddCounter}>Add</button>
                <button onClick={this.props.onRemoveCounter}>Remove</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddCounter: () => dispatch(actions.addCounter()),
        onRemoveCounter: () => dispatch(actions.removeCounter())
    }
}


export default connect(null, mapDispatchToProps)(CounterWrap)
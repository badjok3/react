import React, {Component} from 'react';
import {getYear} from '../../api/remote'

import MonthCard from './MonthCard';

class ListYear extends Component {
        state = {
            months: []
        };

    componentDidMount = () => {
        this.loadYear();
    }

    loadYear = async () => {
        let currentYear = await getYear(this.props.match.params.year);
        let currentMonths = [];
        let id = 1;
        for (let month in currentYear) {
            currentYear[month]['id'] = id;
            currentMonths.push(currentYear[month]);
            id++;
        }
        this.setState({ months: currentMonths });
    }

    render() {
        return (
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Yearly Balance</h1>
                    </div>
                    <div className="row space-top col-md-12">
                    {this.state.months.map(m => {
                        return <MonthCard
                            key={m.id}
                            id={m.id}
                            budget={m.budget}
                            balance={m.balance}
                            year={this.props.match.params.year}/>
                    })}
                    </div>
                </div>
            </div>
        );
    }
}

export default ListYear
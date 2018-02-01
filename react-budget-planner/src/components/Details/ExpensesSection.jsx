import React, {Component} from 'react';
import {removeExpense, getMonthDetails} from '../../api/remote';
import {Link} from 'react-router-dom';
import toastr from 'toastr';

export default class ExpensesSection extends Component {
        state = {
            error: '',
            expenses: []
        };

    componentDidMount = () => {
        getMonthDetails(this.props.year, this.props.month)
            .then((currentMonth) => {
                this.setState({
                    expenses: currentMonth.expenses
                });
            });
    }

    onDeleteHandler = async (e, id) => {
        e.preventDefault();

        const res = await removeExpense(id);
        if (!res.success) {
            this.setState({error: res});
            return;
        }

        const currentMonth = await getMonthDetails(this.props.year, this.props.month);
        this.setState({
            expenses: currentMonth.expenses
        });

        toastr.success('Expense deleted successfully');
    }

    render() {
        let errors = null;
        if (this.state.error) {
            errors = (
                <div>
                    <h2 className="errorMessage">{this.state.error.message}</h2>
                    {Object.keys(this.state.error.errors).map(k => {
                        return <p key={k}>{this.state.error.errors[k]}</p>;
                    })}
                </div>
            );
        }

        return (
            <div className="col-md-8 space-top">
                <div className="row">
                    <h4 className="col-md-9">Expenses</h4>
                    <Link to={`/create/${this.props.year}/${this.props.month}`} className="btn btn-secondary ml-2 mb-2">Add
                        expenses</Link>
                </div>
                {errors}
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Cost</th>
                        <th>Payment Date</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.expenses.map(e => {
                        return <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.category}</td>
                            <td>{e.amount}</td>
                            <td>{e.date}</td>
                            <td>
                                <button className="btn btn-secondary" onClick={ev => this.onDeleteHandler(ev, e.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}
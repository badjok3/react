import React, {Component} from 'react';
import Input from '../common/Input';
import {createExpense} from '../../api/remote';
import toastr from 'toastr';
import {withRouter} from 'react-router-dom';

class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            category: 'Non-essential',
            date: '',
            amount: '',
            error: '',
            submitting: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    async onSubmitHandler(e) {
        e.preventDefault();
        this.setState({submitting: true});
        const expense = {
            year: +this.props.match.params.year,
            month: +this.props.match.params.month,
            name: this.state.name,
            category: this.state.category,
            date: +this.state.date,
            amount: +this.state.amount
        };

        const error = { message: '', errors: [] };

        //TODO: check fields for errors individually
        if(expense.date < 1 || expense.date > 31) {
            error.message = 'Invalid expense';
            error.errors.push('Invalid date.')
        }

        if (error.message) {
            this.setState({error, submitting: false});
            return;
        }

        this.setState({ error: false });
        const res = await createExpense(expense);
        if (!res.success) {
            this.setState({ error: res, submitting: false });
            return;
        }

        this.setState({ submitting: false });
        toastr.success('Expense created succesfully.');
        this.props.history.push(`/year/${this.props.match.params.year}/month/${this.props.match.params.month}`);
    }

    render() {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        let errors = null;
        if (this.state.error) {
            errors = (
                <div>
                    <h2 className="errorMessage">{this.state.error.message}</h2>
                    {this.state.error.errors.map(k => {
                        return (
                            <p key={k}>{k}</p>
                        )
                    })}
                </div>
            );
        }

        return (
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Add Expenses</h1>
                        <h3>{months[this.props.month]} {this.props.year}</h3>
                    </div>
                </div>
                {errors}
                <div className="row space-top">
                    <div className="col-md-10">
                        <form onSubmit={this.onSubmitHandler}>
                            <legend>Add a new expense</legend>
                            <div className="form-group">
                                <label className="col-md-2" htmlFor="name">Name:</label>
                                <Input
                                    className="col-md-2"
                                    name="name"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label className="col-md-2" htmlFor="category">Category:</label>
                                <select className="col-md-2 pl-2" name="category" onChange={this.onChangeHandler}>
                                    <option value="Non-essential">Non-essential</option>
                                    <option value="Fixed">Fixed</option>
                                    <option value="Variable">Variable</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="col-md-2" htmlFor="cost">Cost:</label>
                                <Input className="col-md-2"
                                       name="amount"
                                       type="number"
                                       onChange={this.onChangeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label className="col-md-2" htmlFor="paymentDate">Payment Date:</label>
                                <Input className="col-md-2"
                                       name="date"
                                       onChange={this.onChangeHandler}
                                />
                            </div>
                            <input type="submit" className="btn btn-secondary" value="Add"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Create);
import React, {Component} from 'react';
import {getMonthDetails, changeBudget} from '../../api/remote';
import Input from '../common/Input'
import toastr from 'toastr';
import ExpensesSection from './ExpensesSection'

export default class DetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            budget: '',
            income: '',
            expenses: [],
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    componentWillMount() {
        this.getData();
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    async onSubmitHandler(e) {
        e.preventDefault();
        const res = await changeBudget(this.props.match.params.id, this.props.match.params.year, this.state.income, this.state.budget, this.state.expenses);
        if (!res.success) {
            this.setState({error: res});
            return;
        }

        this.setState({
            budget: res.plan.budget,
            income: res.plan.budget
        });
        this.getData();
        toastr.success('Income and Budget changed successfully');
    }

    async getData() {
        let {year, id} = this.props.match.params;
        const month = await getMonthDetails(year, id);
        this.setState({
            budget: month.budget,
            income: month.income,
            expenses: month.expenses
        });
    }

    render() {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        return (
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Welcome to Budget Planner</h1>
                    </div>
                </div>
                <div className="row space-top">
                    <div className="col-md-12">
                        <div className="card bg-secondary">
                            <div className="card-body">
                                <blockquote className="card-blockquote">
                                    <h2 id="month">{months[this.props.match.params.id - 1]} {this.props.match.params.year}</h2>
                                    <div className="row">
                                        <div className="col-md-3 space-top">
                                            <h4>Planner</h4>
                                            <form onSubmit={this.onSubmitHandler}>
                                                <div className="form-group">
                                                    <label className="form-control-label"
                                                           htmlFor="income">Income:</label>
                                                    <Input className="form-control"
                                                           name="income"
                                                           type="number"
                                                           value={this.state.income}
                                                           onChange={this.onChangeHandler}/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-control-label"
                                                           htmlFor="budget">Budget:</label>
                                                    <Input className="form-control"
                                                           name="budget"
                                                           type="number"
                                                           value={this.state.budget}
                                                           onChange={this.onChangeHandler}/>
                                                </div>
                                                <input type="submit" className="btn btn-secondary" value="Save"/>
                                            </form>
                                        </div>
                                        <ExpensesSection month={this.props.match.params.id} year={this.props.match.params.year} expenses={this.state.expenses}/>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
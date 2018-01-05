import React, {Component} from 'react';
import Input from '../common/Input';
import {login} from '../../api/remote';
import {withRouter} from 'react-router-dom';
import toastr from 'toastr';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: false
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    async onSubmitHandler(e) {
        e.preventDefault();

        const res = await login(this.state.email, this.state.password);
        if (!res.success) {
            this.setState({error: res});
            return;
        }
        localStorage.setItem('authToken', res.token);
        toastr.success('Login successful');
        this.props.history.push(`/years/${(new Date()).getFullYear()}`);
    }

    render() {
        let errors = null;
        if (this.state.error) {
            errors = (
                <div>
                    <h2 className="errorMessage">{this.state.error.message}</h2>
                </div>
            );
        }

        return (
                <div className="container">
                    <div className="row space-top">
                        <div className="col-md-12">
                            <h1>Login</h1>
                        </div>
                        {errors}
                    </div>
                    <form onSubmit={this.onSubmitHandler}>
                        <div className="row space-top">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="email">E-mail</label>
                                    <Input
                                        name="email"
                                        className="form-control"
                                        id="email"
                                        onChange={this.onChangeHandler}/>
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="password">Password</label>
                                    <Input
                                        name="password"
                                        className="form-control"
                                        id="password"
                                        type="password"
                                        onChange={this.onChangeHandler}
                                    />
                                </div>
                                <input type="submit" className="btn btn-secondary" value="Login"/>
                            </div>
                        </div>
                    </form>
                </div>
        );
    }
}

export default withRouter(LoginPage);
import React, {Component} from 'react';
import Input from '../common/Input';
import {register} from '../../api/remote';
import {withRouter} from 'react-router-dom';
import toastr from 'toastr';

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            repeat: '',
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
        if (this.state.password !== this.state.repeat) {
            this.setState({
                error: {
                    message: 'Check the form for errors',
                    errors: {
                        repeat: "Passwords don't match"
                    }
                }
            });
            return;
        }
        const res = await register(this.state.name, this.state.email, this.state.password);

        if (!res.success) {
            this.setState({error: res});
            return;
        }

        toastr.success('Register successful');
        this.props.history.push('/login');
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
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Register</h1>
                        <p>Please fill all fields.</p>
                    </div>
                    {errors}
                </div>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <label className="form-control-label" htmlFor="name">Username</label>
                                <Input
                                    name="name"
                                    className="form-control"
                                    id="new-username"
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                            <div className="form-group has-success">
                                <label className="form-control-label" htmlFor="new-email">E-mail</label>
                                <Input
                                    name="email"
                                    className="form-control is-valid"
                                    id="new-email"
                                    onChange={this.onChangeHandler}/>
                            </div>
                            <div className="form-group has-danger">
                                <label className="form-control-label" htmlFor="new-password">Password</label>
                                <Input
                                    name="password"
                                    className="form-control is-invalid"
                                    id="new-password"
                                    type="password"
                                    onChange={this.onChangeHandler}/>
                            </div>
                            <div className="form-group has-danger">
                                <label className="form-control-label" htmlFor="new-repeat-password">Repeat
                                    password</label>
                                <Input className="form-control is-invalid"
                                       name="repeat"
                                       id="new-repeat-password"
                                       type="password"
                                       onChange={this.onChangeHandler}/>
                            </div>
                            <input type="submit" className="btn btn-secondary" value="Register"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(RegisterPage);
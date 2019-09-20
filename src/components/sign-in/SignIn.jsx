import React, { Component } from 'react';
import './SignIn.scss';
import FormInput from '../../components/form-input/FormInput';
import CustomButton from '../../components/custom-button/CustomButton';
import { SignInWithGoogle } from '../../utils/firebase';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>

                    <FormInput
                        label="E-mail"
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        requried={true}
                    />

                    <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        requried={true}
                    />

                    <CustomButton>Send</CustomButton>
                    <CustomButton onClick={SignInWithGoogle}>Sign In with Google</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
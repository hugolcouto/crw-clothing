import React, { Component } from 'react';
import './SignIn.scss';
import FormInput from '../../components/form-input/FormInput';
import CustomButton from '../../components/custom-button/CustomButton';
import { SignInWithGoogle, auth } from '../../utils/firebase';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (err) {
            console.error(err);
        }
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
                        required
                    />

                    <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        required
                    />

                    <CustomButton>Send</CustomButton>
                    <CustomButton onClick={SignInWithGoogle}>Sign In with Google</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
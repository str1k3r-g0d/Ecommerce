import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component'
import './sign-in-and-sign-up.styles.scss';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className = 'sign-in-and-sign-up'>
        <div className = "SignIn">
            <SignIn />
        </div>
        
        <div className = "SignUp">
            <SignUp />
        </div>
    </div>
);

export default SignInAndSignUpPage;
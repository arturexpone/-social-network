import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength = maxLengthCreator(10);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type="text" placeholder='login' validate={[required, maxLength]} name={'login'} component={Input}/></div>
            <div><Field type="text" placeholder='password' validate={[required, maxLength]} name={'password'} component={Input}/></div>
            <div><Field type="checkbox" component={Input} validate={[required, maxLength]} name={'rememberMe'}/>remember me</div>
            <div><button>Login</button></div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm />
        </div>
    )
};

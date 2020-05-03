import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {compose} from "redux";
import {Redirect} from "react-router-dom";

const maxLength = maxLengthCreator(30);

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type="text" placeholder='Email' validate={[required, maxLength]} name={'email'} component={Input}/></div>
            <div><Field type="password" placeholder='Password' validate={[required, maxLength]} name={'password'} component={Input}/></div>
            <div><Field type="checkbox" component={Input} validate={[required, maxLength]} name={'rememberMe'}/>remember me</div>
            <div>{props.isCaptcha ? <img src={props.urlCaptcha} alt=""/> : null}</div>
            <div>{props.isCaptcha ? <Field type="text" component={Input} name={'captcha'}/> : null}</div>
            <div><button>Login</button></div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm);

const Login = (props) => {
    function onSubmit (formData) {
        debugger
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} isCaptcha={props.isCaptcha} urlCaptcha={props.urlCaptcha}/>
        </div>
    )
};

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    isCaptcha: state.auth.isCaptcha,
    urlCaptcha: state.auth.urlCaptcha
});

export default compose(
    connect(mapStateToProps,{login})
)(Login)

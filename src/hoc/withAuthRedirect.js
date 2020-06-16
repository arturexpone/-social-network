import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";


export const withAuthRedirect = (Component) => {

    let mapStateToProps = (state) => ({isAuth: state.auth.login});

    class RedirectComponent extends React.Component {
        render () {
            if(!this.props.isAuth) {return <Redirect to={'/Login'} />}
            return (
                <Component {...this.props}/>
            )
        }
    }
    return connect(mapStateToProps)(RedirectComponent);

};
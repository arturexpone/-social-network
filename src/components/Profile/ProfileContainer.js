import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

 class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render () {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));
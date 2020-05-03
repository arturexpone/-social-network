import React from 'react';
import {connect} from "react-redux";
import {
    setCurrentPage,
    setUsers,
    toggleFollowingProgress, getUsersThunkCreator, followThunkCreator
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

export class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }


    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsersThunkCreator(page, this.props.pageSize);
    };


    render() {
        return <Users currentPage={this.props.users.currentPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      isFetching={this.props.users.isFetching}
                      toggleFollowingProgress={this.props.toggleFollowingProgress}
                      followingInProgress={this.props.followingInProgress}
                      followThunkCreator={this.props.followThunkCreator}
        />
    }
}

// const mapStateToProps = (state) =>{
//     return {
//     users: state.users,
//     pageSize: state.users.pageSize,
//     totalUsersCount: state.users.totalUsersCount,
//     currentPage: state.users.currentPage,
//     isFetching: state.users.isFetching,
//     followingInProgress: state.users.followingInProgress
// }};


const mapStateToProps = (state) =>{
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }};


export default compose(
    connect(mapStateToProps, {setUsers, setCurrentPage, toggleFollowingProgress, getUsersThunkCreator, followThunkCreator}),
    )(UsersContainer);
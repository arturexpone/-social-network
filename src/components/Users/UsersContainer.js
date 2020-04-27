import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setLoader,
    setCurrentPage,
    setUsers,
    unfollow,
    toggleFollowingProgress
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {getUsers} from "../../api/api";

export class UsersContainer extends React.Component {

    componentDidMount() {

        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setLoader(false);
                this.props.setUsers(data.items);
            })
    }


    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.setLoader(true);
        getUsers(page, this.props.pageSize).then(data => {
                this.props.setLoader(false);
                this.props.setUsers(data.items)
            });
    };


    render() {
        return <Users currentPage={this.props.users.currentPage}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      users={this.props.users.users}
                      onPageChanged={this.onPageChanged}
                      getUsers={this.props.users.getUsers}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      isFetching={this.props.users.isFetching}
                      toggleFollowingProgress={this.props.toggleFollowingProgress}
                      followingInProgress={this.props.followingInProgress}
        />
    }
}

const mapStateToProps = (state) =>{
    return {
    users: state.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    followingInProgress: state.users.followingInProgress
}};

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setLoader, toggleFollowingProgress})(UsersContainer);
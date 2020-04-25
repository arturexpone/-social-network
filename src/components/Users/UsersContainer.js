import React from 'react';
import {connect} from "react-redux";
import {followAC, setIsFetching, setCurrentPageAC, setUsers, unFollowAC} from "../../redux/users-reducer";
import * as axios from "axios";
import {Users} from "./Users";

export class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setLoader(false);
                this.props.setUsers(response.data.items);
            })
    }

    componentWillUnmount() {
        console.log('Убрал')
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.setLoader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setLoader(false);
                this.props.setUsers(response.data.items)
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
        />
    }
}

const mapStateToProps = (state) =>{
    return {
    users: state.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching
}};

const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unFollowAC(userId)),
    setUsers: (users) => dispatch(setUsers(users)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    setLoader: (value) => dispatch(setIsFetching(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
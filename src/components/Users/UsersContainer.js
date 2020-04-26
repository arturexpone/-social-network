import React from 'react';
import {connect} from "react-redux";
import {follow, setLoader, setCurrentPage, setUsers, unfollow} from "../../redux/users-reducer";
import * as axios from "axios";
import {Users} from "./Users";

export class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true,
            headers: {
                'API-KEY' : '21b6fd0b-f892-4a38-acb4-3ec43e883c9a'
            }
        })
            .then(response => {
                this.props.setLoader(false);
                this.props.setUsers(response.data.items);
            })
    }


    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.setLoader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {withCredentials: true,
            headers: {
                'API-KEY' : '21b6fd0b-f892-4a38-acb4-3ec43e883c9a'
            }})
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

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setLoader})(UsersContainer);
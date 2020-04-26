import React from 'react';
import {Preloader} from "../common/preloader/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


export const Users = ({currentPage, follow, unfollow, users, onPageChanged, getUsers, totalUsersCount, pageSize, isFetching}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {isFetching ? <Preloader/> : null}
            </div>
            <div>
                {pages.map(page => <span
                    className={currentPage === page ? 'pagination selected-page' : 'pagination'}
                    onClick={() => onPageChanged(page)}>{page}</span>)}
            </div>


            {users.map(user => {
                return <div key={user.id} className='users-block'>
                    <div className='user-block'>
                        <NavLink to={`/profile/${user.id}`}>
                            <img
                                src={user.photos.small ? user.photos.small : 'https://pngimg.com/uploads/anonymous_mask/anonymous_mask_PNG31.png'}
                                className='user-img'/>
                        </NavLink>
                    </div>
                    <div className='user-block'>
                        <span className='user-name'>{user.name}</span>
                    </div>

                    <div className='btn'>
                        {user.followed ?
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '21b6fd0b-f892-4a38-acb4-3ec43e883c9a'
                                    }
                                })
                                    .then(response => {

                                        if (response.data.resultCode === 0) {
                                            unfollow(user.id)
                                        }
                                    })

                            }}> Unfollow </button> :
                            <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${user.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '21b6fd0b-f892-4a38-acb4-3ec43e883c9a'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            follow(user.id)
                                        }
                                    })


                            }}>Follow</button>}
                    </div>

                    <div className='user-block'>
                        {user.status}
                    </div>

                    <div className='user-block'>
                        <span>{'user.location.city'}</span>
                        <br/>
                        <span>{'user.location.country'}</span>
                    </div>


                </div>
            })}
            <div className='get-users-block'>
                <button className='btn-get-users' onClick={getUsers}>Get Users</button>
            </div>
        </div>)
};


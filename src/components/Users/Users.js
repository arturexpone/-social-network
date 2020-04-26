import React from 'react';
import {Preloader} from "../common/preloader/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {followAPI, unfollowAPI} from "../../api/api";


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
                            <button onClick={() => unfollowAPI(user.id).then(resultCode => resultCode === 0 ? unfollow(user.id) : null)}> Unfollow </button> :
                            <button onClick={() => followAPI(user.id).then(resultCode => resultCode === 0 ? follow(user.id) : null)}>Follow</button>}
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


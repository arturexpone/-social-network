import React from 'react';
import {Preloader} from "../common/preloader/Preloader";
import {NavLink} from "react-router-dom";


export const Users = ({currentPage, users, onPageChanged, totalUsersCount, pageSize, isFetching, followingInProgress, followThunkCreator}) => {
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
                let disableBtn = followingInProgress.some(u => user.id === u);
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
                            <button disabled={disableBtn} onClick={() => followThunkCreator(user.id, 'unfollow')}> Unfollow </button> :
                            <button disabled={disableBtn} onClick={() => followThunkCreator(user.id, 'follow')}>Follow</button>}
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
                <button className='btn-get-users' onClick={'#'}>Get Users</button>
            </div>
        </div>)
};


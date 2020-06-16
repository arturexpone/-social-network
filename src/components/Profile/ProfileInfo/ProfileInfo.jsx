import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profileWrapper}>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.small}/>
                <br/>
                <ProfileStatus status={status} updateStatus={updateStatus}/>

            </div>
            <div className={s.lookingForAJob}>
                <h4>Look for work:</h4>
                <ul>
                    <li>{profile.lookingForAJob === true ? 'Yes' : 'None'}</li>
                </ul>
            </div>
            <div className={s.lookingForAJobDescription}>
                <h4>Look for work description: </h4>
                <span>{profile.lookingForAJobDescription !== null ? profile.lookingForAJobDescription : 'None'}</span>
            </div>
            <div className={s.fullName}>
                <h4>Full name: </h4>
                <span>{profile.fullName}</span>
            </div>
            <div className={s.contacts}>
                <h3>Contacts</h3>
                <ul>
                    <li>
                        <span className={s.contactsSpan}>facebook: </span>
                        <a href="">{profile.contacts.facebook}</a>
                    </li>
                    <li>
                        <span className={s.contactsSpan}>website: </span>
                        <a href="">{profile.contacts.website}</a>
                    </li>
                    <li>
                        <span className={s.contactsSpan}>vk: </span>
                        <a href="">{profile.contacts.vk}</a>
                    </li>
                    <li>
                        <span className={s.contactsSpan}>twitter: </span>
                        <a href="">{profile.contacts.twitter}</a>
                    </li>
                    <li>
                        <span className={s.contactsSpan}>instagram: </span>
                        <a href="">{profile.contacts.instagram}</a>
                    </li>
                    <li>
                        <span className={s.contactsSpan}>youtube: </span>
                        <a href="">{profile.contacts.youtube}</a>
                    </li>
                    <li>
                        <span className={s.contactsSpan}>github: </span>
                        <a href="">{profile.contacts.github}</a>
                    </li>
                    <li>
                        <span className={s.contactsSpan}>mainLink: </span>
                        <a href="">{profile.contacts.facebook}</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo;
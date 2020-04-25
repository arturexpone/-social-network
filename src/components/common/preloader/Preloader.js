import React from 'react';
import loader from "../../../assets/Spinner-1s-200px.svg";

export const Preloader = () => {
    return (
        <div>
            <img src={loader}/>
        </div>
    )
}
import React from 'react';
import s from './FormControls.module.css'

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched;
    return (
        <div className={ hasError ? `${s.formControl} ${s.error}` : null}>
            <textarea {...input} {...props}></textarea>
            <div>
                { hasError ? <span>{meta.error}</span> : null}
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched;
    return (
        <div className={ hasError ? `${s.formControl} ${s.error}` : null}>
            <input {...input} {...props}></input>
            <div>
                { hasError ? <span>{meta.error}</span> : null}
            </div>
        </div>
    )
}
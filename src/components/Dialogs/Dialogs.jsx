import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength = maxLengthCreator(100);

const Dialogs = ({dialogsPage, onSendMessageClick, isAuth}) => {

    if(!isAuth) {return <Redirect to={'/Login'}/>}

    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = dialogsPage.messages.map(m => <Message message={m.message}/>);

    let addNewMessage = (values) => {
        onSendMessageClick(values.newMessageBody)
        console.log('add new message')
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength]} name='newMessageBody' placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'addMessageForm'})(AddMessageForm);

export default Dialogs;
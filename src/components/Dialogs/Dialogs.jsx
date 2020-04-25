import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({dialogsPage, onNewMessageChange, onSendMessageClick}) => {

    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = dialogsPage.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = dialogsPage.newMessageBody;

    let sendMessage = () => {
        onSendMessageClick();
    }

    let messageChange = (e) => {
        let body = e.target.value;
        onNewMessageChange(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={messageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = ({store}) => {
//
//     let state = store.getState();
//
//     let onSendMessageClick = () => {
//         store.dispatch(sendMessageCreator());
//     }
//
//     let onNewMessageChange = (body) => {
//         store.dispatch(updateNewMessageBodyCreator(body));
//     }
//
//     return (
//         <Dialogs onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange} state={state}/>
//     )
// }

let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
});
let mapDispatchToProps = (dispatch) => ({
    onSendMessageClick: () => dispatch(sendMessageCreator()),
    onNewMessageChange: (body) => dispatch(updateNewMessageBodyCreator(body)),
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
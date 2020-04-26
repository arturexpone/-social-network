import React from 'react';
import {onSendMessageClick, onNewMessageChange} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
});

const DialogsContainer = connect(mapStateToProps, {onSendMessageClick, onNewMessageChange})(Dialogs);

export default DialogsContainer;
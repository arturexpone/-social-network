import React from 'react';
import {onSendMessageClick, onNewMessageChange} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
});

export default compose(
    connect(mapStateToProps, {onSendMessageClick, onNewMessageChange}),
    withAuthRedirect,
)(Dialogs);
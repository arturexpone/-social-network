import React from 'react';

export class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    toggleEditMode = (update) => {
        this.setState((state) => ({editMode: !state.editMode}));
        if (update) {
            this.props.updateStatus(this.state.status);
        }
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    };

    render () {
        return (
            <>
                <div>
                    {!this.state.editMode ?
                        <span onDoubleClick={() => this.toggleEditMode(false)}>{this.props.status}</span> :
                        <input autoFocus={true} value={this.state.status} onBlur={ () => this.toggleEditMode(true)} onChange={this.onStatusChange}></input>
                            }
                </div>
            </>
        )
    }
}
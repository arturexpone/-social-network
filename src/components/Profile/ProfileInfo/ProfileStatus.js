import React from 'react';

export class ProfileStatus extends React.Component {

    state = {
        editMode: false
    };

    toggleEditMode = () => {
        this.setState((state) => ({editMode: !state.editMode}))
    };


    render () {
        return (
            <>
                <div>
                    {!this.state.editMode ?
                        <span onDoubleClick={this.toggleEditMode}>{this.props.status}</span> :
                        <input autoFocus={true} value={this.props.status} onBlur={this.toggleEditMode}></input>
                            }
                </div>
            </>
        )
    }
}
import React, { createContext } from 'react';

export const userContext = createContext();

class UserContextProvider extends React.Component {
    state = {
        username: ''
    }
    onUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
    }
    render() {
        return (
            <userContext.Provider value={this.state.username}>
                {this.props.children}
            </userContext.Provider>
        )
    }
}

export default UserContextProvider;
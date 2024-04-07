import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Welcome to React wolrd from State',
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}
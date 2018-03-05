import React, {Component} from 'react';
import Quiz from './component/Quiz';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('./users')
            .then(res => res.json())
            .then(users => this.setState({users}));
    }

    render() {
        return (
            <div className="App">
                <Quiz/>
                <ul>
                    {this.state.users.map((user) => {
                       return <li key={user.id}>{user.username}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default App;

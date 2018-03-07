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
    }

    render() {
        return (
            <div className="App">
                <Quiz/>
            </div>
        );
    }
}

export default App;

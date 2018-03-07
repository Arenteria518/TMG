import React, {Component} from 'react';

class Guess extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.compareMovies = this.compareMovies.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchMovies(this.props.selectedActor.id)
            .then(() => {
                this.compareMovies();
            })
    }

    compareMovies() {
        let arr = this.props.movies.filter((movie) => {
            return movie.title.replace(/[^\w]/g, '').toLowerCase() === this.state.value.replace(/[^\w]/g, '').toLowerCase();
        });

        if (arr.length > 0) {
            alert("true");
            this.props.selectActor(this.props.actors[Math.floor(Math.random() * this.props.actors.length)])
            this.setState({value: ''});
        }
        else {
            alert("false")
        }

        arr = [];
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Guess;
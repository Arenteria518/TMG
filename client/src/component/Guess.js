import React, {Component} from 'react';
import AutoSuggest from 'react-autosuggest';

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => {
    console.log(suggestion.title);
    return suggestion.title
};

const renderSuggestion = suggestion => (
    <div>
        {suggestion.title}
    </div>
)


class Guess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.compareMovies = this.compareMovies.bind(this);
    }

    getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0 ? [] : this.props.suggestions.filter(lang =>
            lang.title.toLowerCase().slice(0, inputLength) === inputValue
        );
    }

    onChange = (event, {newValue, method}) => {
        if (newValue.length > 0 && method !== 'down' && method !== 'up' && method !== "click") {
            this.props.movieSearch(event.target.value);
        }
        this.setState({
            value: newValue
        })
    };

    onSuggestionsFetchRequested = ({value}) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    //Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };


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
        const {value, suggestions} = this.state;

        const inputProps = {
            placeholder: 'Type in a movie',
            value,
            onChange: this.onChange
        };

        return (
            <form onSubmit={this.handleSubmit}>
                <AutoSuggest
                    suggestions={this.props.suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                    alwaysRenderSuggestions={true}
                />
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

export default Guess;
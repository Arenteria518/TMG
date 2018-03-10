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
            suggestions: [],
            isNotDisabled: true
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
        if(method === "click"){
            this.handleSubmit();
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
        if(e) e.preventDefault();
        if(this.state.isNotDisabled) {
            this.props.fetchMovies(this.props.selectedActor.id)
                .then(() => {
                    this.compareMovies();
                })
        }
    }

    compareMovies() {
        let arr = this.props.movies.filter((movie) => {
            return movie.title.replace(/[^\w]/g, '').toLowerCase() === this.state.value.replace(/[^\w]/g, '').toLowerCase();
        });

        if (arr.length > 0) {
            this.props.toggleIsCorrect(true);
            this.props.toggleAnswer();
            this.setState({isNotDisabled: false})
            this.delay(600)
                .then(() => {
                    this.props.toggleAnswer();
                    this.props.clearSearch();
                    this.props.selectActor(this.props.actors[Math.floor(Math.random() * this.props.actors.length)])
                    this.setState({value: ''});
                    this.setState({isNotDisabled: true})
                })
        }
        else {
            this.props.toggleIsCorrect(false);
            this.props.toggleAnswer();
            this.setState({isNotDisabled: false})
            this.delay(600)
                .then(() => {
                    this.props.toggleAnswer();
                    this.setState({isNotDisabled: true})
                })
        }

        arr = [];
    }

    delay(time, v){
        return new Promise((resolve) => {
            setTimeout(resolve.bind(null, v), time)
        })
    }

    render() {
        const {value, suggestions} = this.state;

        const inputProps = {
            placeholder: 'Type in a movie',
            value,
            onChange: this.onChange
        };

        return (
            <form className="autosuggest__container" onSubmit={this.handleSubmit}>
                <AutoSuggest
                    suggestions={this.props.suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                    alwaysRenderSuggestions={true}
                />
            </form>
        )
    }
}

export default Guess;